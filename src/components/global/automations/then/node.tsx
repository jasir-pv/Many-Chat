'use client'

import { useQueryAutomation } from '@/src/hooks/use-queries'
import React from 'react'

type Props = {
    id: string 
}

const ThenNode = ({ id }: Props) => {

    const {data} = useQueryAutomation(id)
    const commentTrigger = data?.data?.trigger.find((t) => t.
    type === 'COMMENT')

  return !data?.data?.listener ? <> </> : <div></div>
}

export default ThenNode