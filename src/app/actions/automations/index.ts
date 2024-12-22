

"use server"

import { onCurrentUser } from "../user"
import { CreateAutomation, findAutomation, getAutomations } from "./queries"


export const createAutomaitons = async (id?: string) =>{
    const user = await onCurrentUser()

    try {
        const create = await CreateAutomation(user.id,id)
        if (create ) return { status: 200, data: 'Automation Created'}

        return {status: 404, data: "Oops! something went wrong"}
    } catch (error) {
        return{ status: 500 , data:"Internal server error"}
    }
}


export const getAllAutomaitons = async () => {
    const user = await onCurrentUser()

    try {
        const automations = await getAutomations(user.id)
        if(automations) return {status: 200, data: automations.automations}
        return {status: 404, data: []}
    } catch (error) {
        return {status: 500 , data: []}
    }
}

export const getAutomationInfo =async  (id: string) =>{
    await onCurrentUser()
    try {
        const automation = await findAutomation(id)
        if(automation) return {status: 200, data: automation}

        return { status: 404 }
    } catch (error) {
        return { status: 500 }
    }
}