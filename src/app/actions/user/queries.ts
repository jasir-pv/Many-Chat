"use server"

import { client } from "@/src/lib/prisma"



export const findUser = async (clerkId: string) =>{
    return await client.user.findUnique({
        where:{
            clerkId,
        },
        include:{
            subscription: true,
            integrations: {
                select: {
                    id: true,
                    token: true,
                    expiresAt: true,
                    name: true,
                },
            },
        },
    })
}