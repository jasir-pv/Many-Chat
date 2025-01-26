
'use server'

import { redirect } from "next/navigation"
import { onCurrentUser } from "../user"
import { getIntegration } from "./queries"
import { generateTokens } from "@/src/lib/fetch"
import axios from "axios"


export const onOAuthInstagram = (strategy: 'INSTAGRAM' | 'CRM') => {
    if(strategy === 'INSTAGRAM') {
        return redirect(process.env.INSTAGRAM_EMBEDDED_OAUTH_URL as string)
    }
}


export const onIntegrate = async (code: string) => {
    const user = await onCurrentUser()

    try {
        const integration = await getIntegration(user.id)

        if(integration && integration.integrations.length === 0){
            const token = await generateTokens(code)
            console.log(token)

            if(token){
                const insta_id = await axios.get(
                    `${process.env.INSTAGRAM_BASE_URL}/me?fields=user_id&
                    access_token=${token.access_token}`
                )

                const today = new Date()
                const expire_date = today.setDate(today.getDate()+ 60 )
            }
        }
    } catch (error) {
        
    }
}