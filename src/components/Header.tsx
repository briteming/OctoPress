import Link from 'next/link'
import React from 'react'

export default function Header() {
  return (
    <header className="bg-white shadow-sm sticky top-0 z-50">
            <nav className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
              <div className="flex justify-between h-16">
                <div className="flex items-center">
                  <Link href="/" className="flex items-center space-x-2">
                    <span className="text-2xl">🐙</span>
                    <span className="font-bold text-xl text-gray-900">OctoPress</span>
                  </Link>
                </div>
                <div className="flex items-center space-x-4">
                  <a
                    href="https://github.com/SH20RAJ/OctoPress"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-gray-500 hover:text-gray-900"
                  >
                    GitHub
                  </a>
                </div>
              </div>
            </nav>
          </header>
  )
}
