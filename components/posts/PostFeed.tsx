import usePosts from "@/hooks/usePosts";
import React from "react";
import PostItem from "./PostItem";
import Form from "../Form";

interface PostFeedProps {
  userId?: string;
}

function PostFeed({ userId }: PostFeedProps) {
  const { data: posts = [], isLoading } = usePosts(userId);
  // console.log({ From_PostFeed: posts });
  if (isLoading) {
    return <div className="text-white p-4">Loading posts...</div>;
  }

  return (
    <>
      {posts.map((post: any) => {
        return <PostItem userId={userId} key={post.id} data={post} />;
      })}
    </>
  );
}

export default PostFeed;
