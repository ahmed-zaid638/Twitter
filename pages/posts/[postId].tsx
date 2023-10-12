import Form from '@/components/Form'
import Header from '@/components/Header'
import CommentFeed from '@/components/posts/CommentFeed'
import PostFeed from '@/components/posts/PostFeed'
import PostItem from '@/components/posts/PostItem'
import usePost from '@/hooks/usePost'
import { useRouter } from 'next/router'
import React from 'react'
import { ClipLoader, PulseLoader } from 'react-spinners'

function Post() {
  const router = useRouter()
  const {postId} = router.query
  const {data : fetechedPost , isLoading } = usePost(postId as string)
  // console.log({From_PostId: fetechedPost})

  if (isLoading || !fetechedPost) {
    return (
      <div className="flex justify-center items-center h-[50vh]">
        <PulseLoader color="white" size={15} />
      </div>
    )
  }
  return (
    <div className='text-white'>
        <Header label={'post'} showBackArrow={true} />
        <PostItem data={fetechedPost} />
        <Form  postId={postId as string}  isComment placeholder="Tweet your reply" />
        <CommentFeed comments={fetechedPost?.comments} />
    </div>
  )
}

export default Post