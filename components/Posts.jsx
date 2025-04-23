'use client'
import Image from 'next/image'
import React, { useEffect, useState } from 'react'

// function component
const Posts = () => {
  // hook that manage local states inside single component or single page
  // it only have one type of value
  const [value, setValue] = useState(0)
  const [posts, setPosts] = useState([])
  const [error, setError] = useState(false)
  const [errorMessage, setErrorMessage] = useState('')
  const url = 'https://jsonplaceholder.typicode.com/users/1/posts'
  // function expression
  const stateHandler = () => {
    setValue((prev) => prev + 1)
  }
  // function to fetch data from remote url
  const fetchposts = async () => {
    const response = await fetch(url)
    // if fetch failed
    if (!response.ok) {
      setError(true)
      setErrorMessage('Failed to fetch data')
    }

    // if fetch successful
    const posts = await response.json()
    console.log(posts)
    setPosts(posts)
  }
  // use here
  /**
   * useEffect is hook that we use in client side pages or components
   * useEffect always run when page loads successfully. this hook
   * must run one time when page load if dependency array [] is empty.
   * if dependcy array [] has a state, then useEffect will run when the
   * state will change
   * it use to manipulate data
   */

  useEffect(
    // setup => it will be a function with logic
    () => {
      console.log(`value of state changes: ${value}`)
      // invoke the function to fetch data when page loads.
      fetchposts()
    },
    // dependency => it contains the state, on which our useEffect depend
    [value],
  )

  return (
    <div>
      <button onClick={stateHandler}>Change State Value</button>
      <p>{value}</p>
      <p className="text-green-500 font-bold text-2xl mb-10">
        Total Number of Posts: {posts.length}
      </p>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-5">
        {posts.map((post, index) => {
          return (
            <div
              className={`border-2 text-start p-5 space-y-2 mb-5 border-gray-600 rounded-md`}
            >
              <h1 className="text-lg font-bold text-orange-600">
                {post.title}
              </h1>
              <p>{post.body}</p>
            </div>
          )
        })}
      </div>
    </div>
  )
}

export default Posts
