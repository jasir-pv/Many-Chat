import React from 'react'
import { Popover, PopoverTrigger } from '../../ui/popover'

type Props = {
    trigger: JSX.Element
    children: React.ReactNode
    className?: string
}

const PopOver = ({trigger, children, className}: Props) => {
  return (
   <Popover>
        <PopoverTrigger asChild> {trigger} </PopoverTrigger>
   </Popover>
  )
}

export default PopOver