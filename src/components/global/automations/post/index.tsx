import { useQueryAutomation, useQueryAutomationPosts } from '@/src/hooks/use-queries'
import React from 'react'

type Props = {}

const PostButton = (props: Props) => {

    const { data } = useQueryAutomationPosts()

  return (
    <div>PostButton</div>
  )
}

export default PostButton