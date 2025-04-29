import React from 'react'

const PostCard = ({ post, index }) => {
  return (
    <div className="border-2 border-zinc-500 p-3.5" key={index}>
      <h2>{post.title}</h2>
      <p>{post.body}</p>
    </div>
  )
}

export default PostCard
