import { useKeywords } from '@/src/hooks/use-automation'
import { useMutationDataState } from '@/src/hooks/use-mutation-data'
import { useQueryAutomation } from '@/src/hooks/use-queries'
import React from 'react'

type Props = {id: string}

const Keywords = ({ id }: Props) => {

    const { onValueChange, keyword, onKeyPress, deleteMutation} = useKeywords(id)

    const { latestVariable} = useMutationDataState(['add-keyword'])
    const { data } = useQueryAutomation(id)

  return (
    <div className='bg-background-80 flex flex-col gap-y-3 p-3 rounded-xl'>
        <p className='text-sm text-text-secondary'>
            add words that trigger automation
        </p>
        <div className='flex flex-wrap justify-start gap-2 items-center'>
        {data?.data?.keywords &&
         data?.data?.keywords.length > 0 && 
         data?.data?.keywords.map(
            (word) =>  word.id!== latestVariable.variables.id && <div>
                
            </div> )}
        </div>
    </div>
  )
}

export default Keywords