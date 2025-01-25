import { getKeywordAutomation, matchKeyword, trackResposes } from "@/src/app/actions/webhook/queries";
import { sendDM } from "@/src/lib/fetch";
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
                                const tracked = await trackResposes(automation.id, 'DM')
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
                             
                        }

                }
            }
        }
    } catch (error) {
        
    }
}