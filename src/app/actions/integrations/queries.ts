
"use server"

import { client } from "@/src/lib/prisma"


export const updateIntegration = async (token: string, expire: Date,
    id: string,
) => {
    return await client.integrations.update({
        where: { id },
        data: {
            expiresAt: expire,
        }
    })
}


export const getIntegration = async ( clerkId : string) => {
    
    return await client.user.findUnique({
        where: {
            clerkId,
        },
        select: {
            integrations: {
                where: {
                    name: 'INSTAGRAM'
                }
            }
        }
    })
}