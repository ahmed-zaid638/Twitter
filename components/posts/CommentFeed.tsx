import React from "react";
import CommentItem from "./CommenItem";

interface CommentsProps {
  comments?: Record<string, any>[];
}

function CommentFeed({ comments=[] }: CommentsProps) {
    console.log({comments : comments})
  return (
     comments.map((comment) => { 
       return <CommentItem key={comment.id} data={comment} />
     })
  )
}

export default CommentFeed;
