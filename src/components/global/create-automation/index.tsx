'use client'


import React, { useMemo } from 'react'
import Loader from '../loader'
import { AutomationDuoToneWhite } from '../../icons'
import { useCreateAutomation } from '@/src/hooks/use-automation'
import { Button } from '../../ui/button'
import { v4 } from 'uuid'
import Link from 'next/link'

type Props = {
  page: string
  slug: string
}

const CreateAutomation = ({slug}: Props) => {
  const mutationId = useMemo(() => v4(), [])

  console.log(mutationId)
  const { isPending, mutate} = useCreateAutomation(mutationId)

  return (
    <Button className='lg:px-10 gap-2 flex  bg-gradient-to-br hover:opacity-80 text-white
    rounded-full py-6  from-[#3352CC] font-medium to-[#1c2d70]'
    onClick={() => 
    mutate({ 
      name: "Untitled", 
      id: mutationId, 
      createdAt: new Date(),
      keywords: [],
      })}>
        <Loader state={isPending}>
        <Link  href={`/dashboard/${slug}/integrations`}>  
            <AutomationDuoToneWhite/>
            <p className="lg:inline hidden ">
               Create an Automation
            
               </p>
               </Link>
        </Loader>
    </Button>
  )
}

export default CreateAutomation