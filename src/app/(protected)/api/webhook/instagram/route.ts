import { createChatHistory, getKeywordAutomation, matchKeyword, trackResponses, trackResposes } from "@/src/app/actions/webhook/queries";
import { sendDM } from "@/src/lib/fetch";
import { openai } from "@/src/lib/openai";
import { client } from "@/src/lib/prisma";
import { NextRequest, NextResponse } from "next/server";



export async function GET(req: NextRequest) {
    const hub = req.nextUrl.searchParams.get('hub.challenge')
    return new NextResponse(hub)
}

export async function POST(req:NextRequest) {
    const webhook_payload = await req.json()
    let matcher
    try {
        if (webhook_payload.entry[0].messaging){
            matcher = await matchKeyword(
                webhook_payload.entry[0].messaging[0].message.text
            )
        }

        if(webhook_payload.entry[0].changes) {
            matcher = await matchKeyword(
                webhook_payload.entry[0].changes[0].value.text
            )
        }

        if(matcher && matcher.automationId){
            // we have keyword matcher

            if (webhook_payload.entry[0].messaging) {
                const automation = await getKeywordAutomation(
                    matcher.automationId,true
                )

                if(automation && automation.trigger){
                    if(automation.listener && 
                        automation.listener.listener === 'MESSAGE'){
                            const direct_messsage = await sendDM(
                                webhook_payload.entry[0].id,
                                webhook_payload.entry[0].messaging[0].sender.id,
                                automation.listener?.prompt,
                                automation.User?.integrations[0].token!
                            ) 

                            if(direct_messsage.status === 200) {
                                const tracked = await trackResponses(automation.id, 'DM')
                                if (tracked) {
                                    return NextResponse.json(
                                        {
                                            message: 'Message sent',
                                        },
                                        { status: 200}
                                    )
                                }
                            }

                        }

                        if(automation.listener &&
                            automation.listener.listener === 'SMARTAI' && 
                            automation.User?.subscription?.plan === 'PRO'
                        ) {
                           const smart_ai_message =  await openai.chat.completions.create({
                            model: 'gpt-4o',
                            messages: [
                                {
                                    role: 'assistant',
                                    content: `${automation.listener?.prompt}: Keep responses under 2 sentences`,
                                }
                            ]
                           })


                           if (smart_ai_message.choices[0].message.content) {
                            const reciever = createChatHistory(
                              automation.id,
                              webhook_payload.entry[0].id,
                              webhook_payload.entry[0].messaging[0].sender.id,
                              webhook_payload.entry[0].messaging[0].message.text
                            )
              
                            const sender = createChatHistory(
                              automation.id,
                              webhook_payload.entry[0].id,
                              webhook_payload.entry[0].messaging[0].sender.id,
                              smart_ai_message.choices[0].message.content
                            )
              
                            await client.$transaction([reciever, sender])
              
                            const direct_message = await sendDM(
                              webhook_payload.entry[0].id,
                              webhook_payload.entry[0].messaging[0].sender.id,
                              smart_ai_message.choices[0].message.content,
                              automation.User?.integrations[0].token!
                            )
              
                            if (direct_message.status === 200) {
                              const tracked = await trackResponses(automation.id, 'DM')
                              if (tracked) {
                                return NextResponse.json(
                                  {
                                    message: 'Message sent',
                                  },
                                  { status: 200 }
                                )
                              }
                            }   
                        }
                        }

                }
            }
        }
    } catch (error) {
        
    }
}