'use client'

import { onOAuthInstagram } from '@/src/app/actions/integrations'
import { onUserInfo } from '@/src/app/actions/user'
import { Button } from '@/src/components/ui/button'
import { useQuery } from '@tanstack/react-query'
import React from 'react'

type Props = {
    title: string
    description: string
    icon: React.ReactNode
    strategy: 'INSTAGRAM' | 'CRM'
}

const IntegrationCard = ({description, icon, strategy, title}: Props) => {

  const onInstaOAuth = () => onOAuthInstagram(strategy)

  const { data } = useQuery({
    queryKey: ['user-profile'],
    queryFn: onUserInfo,
  })

  const integrated = data?.data?.integrations.find(
    (Integration) => Integration.name === strategy
  )

  return (
    <div className='border-2 border-[#3352cc] rounded-2xl gap-x-5 p-4 flex items-center' >
        {icon}
        <div className="flex flex-col flex-1"> 
            <h3 className='text-xl'>{title}</h3>
            <p className="text-[#9d9d9d] text-base w-full md:w-10/12 xl:w-8/12 2xl:w-6/12">
                {description}
            </p>
        </div>
        <Button
        onClick={onInstaOAuth}
        disabled={integrated?.name === strategy}
        className="bg-gradient-to-br text-white rounded-full text-lg from-[#3352CC] font-medium  to-[#1C2D70] hover:opacity-70 transition duration-100"
      >
        {integrated ? 'Connected' : 'Connect'}
      </Button>
    </div>
  )
}

export default IntegrationCard