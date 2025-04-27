'use client'
import { AuthContext } from '@/components/userContext'
import Wrapper from '@/components/Wrapper'
import React, { useContext } from 'react'
const ContactUsPage = () => {
  // using with the help of useContext hook
  const { user } = useContext(AuthContext)
  return (
    <div className="min-h-screen flex flex-col justify-center">
      <Wrapper>
        <div className="text-center">
          <h2 className="text-2xl sm:text-4xl font-bold  ">Contact Us Page</h2>
          <h2>{user.name}</h2>
          <p className="text-2xl sm:text-4xl">Coming Soon</p>
        </div>
      </Wrapper>
    </div>
  )
}

export default ContactUsPage
