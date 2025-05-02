'use client'
import { fetchBlog } from '@/utils/utils'
import { useState, useEffect } from 'react'

const TodosPage = () => {
  // first we create a state in which we store our todos data
  const [todos, setTodos] = useState([])
  const [error, setError] = useState('')
  // create a useEffect hook to fetch data

  useEffect(() => {
    const todos = async () => {
      // it is used to run the asynchronous code
      /**
       * pagination => pagination is fetching data in chunks (small amount of data) for better performance
       * we are using offset pagination
       * total todos = 254
       * skip = ignore todos before it
       * limit = it limits the todos length
       * for example
       * skip=30
       * limit = 50
       * result = 1 to 30 ignore karo
       * aur 31 sy agy 80 tuk products ly ao
       */

      /**
       * still we need to learn data fetching in depth
       * fetch data with third party libraries like axios, useSWR hook, redux tool kit, react query
       * fetch data alongwith credentials -> like use api-key, authenticatio, etc
       */

      try {
        // fetch is native web api (fetch is not related to javascript)
        const response = await fetch(
          'https://dummyjson.com/todos?skip=30&limit=50',
          {
            /** HEADER
             * method
             * credentials
             * content type
             * api keys
             * authorization bearer token
             */
          },
        )

        if (!response.ok) {
          throw new Error('Failed to fetch todos data.')
        }
        // .json() method convert the body (contains our data that we want to fetch from server) of response from the server into javascript object
        const todosData = await response.json() // { todos: []}
        console.log(todosData.todos)
        setTodos(todosData.todos)
      } catch (error) {
        console.log(error)
        setError(error)
      }
    }
    todos()
  }, [])
  return (
    <div className="max-w-2xl mx-auto w-full m-5">
      <ul className="space-y-2">
        {todos.map((todo, index) => {
          return (
            <li key={index} className="flex items-center border p-2">
              <span className="rounded-full mr-3 w-6 h-6 flex items-center justify-center bg-zinc-700 text-white">
                {todo.id}
              </span>
              <span>{todo.todo}</span>
              <span
                className={`inline-block px-1 py-0.5 rounded-md ml-2 text-sm ${
                  todo.completed ? 'bg-green-600' : 'bg-yellow-600'
                }`}
              >{`${todo.completed ? 'completed' : 'pending'}`}</span>
              {/* true or false and these values cannot be printed on screen because
              they are logical */}
            </li>
          )
        })}
      </ul>
    </div>
  )
}

export default TodosPage
