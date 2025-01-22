import { QueryClient, QueryFunction } from "@tanstack/react-query"
import { onUserInfo } from "../app/actions/user"
import { getAllAutomations, getAutomationInfo } from "../app/actions/automations"
import { client } from "../lib/prisma"


const prefetch = async (
    client: QueryClient,
    action: QueryFunction,
    key: string
) =>{

    return await client.prefetchQuery({
        queryKey: [key],
        queryFn: action,
        staleTime: 60000,
    })
}

export const PrefetchUserProfile =async (client: QueryClient) => {
    return await prefetch(client, onUserInfo, 'user-profile')
}


export const PrefetchUserAutomations = async (client: QueryClient) =>{

    return await prefetch(client, getAllAutomations , 'user-automation')
}


export const PrefetchUserAutomation = async (
    client: QueryClient,
    automationId: string
) => {
    return await prefetch( 
        client, 
        () => getAutomationInfo(automationId),'automation-info'
    )
}