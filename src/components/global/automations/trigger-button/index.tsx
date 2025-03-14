import React from 'react'
import PopOver from '../../popover'
import { Divide } from 'lucide-react'
import { BlueAddIcon } from '@/src/components/icons'

type Props = {
  children: React.ReactNode
  label: string
}

const TriggerButton = ({ children, label }: Props) => {
  return (
    // <PopOver
    //   className="w-[400px]"
    //   trigger={
    //     <div className="border-2 border-dashed w-full border-[#3352cc] hover:opacity-80 cursor-pointer transition duration-100 rounded-xl flex gap-x-2 justify-center items-center p-5 mt-4">
    //       <BlueAddIcon />
    //       <p className="text-[#768BDD] font-bold">{label}</p>
    //     </div>
    //   }
    // >
    //   {children}
    // </PopOver>


    <PopOver
  className="w-[400px]"
  trigger={
    <div className="border-2 border-dashed w-3/4 ml-20 border-[#3352cc] hover:opacity-80 cursor-pointer transition duration-100 rounded-xl flex gap-x-2 justify-center items-center p-5 mt-4">
      <BlueAddIcon />
      <p className="text-[#768BDD] font-bold">{label}</p>
    </div>
  }
>
  {children}  {/* Ensure this is wrapped correctly */}
</PopOver>

  )
}

export default TriggerButton