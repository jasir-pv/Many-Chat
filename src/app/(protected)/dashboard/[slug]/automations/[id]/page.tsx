import { getAutomationInfo } from '@/src/app/actions/automations'
import Trigger from '@/src/components/global/automations/trigger'
import AutomationsBreadCrumb from '@/src/components/global/bread-crumbs/automations'
import { Warning } from '@/src/components/icons'
import { PrefetchUserAutomation } from '@/src/react-query/prefetch'
import { dehydrate, HydrationBoundary, QueryClient } from '@tanstack/react-query'
import { title } from 'process'
import React from 'react'

type Props = {
    params: {id: string}
}


export async function generateMetadata({params}: {params:{id:string}}) {
    const info = await getAutomationInfo(params.id)

    return {
        title: info.data?.name,
    }
}

const Page = async ({params}: Props) => {

    const query = new QueryClient()
    await PrefetchUserAutomation(query, params.id)

  return (
    <HydrationBoundary state={dehydrate(query)}>
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
    </HydrationBoundary>
  )
}

export default Page