import { useAutomationPosts } from '@/src/hooks/use-automation'
import { useQueryAutomation, useQueryAutomationPosts } from '@/src/hooks/use-queries'
import React from 'react'
import TriggerButton from '../trigger-button'
import { InstagramPostProps } from '@/src/types/post.type'
import { CheckCircle } from 'lucide-react'
import Image from 'next/image'
import { cn } from '@/src/lib/utils'

type Props = {
    id: string
}

const PostButton = ({ id }: Props) => {

    const { data } = useQueryAutomationPosts()
    const { posts, onSelectPost, mutate, isPending } = useAutomationPosts(id)

  return (
    <TriggerButton label='Attach a Post'>
        {data?.status===200 ? (
            <div className='flex flex-col gap-y-3 w-full'>
                <div className="flex flex-wrap w-full gap-3">
                    {data.data.data.map((post:InstagramPostProps) => (
                        <div className='relative w-4/12 aspect-square 
                        rounded-lg cursor-pointer overflow-hidden'
                        key={post.id}
                        onClick={() =>
                             onSelectPost({
                                postid: post.id,
                                media: post.media_url,
                                mediaType: post.media_type,
                                caption: post.caption
                             })
                            }
                        >
                            {posts.find((p) => p.postid === post.id) && (
                                <CheckCircle
                                    fill='white'
                                    stroke='black'
                                    className='absolute top-1/2 left-1/2 transform
                                    -translate-x-1/2 -translate-y-1/2 z-50'
                                />
                            )}
                            <Image 
                                fill
                                sizes='100vw'
                                src={post.media_url}
                                alt='post image'
                                className={cn(
                                    'hover:opacity-75 transition duration-100',
                                    posts.find((p) => p.postid === post.id) && 'opacity-75'
                                )}
                            />

                        </div>
                    ) )}
                </div>
            </div>
        ): (
            ''
        )}

    </TriggerButton>
  )
}

export default PostButton