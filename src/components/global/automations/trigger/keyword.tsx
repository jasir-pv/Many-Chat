import { useKeywords } from '@/src/hooks/use-automation'
import React from 'react'

type Props = {id: string}

const Keywords = ({ id }: Props) => {

    const { onValueChange, keyword, onKeyPress, deleteMutation} = useKeywords(id)

    const 

  return (
    <div>Keywords</div>
  )
}

export default Keywords