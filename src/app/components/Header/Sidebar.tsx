'use client'
import React from 'react'
import Link from 'next/link'
import { Header } from '@/payload-types'
import { IoMdClose } from 'react-icons/io'
import { usePathname } from 'next/navigation'

interface SidebarProps {
  navLinks: Header['navigation']
  onClose: () => void
  visible: boolean
}

const Sidebar = ({ navLinks, onClose, visible }: SidebarProps) => {
  const pathname = usePathname()

  return (
    <aside
      className={`w-64 min-h-screen bg-black flex flex-col py-8 px-0 fixed top-0 left-0 z-50 transform transition-all duration-500 ease-in-out 
    ${visible ? 'translate-x-0 opacity-100' : '-translate-x-full opacity-0'}`}
      style={{ willChange: 'transform, opacity' }}
    >
      <button
        className="absolute top-4 right-4 p-2 rounded-full hover:bg-white/10 transition-colors duration-200 text-white cursor-pointer"
        onClick={onClose}
        aria-label="Close sidebar"
      >
        <IoMdClose className="w-6 h-6" />
      </button>
      <nav className="flex flex-col gap-2 mt-12">
        {navLinks?.map((link: any) => {
          const isActive = pathname === link.url
          return (
            <Link
              key={link.url}
              href={link.url}
              className={`block px-8 py-3 text-md font-light transition-colors duration-200 hover:bg-[#222] ${isActive ? 'bg-gold text-white' : 'text-white'}`}
            >
              {link.label}
            </Link>
          )
        })}
      </nav>
    </aside>
  )
}

export default Sidebar
