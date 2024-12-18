


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