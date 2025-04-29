import PostCard from '@/components/blog/PostCard'
import React from 'react'
import { fetchBlog } from '@/utils/utils'

// blog functional component
const BlogPage = async () => {
  // must store the return value of fetchBlog function into a variable
  const posts = await fetchBlog()

  /**
   * first console the result of data fetching
   * then we check it's type
   * then we check the format of data
   */
  console.log(posts)
  // is our posts are object
  console.log('is it an object :', typeof posts)
  // is our posts are array
  console.log('is it an array :', Array.isArray(posts.posts))
  return (
    <div className="m-5 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-5">
      {posts.posts.map((post, index) => {

        return <PostCard post={post} index={index} />
        
      })}
    </div>
  )
}

export default BlogPage
