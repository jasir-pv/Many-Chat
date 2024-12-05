import Loader from '@/src/components/global/loader'
import React from 'react'

type Props = {}

function Loading({}: Props) {
  return (
    <div className='h-screen flex justify-center items-center'>
        <Loader state> ...Loading</Loader>
    </div>
  )
}

export default Loading