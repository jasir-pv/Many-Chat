import Trigger from '@/src/components/global/automations/trigger'
import AutomationsBreadCrumb from '@/src/components/global/bread-crumbs/automations'
import { Warning } from '@/src/components/icons'
import React from 'react'

type Props = {
    params: {id: string}
}

// wip: set some metadata

const Page = ({params}: Props) => {

    // wip : prefetch user automation data

  return (
    <div className='flex flex-col items-center gap-y-20'>
        <AutomationsBreadCrumb  id={params.id} />
        <div className="w-full lg:w-10/12 xl:w-6/12 p-5 rounded-full
        flex-col bg-[#1d1d1d] gap-y-3">
            <div className="flex gap-x-2">
                <Warning />
                When...
                <Trigger id={params.id} />
            </div>
        </div>
    </div>
  )
}

export default Page