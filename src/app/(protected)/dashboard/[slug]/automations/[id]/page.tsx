import { getAutomationInfo } from '@/src/app/actions/automations'
import ThenNode from '@/src/components/global/automations/then/node'
import Trigger from '@/src/components/global/automations/trigger'
import AutomationsBreadCrumb from '@/src/components/global/bread-crumbs/automations'
import { Warning } from '@/src/components/icons'
import { PrefetchUserAutomation } from '@/src/react-query/prefetch'
import { dehydrate, HydrationBoundary, QueryClient } from '@tanstack/react-query'
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
            <div className="w-full lg:w-10/12 xl:w-6/12 p-5 rounded-xl
            flex flex-col bg-[#1d1d1d] gap-y-3">
                <div className="flex  gap-x-2 ml-4">
                    <Warning />
                    When...
                </div>
                    <Trigger id={params.id} />            
                </div>
                     <ThenNode id={params.id}/>
                     
        </div>
    </HydrationBoundary>
  )
}

export default Page