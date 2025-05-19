'use client'
import React, { useState } from 'react'
import { Logo } from '@/app/components/Logo'
import Link from 'next/link'
import { MdEmail } from 'react-icons/md'
import { GiHamburgerMenu } from 'react-icons/gi'
import { Header as HeaderType } from '@/payload-types'
import Sidebar from './Sidebar'

interface HeaderProps {
  header: HeaderType
}

const Header = ({ header }: HeaderProps) => {
  const [sidebarOpen, setSidebarOpen] = useState(false)

  return (
    <>
      <header className="fixed top-0 left-0 w-full z-50 bg-black/60 text-white h-20 flex items-center justify-center px-4">
        <button
          className="absolute left-4 top-1/2 -translate-y-1/2 cursor-pointer p-2 rounded-full hover:bg-white/10 transition-colors duration-200"
          onClick={() => setSidebarOpen((open) => !open)}
        >
          <GiHamburgerMenu className="w-5 h-5 text-yellow-200" />
        </button>
        {/* Logo centered */}
        <div className="flex-1 flex justify-center">
          <Logo logoUrl={header.logo} />
        </div>
        {/* Contact email top right */}
        {header.contactEmail && (
          <Link
            href={`mailto:${header.contactEmail}`}
            className="absolute right-6 top-1/2 -translate-y-1/2 text-sm flex items-center gap-2 hover:underline"
          >
            <MdEmail className="w-5 h-5 text-yellow-200" />
            {header.contactEmail}
          </Link>
        )}
      </header>
      <div className="fixed inset-0 z-50 pointer-events-none">
        <div
          className={`bg-black/70 w-full h-full absolute inset-0 transition-opacity duration-500 ease-in-out ${sidebarOpen ? 'opacity-100' : 'opacity-0'} pointer-events-${sidebarOpen ? 'auto' : 'none'}`}
          onClick={() => setSidebarOpen(false)}
        />
        <div className="relative z-10 pointer-events-auto">
          <Sidebar
            navLinks={header.navigation}
            onClose={() => setSidebarOpen(false)}
            visible={sidebarOpen}
          />
        </div>
      </div>
    </>
  )
}

export default Header
