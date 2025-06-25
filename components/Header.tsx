'use client'
import Link from 'next/link'
import React from 'react'

const Header = () => {
  return (
    <div>
         <Link href="/Home">
        <li>Home</li>
        </Link>
         <Link href="/Dashboard">
        <li>Dashboard</li>
        </Link>
        <Link href="/About">
        <li>About</li>
        </Link>
    </div>
  )
}

export default Header