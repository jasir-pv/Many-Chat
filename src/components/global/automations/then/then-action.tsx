import { useListener } from '@/src/hooks/use-automation'
import React from 'react'

type Props = {
    id: string
}

const ThenAction = ({id }: Props) => {

    const {
        onSetListener,
        listener: Listener,
        onFormSubmit,
        register,
        isPending,
    } = useListener(id)

  return (
   
  )
}

export default ThenAction