import { useKeywords } from '@/src/hooks/use-automation'
import React from 'react'

type Props = {id: string}

const Keywords = ({ id }: Props) => {

    const {} = useKeywords()

  return (
    <div>Keywords</div>
  )
}

export default Keywords