import { useQuery } from "@tanstack/react-query"
import { getAllAutomaitons } from "../app/actions/automations"


export const useQueryAutomations = () =>{
    return useQuery({
        queryKey: ['user-automations'],
        queryFn: getAllAutomaitons,
    })
}