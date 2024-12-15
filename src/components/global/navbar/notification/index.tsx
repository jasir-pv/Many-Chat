import { Bell } from "@/src/components/icons"
import { Button } from "@/src/components/ui/button"



export const Notification = () =>{
    return (
        <Button className="bg-white rounded-full py-6">
            <Bell
                color="#3352CC"
                fill= "#3352cc"
            />
        </Button>
    )
}