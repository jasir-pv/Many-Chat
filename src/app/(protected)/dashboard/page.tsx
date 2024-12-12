import Navbar from '@/src/components/global/navbar';
import Sidebar from '@/src/components/global/sidebar';
import React from 'react'

type Props = {}

const Page = async (props: Props) => {

    // server action

  return (
    <div>
  <Sidebar/>
      <Navbar/>
    </div>
  )
}

export default Page;