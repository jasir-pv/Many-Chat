import { useEffect, useRef, useState } from "react"
import { createAutomaitons, saveListener, updateAutomationName } from "../app/actions/automations"
import { userMutationData } from "./use-mutation-data"
import {z} from 'zod'
import useZodForm from "./use-zod-form"


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
         (data: {name:string}) => updateAutomationName(automaiotnId,{name: data.name}),
'automation-info',
disableEdit
)


useEffect (() => {
    
function handleClickOutside(this: Document, event: MouseEvent){
    if(inputRef.current && !inputRef.current.contains( event.target as Node | null)
     ) {
        if (inputRef.current.value !== '') {
            mutate ({ name: inputRef.current.value})
        } else {
            disableEdit()
        }
    }
}
    document.addEventListener('mousedown', handleClickOutside)
    return () => {
        document.removeEventListener ('mousedown', handleClickOutside)
    }
}, [])

    return {
        edit,
        enableEdit,
        disableEdit,
        inputRef,
        isPending,
    }

}



export const useListener = (id: string) =>{
    const  [listener, setListener] = useState<'MESSAGE' | 'SMARTAI' | null> ( null)

    const promptSchema = z.object({
        prompt: z.string().min(1),
        reply: z.string(),
    })

    const {isPending, mutate} = userMutationData (
        ['create-lister'],
        (data: {prompt: string; replay: string}) => 
            saveListener(id, listener || 'MESSAGE', data.prompt, data.replay),
        'automation-info'     
        
    )

    const {errors, onFormSubmit, register, reset, watch } = useZodForm(
        promptSchema, 
        mutate,
    )

    const onSetListener = (type: 'SMARTAI' | 'MESSAGE') => setListener(type )

    return { onSetListener, register, onFormSubmit, listener, isPending}
}

 
