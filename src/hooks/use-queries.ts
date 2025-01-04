import { useQuery } from "@tanstack/react-query"
import { getAllAutomaitons, getAutomationInfo } from "../app/actions/automations"


export const useQueryAutomations = () =>{
    return useQuery({
        queryKey: ['user-automations'],
        queryFn: getAllAutomaitons,
    })
}


export const useQueryAutomation = (id:string) =>{
    return useQuery ({
         queryKey: [ 'automaiotn-info'],
         queryFn: ()=> getAutomationInfo(id),
    })
}