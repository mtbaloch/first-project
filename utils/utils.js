/**
 * Data fetching on server side page / component
 * if you are using server side component or page
 * then, your functional component must be async
 * we need two steps to fetch data in server component or page
 * 1- create fucntion to fetch data
 * 2- call the function inside the functional component to perform
 *    the fetch operation
 */

// this function will be always async function
// in both server components and client components
export async function fetchBlog(url) {
  console.log('process to fetch data')
  try {
    // keep code that can generate error in try block
    const response = await fetch(url)

    if (!response.ok) {
      throw new Error('Failed to fetch blog posts')
    }
    // every request has body containing data that we want to get from server
    // .json() is a method that give us our requested data
    const data = await response.json()
    console.log(data)
    return data
  } catch (error) {
    console.log(error)
  }
}
