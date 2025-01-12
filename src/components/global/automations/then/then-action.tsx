import { useListener } from '@/src/hooks/use-automation'
import React from 'react'
import TriggerButton from '../trigger/trigger-button'
import { AUTOMATION_LISTENERS } from '@/src/constants/automation'
import { SubscriptionPlan } from '../../subscription-plan'

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
   <TriggerButton label="Then"> 
        <div className='flex flex-col gap-y-2'>
            {AUTOMATION_LISTENERS.map((listener) =>
            listener.type === 'MESSAGE'  ? (
                <SubscriptionPlan
                 key={listener.type} 
                 type= "PRO"
                 > </SubscriptionPlan>
            )  : (
                ''
            )
            )}
        </div>
    </TriggerButton>
  )
}

export default ThenAction