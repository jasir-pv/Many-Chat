
"use server"

import { onCurrentUser } from "../user"
import { addListener, addTrigger, CreateAutomation, findAutomation, getAutomations, updateAutomation } from "./queries"


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


export const getAllAutomations = async () => {
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


export const updateAutomationName = async (
    automaiotnId: string,
    data: {
        name?: string
        active?: boolean
        automation?: string
    }
) =>{
    await onCurrentUser()

    try {
        const update = await updateAutomation(automaiotnId, data)
        if (update) {
            return {status: 200, data: 'Automaiton Succesfully updated'}
        }

        return { status: 404, data: 'Oops ! could not find automation'}

    } catch (error) {
        return { status: 500, data: 'Oops ! something went wrong'}

    }
}




export const saveListener = async (
    automationId : string,
    listener : "SMARTAI" | 'MESSAGE',
    prompt: string,
    replay?: string
) => {
    await onCurrentUser()
    try {
        const create = await addListener (automationId, listener, prompt, replay)

        if (create) return {status: 200, data: 'Listener created'}
        return {status: 404, data: 'Cant save listener'}
    } catch (error) {
        return { status: 500, data: "Oops! something went wrong"}
    }
}   

export const saveTrigger = async (
    automationId: string , trigger: string[] 
        ) => {
            await onCurrentUser()

            try {
                const create = await addTrigger (automationId, trigger)
                if (create) return { status: 200, data: 'Trigger saved'}
                return { status: 500, data: 'Cannot save trigger'}
            } catch (error) {
                return { status: 404, data: 'Oops! something went wrong'}
            }
        }