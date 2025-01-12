'use client'


import { useQueryAutomation } from '@/src/hooks/use-queries'
import React from 'react'
import ActiveTrigger from './active'
import { Separator } from '@/src/components/ui/separator'
import ThenAction from '../then/then-action'


type Props = {
    id : string
}

const Trigger = ({ id }: Props) => {
  const {data} = useQueryAutomation(id)



  if (data?.data && data?.data?.trigger.length>0){
    return <div className='flex flex-col gap-y-6 items-center'>
      {/* WORK IN PROGRESS : DATA.DATA.TRIGGER[0] */}
      <ActiveTrigger 
      type={"COMMENT"}
      keywords={[{
        id: "alkdjdf",
        word: "Get started",
        automationId: id,
      }]}
      />
      {/* work in progress */}
      {/* {data?.data?.trigger.length>1 && <></>} */}

      <> 
      <div className="relative w-6/12 my-4">
              <p className="absolute transform  px-2 -translate-y-1/2 top-1/2 -translate-x-1/2 left-1/2">
                or
              </p>
              <Separator
                orientation="horizontal"
                className="border-muted border-[1px]"
              />
            </div>
            <ActiveTrigger
              type={'MESSAGE'}
              keywords={[
                {
                  id: 'adssadfasd',
                  word: 'MePlease',
                  automationId: id, 
                }
              ]}
            />
      </>

      <ThenAction />
    </div>
  }
}

export default Trigger