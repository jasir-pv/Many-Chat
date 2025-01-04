import { useRef, useState } from "react"
import { createAutomaitons } from "../app/actions/automations"
import { userMutationData } from "./use-mutation-data"


export const useCreateAutomation = (id?: string) =>{
    const {isPending, mutate} = userMutationData(
        ['create-automation'], 
        () => createAutomaitons(id),

        'user-automations'
    )

    return {isPending, mutate}
}

export const useEditAutomation = (automaiotnId: string)=>{
    const [edit, setEdit] = useState(false)
    const inputRef = useRef<HTMLInputElement | null> (null)
    const enableEdit = ()=> setEdit (true)
    const disableEdit = ()=> setEdit (false)

    const {isPending, mutate} = userMutationData(['update-automation'],
         (data: {name:string}) => updateAutomationName(),
'automation-info',
disableEdit
)

}

export const updateAutomationName a
