import React from 'react'
import Loader from '../loader'
import { AutomationDuoToneWhite } from '../../icons'

type Props = {}

const CreateAutomation = (props: Props) => {
  return (
    <button className='lg:px-10 gap-2 flex  bg-gradient-to-br hover:opacity-80 text-white
    rounded-full p-5  from-[#3352CC] font-medium to-[#1c2d70]'>
        <Loader state={false}>
            <AutomationDuoToneWhite/>
            <p className="lg:inline hidden"> Create an Automation</p>
        </Loader>
    </button>
  )
}

export default CreateAutomation