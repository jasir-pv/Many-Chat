
'use client'

import { usePaths } from '@/src/hooks/use-nav'
import { LogoSmall } from '@/src/svgs/logo-small'
import React from 'react'

type Props = {
    slug: string
}

const Sidebar = (props: Props) => {
    const {page} = usePaths()
  return (
    <div
      className='w-[250]
      radial
      fixed
      left-0
      lg:inline-block
      border-[#545454]
      bg-gradient-to-b from-[#768bdd]
      via-[#768bdd]
      hiddenasd
      bottom-0
      top-0
      m-3
      rounded-3xl
      overflow-hidden      
      '
    >
      <div className="flex
          flex-col
          gap-y-5
          w-full
          h-full
          p-3
          bg-[#0e0e0e]
          bg-opacity-90
          bg-clip-padding
          backdrop-filter
          backdrop--blur__safari
          backdrop-blur-3xl 
      ">

        <div className="flex gap-x-2 items-center p-5 justify-center">
              <LogoSmall/>
        </div>
        <div className="flex flex-clo py-3">
            <Items/>
        </div>
      </div>
    </div>
  )
}

export default Sidebar