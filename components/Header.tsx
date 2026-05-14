'use client'

import Link from 'next/link'
import { useState } from 'react'
import { Menu, X, User } from 'lucide-react'

const NAV_ITEMS = [
  { href: '/detector', label: 'Detector' },
  { href: '/protocolos', label: 'Protocolos' },
  { href: '/tendencias', label: 'Tendencias' },
  { href: '/pricing', label: 'Pro' },
]

export default function Header() {
  const [open, setOpen] = useState(false)

  return (
    <header className="border-b border-dark-200 bg-cream/80 backdrop-blur-md sticky top-0 z-50">
      <div className="max-w-5xl mx-auto px-4 h-16 flex items-center justify-between gap-4">
        <Link href="/" className="font-bold text-xl flex items-center gap-2">
          <img src="/logo-inicio.png" alt="NOISE Logo" className="h-16 w-auto" />
        </Link>

        {/* Desktop nav */}
        <nav className="hidden md:flex flex-1 justify-center items-center gap-6">
          {NAV_ITEMS.map((item) => (
            <Link
              key={item.href}
              href={item.href}
              className="text-dark-700 hover:text-coral transition text-sm font-semibold"
            >
              {item.label}
            </Link>
          ))}
        </nav>

        <div className="hidden md:flex items-center gap-3">
          <Link
            href="/login"
            className="flex items-center gap-2 rounded-full border border-dark-200 px-4 py-2 text-dark-700 hover:bg-coral hover:text-white hover:border-coral transition text-sm font-semibold"
          >
            <User className="w-4 h-4" />
            Acceder
          </Link>
        </div>

        {/* Mobile toggle */}
        <button
          onClick={() => setOpen(!open)}
          className="md:hidden text-dark-700"
        >
          {open ? <X size={24} /> : <Menu size={24} />}
        </button>
      </div>

      {/* Mobile nav */}
      {open && (
        <nav className="md:hidden border-t border-dark-200 bg-cream px-4 py-4 space-y-3">
          {NAV_ITEMS.map((item) => (
            <Link
              key={item.href}
              href={item.href}
              onClick={() => setOpen(false)}
              className="block text-dark-700 hover:text-coral transition font-semibold"
            >
              {item.label}
            </Link>
          ))}
        </nav>
      )}
    </header>
  )
}
