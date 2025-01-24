import React from 'react'
import { Button } from '../../ui/button'
import Loader from '../loader'
import { useQueryAutomation } from '@/src/hooks/use-queries'
import { useMutationData } from '@/src/hooks/use-mutation-data'
import { activateAutomation } from '@/src/app/actions/automations'
import { ActiveAutomation } from '../../icons/active-automation'
import { Loader2 } from 'lucide-react'

type Props = {
  id: string
}

const ActivateAutomationButton = ({ id }: Props) => {
  const { data } = useQueryAutomation(id)
  const { mutate, isPending } = useMutationData(
    ['activate'],
    (data: { state: boolean }) => activateAutomation(id, data.state),
    'automation-info'
  )

  return (
    <Button
      disabled={isPending}
      onClick={() => mutate({ state: !data?.data?.active })}
      className="lg:px-10 bg-gradient-to-br hover:opacity-80 text-white rounded-full from-[#3352CC] font-medium to-[#1C2D70] ml-4"
    >
      {isPending ? <Loader2 className="animate-spin" /> : <ActiveAutomation />}

      <p className="lg:inline hidden">
        {data?.data?.active ? 'Disable' : 'Activate'}
      </p>
    </Button>
  )
}

export default ActivateAutomationButton