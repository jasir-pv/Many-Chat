
" use server"

import { currentUser } from "@clerk/nextjs/server"
import { redirect } from "next/navigation"
import { findUser } from "./queries"


export const onCurrentUser = async ()=>{
    const user = await currentUser()
    if(!user) return redirect('/sign-in')

        return user
}

export const onBoardUser = async ()=>{
    const user = await onCurrentUser()

    try{
        const found = await findUser(user.id)
    }catch(error){
        console.log(error)
    }
}