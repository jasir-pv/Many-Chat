import { SearchIcon } from 'lucide-react'
import React from 'react'
import { Input } from '../../../ui/input'

type Props = {}

const Search = (props: Props) => {
  return (
    <div className='
            hiddeng lg:flex flex overflow-hidden
            gap-x-2 border-[1px]
            border-[#3352cc] rounded-full
            px-4 py-3 items-center flex-1
    '>
        <SearchIcon color='#3352cc'/>
        <Input
        placeholder='Search by name, email or status'
        className='border-none outline-none ring-0 focus-ring-0 flex-1'
        />
    </div>
  )
}

export default Search