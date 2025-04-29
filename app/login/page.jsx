'use client'
import Wrapper from '@/components/Wrapper'
import React from 'react'
/**
 * no hook
 * no animation
 * no event handler
 *
 */
const LoginPage = () => {
  const onSubmit = () => {
    console.log('form submitted successfully.')
  }
  return (
    <div className="min-h-screen flex flex-col justify-center">
      <Wrapper>
        <div className="text-center">
          <h2 className="text-2xl sm:text-4xl font-bold  ">Login Page</h2>
          <p className="text-2xl sm:text-4xl">Coming Soon</p>
          <button onClick={onSubmit}>submit</button>
        </div>
      </Wrapper>
    </div>
  )
}

export default LoginPage
