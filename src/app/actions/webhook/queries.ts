import { client } from "@/src/lib/prisma"



export const matchKeyword = async (keyword: string) => {
    return await client.keyword.findFirst({
        where: {
            word: {
                equals: keyword,
                mode: 'insensitive'
            }
        }
    })
}

export const getKeywordAutomation =async (automaiotnId: string, dm: boolean) => {
        return await client.automation.findUnique({
            where: {
                id: automaiotnId,
            },
            include: {
                dms: dm,
                trigger: {
                    where: {
                        type: dm ? 'DM' : 'COMMENT',
                    }
                },

                listener: true,
                User: {
                    select: {
                        subscription: {
                            select: {
                                plan: true,
                            }
                        },
                        integrations: {
                            select:{
                                token: true
                            }
                        }
                    }
                }
            }
        })
}


export const trackResposes = async (
    automationId: string,
    type: 'COMMENT' | 'DM'
) => {
    if (type === 'COMMENT') {
        return await client.listener.update({
            where: { automationId },
            data: {
                commentCount: {
                    increment: 1,
                }
            }
        })
    }

    if (type === "DM"){
        return await client.listener.update({
            where: {automationId},
            data: {
                dmCount: {
                    increment: 1
                }
            }
        })
    }
}