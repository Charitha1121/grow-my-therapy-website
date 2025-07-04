'use client'

import { useState } from 'react'
import Image from 'next/image'

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false)

  // Smooth scroll handler for links
  const handleScroll = (e: React.MouseEvent<HTMLAnchorElement>, id: string) => {
    e.preventDefault()
    const el = document.getElementById(id)
    if (el) {
      el.scrollIntoView({ behavior: 'smooth' })
      setIsOpen(false) // close mobile menu on link click
    }
  }

  return (
    <nav className="fixed top-0 left-0 w-full bg-white shadow-md z-50">
      <div className="max-w-7xl mx-auto px-6 sm:px-12 lg:px-16">
        <div className="flex items-center justify-between h-20">
          {/* Logo + Name */}
          <a
            href="#hero"
            onClick={(e) => handleScroll(e, 'hero')}
            className="flex items-center space-x-3 cursor-pointer"
          >
            <Image
              src="/images/logo.jpeg" // Put your logo image here
              alt="Dr. Serena Blake Logo"
              width={70}
              height={70}
              className="rounded-full"
            />
            <span className="font-bold text-xl sm:text-2xl text-gray-900">
              Dr. Serena Blake
            </span>
          </a>

          {/* Desktop Menu */}
          <ul className="hidden md:flex space-x-10 text-gray-700 font-semibold">
            {['Hero', 'About', 'Services', 'FAQ', 'Fees', 'Contact'].map((section) => (
              <li key={section}>
                <a
                  href={`#${section.toLowerCase()}`}
                  onClick={(e) => handleScroll(e, section.toLowerCase())}
                  className="hover:text-blue-600 transition-colors duration-300"
                >
                  {section}
                </a>
              </li>
            ))}
          </ul>

          {/* Mobile Hamburger */}
          <button
            className="md:hidden flex items-center text-gray-700 focus:outline-none"
            onClick={() => setIsOpen(!isOpen)}
            aria-label="Toggle menu"
          >
            <svg
              className="w-8 h-8"
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
              viewBox="0 0 24 24"
            >
              {isOpen ? (
                <path d="M6 18L18 6M6 6l12 12" />
              ) : (
                <path d="M3 12h18M3 6h18M3 18h18" />
              )}
            </svg>
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      {isOpen && (
        <div className="md:hidden bg-white shadow-md">
          <ul className="flex flex-col space-y-4 px-6 py-6 text-gray-700 font-semibold">
            {['Hero', 'About', 'Services', 'FAQ', 'Fees', 'Contact'].map((section) => (
              <li key={section}>
                <a
                  href={`#${section.toLowerCase()}`}
                  onClick={(e) => handleScroll(e, section.toLowerCase())}
                  className="block hover:text-blue-600 transition-colors duration-300"
                >
                  {section}
                </a>
              </li>
            ))}
          </ul>
        </div>
      )}
    </nav>
  )
}

export default Navbar
