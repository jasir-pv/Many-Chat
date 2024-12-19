'use client'

import { usePaths } from '@/src/hooks/use-nav'
import { cn } from '@/src/lib/utils'
import Link from 'next/link'
import React from 'react'
import GradientButton from '../gradient-button'
import { Button } from '../../ui/button'
import { useQueryAutomations } from '@/src/hooks/use-queries'
import CreateAutomation from '../create-automation'

type Props = {}

const AutomationList = (props: Props) => {

    // wip : get the automation list data
    const { data } = useQueryAutomations()

    const{pathname} = usePaths()

    if(data?.status !== 200){
      return <div className='h-[70vh] flex justify-center items-center flex-col gap-y-3'>
       hgkjg
      </div>
    } 

  return (
    <div className='flex flex-col gap-y-3'>
        <Link href={`${pathname}/123124123123`}
        className='bg-[#1d1d1d] hover:opacity-80 transition duration-100
        rounded-xl p-5 border-[1px] radial--gradient--automations flex
        border-[#545454]'
        >
            <div className="flex flex-col flex-1 items-start">
                <h2 className="text-xl font-semibold">
                    Automation Name
                </h2>
                <p className='text-[#9b9ca0] text-sm font-light mb-2'>
                    This is from the comment
                </p>
                {/* wip: automation keywords */}
                <div className="flex gap-x-2 flex-wrap mt-3">
                    <div className={cn('rounded-full px-4 py-1 capitalize',
                        (0+1)%1 == 0 &&
                        'bg-keyword-green/15 border-2 border-keyword-green',
                          (1+1)%1 == 0 &&
                        'bg-keyword-purple/15 border-2 border-keyword-purple',
                          (2+1)%1 == 0 &&
                        'bg-keyword-yellow/15 border-2 border-keyword-yellow',
                          (0+1)%1 == 0 &&
                        'bg-keyword-red/15 border-2 border-keyword-red'
                    )}> 
                    getStarted

                    </div>
                </div>
                <div className='rounded-full border-2 mt-3 border-dashed
                border-white/60 px-3 py-1'>
                    <p className="text-sm text-[#bfc03c]">
                        No keywords
                    </p>
                </div>
            </div>
            <div className="flex flex-col justify-between">
                <p className="capitalize text-sm font-light text-[#9b9ca0]">
                   {/* wip : attack data and time */}
                    October 5th 2024
                </p>

                {/* wip : render the button base on the listener */}
                <GradientButton type='BUTTON'
                className='w-full bg-background-80 text-white
                hover:bg-background-80'>
                    Smart Ai
                </GradientButton>
                <Button className="bg-background-80 hover:bg-background-80 text-white">
                Standard
              </Button>
            </div>
        </Link>
    </div>
  )
}

export default AutomationList