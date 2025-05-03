import React from 'react'

/**
 * SECOND STEP
 * You need to create a async function, that will call the above endpoint.
 * Either I should call above endpoint in server component/page or client component/page
 * Decide = i will create server page
 *
 */
// Syntax of a fuction
async function getQuotes(endpoint) {
  // variable name must descriptive so that any other developer know the type of output of right side code
  // we need web api (fetch) to call the api endpoint
  // await tells us that this is a promise based call
  /**
   * every promise in js has three states
   * pending
   * resolved
   * rejected
   */
  /**
   * get, delete = no need any body data
   * post, put, patch = must have body data
   */
  const response = await fetch(endpoint, {
    // if we don't add any method, the default method will be GET
    method: 'GET',
    // custom headers
    headers: { 'content-type': 'application/json' },
  })
  // console.log(response)
  /**
   * after calling endpoint, it's initial state will be
   * response = pending state
   * if our api call will be successfully resolved
   * response = result of our api call
   */

  // check whether the response is ok or not ok
  // we can check with two methods
  // first method is with the help of status codes
  // 200 status code is for successfull response
  // in this case, we check successfull response and perform some
  // logic / process on data when api call is resolved
  //  we perform this most of the time when we store response data into any state
  // if(response.status !== 200){

  // }

  // we can also check it with the help ok boolean property
  // response.ok === true
  // !response.ok === false
  // it's purpose is to throw an error if api call rejected / failed
  if (!response.ok) {
    throw new Error('Failed to fetch data from server.')
  }

  const data = await response.json()
  // simple way is to console the quotes and check the type and format
  // console.log('format and type of data\n', data) // object {quotes:[{},{},{}]}
  return data.quotes
}

// functioncal component starts here
const QuotesPage = async () => {
  /**
   * FIRST STEP
   * store api endpoint in a constant
   * for example
   * const endpoint = 'https://dummyjson.com/quotes'
   * i don't know anything about this endpoint.
   *
   */
  const endpoint = 'https://dummyjson.com/quotes'

  const getAllQuotes = await getQuotes(endpoint)
  console.log(getAllQuotes)
  return (
    <div className="max-w-3xl mx-auto m-5">
      <ul className="space-y-3">
        {getAllQuotes.map((quote, index) => {
          return (
            <li key={index} className="flex items-center gap-2">
              <span className="w-6 shrink-0 p-3 border-2 text-sm border-zinc-400 h-6 flex items-center justify-center rounded-full bg-orange-500 aspect-auto">
                {quote.id}
              </span>
              <blockquote cite="">{quote.quote}</blockquote>
            </li>
          )
        })}
      </ul>
    </div>
  )
}

export default QuotesPage
