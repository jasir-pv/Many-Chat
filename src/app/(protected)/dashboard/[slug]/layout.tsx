
import {
  dehydrate,
  HydrationBoundary,
  QueryClient,
} from '@tanstack/react-query'
import Navbar from '@/src/components/global/navbar'
import Sidebar from '@/src/components/global/sidebar'
import React from 'react'
import {  PrefetchUserAutomations, PrefetchUserProfile } from '@/src/react-query/prefetch'

type Props = {
  children:React.ReactNode
  params: {slug: string}
}

const layout = async ({children, params}: Props) => {

  const query = new QueryClient()

  await PrefetchUserProfile(query)

  await PrefetchUserAutomations(query)

  return (

    <HydrationBoundary state={dehydrate(query)}>

    <div className='p-3'>
        <Sidebar slug={params.slug}/>
        {/* Navbar */}

        <div className='
            lg:ml-[250px]
            lg:pl-10
            lg:py-5
            flex flex-col
            overflow-auto
        '>
              <Navbar slug={params.slug}/>
              {children}
        </div>
    </div>

    </HydrationBoundary>
  )
}

export default layout