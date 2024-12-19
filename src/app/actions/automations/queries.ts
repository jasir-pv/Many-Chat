


'use server'

import { client } from "@/src/lib/prisma"


export const CreateAutomation = async ( clerkId: string) => {

    return await client.user.update({
        where: {
            clerkId,
        },
        data: {
            automations: {
                create: {}
            }
        }
    })
}


export const getAutomations = async (clerkId: string) => {
    return await client.user.findUnique({
        where:{
            clerkId,
        },
        select: {
            automations:{
                orderBy:{
                    createdAt: "asc",
                },
                include: {
                    keywords: true,
                    listener: true
                }
            }
        }
    })
}