'use client'
import Image from 'next/image'
import Link from 'next/link'
import React, { useState } from 'react'
import Wrapper from './Wrapper'
import { usePathname, useRouter } from 'next/navigation'

const SiteNavigation = () => {
  const [login, setLogin] = useState(false) // true <> false
  const pathname = usePathname()
  const router = useRouter()
  // Toggler to toggle the login / logout state
  const loginToggler = () => {
    setLogin((prev) => {
      const newState = !prev
      if (newState === true) {
        router.push('/dashboard')
      } else {
        router.push('/')
      }
      return newState
    })
  }

  return (
    // site header
    <header className="bg-green-200 py-1.5">
      <Wrapper>
        <div className="flex items-center justify-between">
          {/* logo */}
          <Link href="/">
            <Image
              className="cursor-pointer"
              src="/globe.svg"
              width={50}
              height={50}
              alt="logo"
            />
          </Link>
          {/* navigation */}
          <nav className="space-x-3 text-lg font-semibold">
            <Link
              className={`hover:text-gray-600 active:text-green-500 ${
                pathname === '/' ? 'text-green-500' : ''
              }`}
              href="/"
            >
              Home
            </Link>
            <Link
              className={`hover:text-gray-600 active:text-green-500 ${
                pathname === '/about' ? 'text-green-500' : ''
              }`}
              href="/about"
            >
              About
            </Link>
            <Link
              className={`hover:text-gray-600 active:text-green-500 ${
                pathname === '/contact-us' ? 'text-green-500' : ''
              }`}
              href="/contact-us"
            >
              Contact Us
            </Link>
          </nav>
          {/* contact detail / profile detail */}
          <div>
            {/* login button */}
            {/* it makes the login state === true */}
            <button
              onClick={loginToggler}
              className={`block border rounded-md px-6 py-1.5 hover:bg-black hover:text-white transition-colors duration-300 ease-linear ${
                login ? 'hidden' : ''
              }`}
            >
              Login
            </button>
            {/* logotu button */}
            {/* it makes the login state === fals */}
            <button
              onClick={loginToggler}
              className={`block border rounded-md px-6 border-red-600 py-1.5 hover:bg-red-500 hover:text-white transition-colors duration-300 ease-linear ${
                login ? '' : 'hidden'
              }`}
            >
              Logout
            </button>
          </div>
        </div>
      </Wrapper>
    </header>
  )
}

export default SiteNavigation
