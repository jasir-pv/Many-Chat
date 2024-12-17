
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