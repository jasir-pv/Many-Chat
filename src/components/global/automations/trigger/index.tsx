import { useQueryAutomation } from '@/src/hooks/use-queries'
import React from 'react'

type Props = {
    id : string
}

const Trigger = ({ id }: Props) => {
  const {data} = useQueryAutomation(id)



  if (data?.data && data?.data?.trigger.length>0){
    return <div className='flex flex-col gap-y-6 items-center'></div>
  }
}

export default Trigger