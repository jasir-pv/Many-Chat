
'use client'

import CreateAutomation from '@/src/components/global/create-automation';
import Navbar from '@/src/components/global/navbar';
import Sidebar from '@/src/components/global/sidebar';
import React from 'react'

type Props = {}

const Page = async (props: Props) => {

    // server action

    const user = await onBoardUser()

  return (
    <div>
   
      page

    </div>
  )
}

export default Page;