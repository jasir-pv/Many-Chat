import React from 'react'

type Props = {
    id: string
}

const ThenAction = ({id }: Props) => {

    const {} = useListener(id)

  return (
    <div>ThenAction</div>
  )
}

export default ThenAction