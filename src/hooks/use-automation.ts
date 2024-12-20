import { createAutomaitons } from "../app/actions/automations"
import { userMutationData } from "./use-mutation-data"


export const useCreateAutomation = () =>{
    const {isPending, mutate} = userMutationData(
        ['create-automation'], 
        () => createAutomaitons(),

        'user-automations'
    )

    return {isPending, mutate}
}


