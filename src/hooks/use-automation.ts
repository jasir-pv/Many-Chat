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


