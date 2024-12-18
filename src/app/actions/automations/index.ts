

"use server"

import CreateAutomation from "@/src/components/global/create-automation"
import { onCurrentUser } from "../user"


export const getAllAutomaitons = async () =>{
    const user = await onCurrentUser()

    try {
        const create = await CreateAutomation(user.id)
    } catch (error) {
        
    }
}