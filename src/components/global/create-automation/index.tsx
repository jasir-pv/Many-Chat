'use client'


import React, { useMemo } from 'react'
import Loader from '../loader'
import { AutomationDuoToneWhite } from '../../icons'
import { useCreateAutomation } from '@/src/hooks/use-automation'
import { Button } from '../../ui/button'
import { v4 } from 'uuid'

type Props = {}

const CreateAutomation = (props: Props) => {
  const mutationId = useMemo(() => v4(), [])

  console.log(mutationId)
  const { isPending, mutate} = useCreateAutomation()

  return (
    <Button className='lg:px-10 gap-2 flex  bg-gradient-to-br hover:opacity-80 text-white
    rounded-full py-6  from-[#3352CC] font-medium to-[#1c2d70]'
    onClick={() => mutate({ name: "Untitled", id: mutationId, createdAt: new Date()  })}>
        <Loader state={isPending}>
            <AutomationDuoToneWhite/>
            <p className="lg:inline hidden "> Create an Automation</p>
        </Loader>
    </Button>
  )
}

export default CreateAutomation