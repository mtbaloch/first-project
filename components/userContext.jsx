'use client'
import React, { createContext, useContext, useState } from 'react'

// first we create authConext with the help of createContext()
export const AuthContext = createContext()

// auth provider help us to check, whehther the use is loggedin or not
export const AuthProvider = ({ children }) => {
  // local state
  const [user, setUser] = useState({ name: 'tahir' })
  return (
    <AuthContext.Provider value={{ user, setUser }}>
      {children}
    </AuthContext.Provider>
  )
}

// custom hook
export const useAuth = () => {
  return useContext(AuthContext)
}
