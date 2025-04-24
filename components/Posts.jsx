'use client'
import Image from 'next/image'
import React, { useEffect, useMemo, useState } from 'react'

// function component
const Posts = () => {
  // hook that manage local states inside single component or single page
  // it only have one type of value
  const [value, setValue] = useState(0)
  const [posts, setPosts] = useState([])
  const [error, setError] = useState(false)
  const [filteredPosts, setFilteredPosts] = useState([])
  const [errorMessage, setErrorMessage] = useState('')

  const numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]
  const sortedNumbers = numbers.sort((a, b) => b - a)

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
  // it runs on each re-render of page
  useEffect(() => {
    fetchposts()
    return console.log('use effect completed')
  }, [value])

  // it mostly uses for data filtering
  useMemo(() => {
    const filteredPosts = posts
      .filter((_, index) => index % 2 === 0)
      .sort((a, b) => b.id - a.id)
    setFilteredPosts(filteredPosts)
  }, [posts])

  return (
    <div>
      <button onClick={stateHandler}>Change State Value</button>
      <p>{value}</p>

      <p className="text-orange-500 text-2xl">
        {' '}
        Total Number of Posts: {posts.length}
      </p>
      <p className="text-green-500 font-bold text-2xl mb-10">
        Number of Filtered Posts: {filteredPosts.length}
      </p>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-5">
        {filteredPosts.map((post, index) => {
          return (
            <div
              key={index}
              className={`border-2 text-start p-5 space-y-2 mb-5 border-gray-600 rounded-md`}
            >
              <span className="flex justify-center items-center bg-black text-white rounded-full w-6 h-6 ">
                {post.id}
              </span>
              <h1 className="text-lg font-bold text-orange-600">
                {post.title}
              </h1>
              <p>{post.body}</p>
            </div>
          )
        })}
      </div>
      <p className="my-10 text-3xl text-purple-700">
        {JSON.stringify(sortedNumbers)}
      </p>
    </div>
  )
}

export default Posts
