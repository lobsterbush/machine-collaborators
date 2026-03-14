'use client'

import Link from 'next/link'
import { useState, useEffect } from 'react'
import { usePathname } from 'next/navigation'
import { motion, AnimatePresence } from 'framer-motion'
import { Logo } from './Logo'

const navLinks = [
  { href: '/sessions', label: 'Sessions' },
  { href: '/reading', label: 'Reading' },
  { href: '/nominate', label: 'Speak' },
  { href: '/about', label: 'About' },
  { href: '/subscribe', label: 'Subscribe' },
]

export function Header() {
  const [mobileOpen, setMobileOpen] = useState(false)
  const [scrolled, setScrolled] = useState(false)
  const pathname = usePathname()
  const isHome = pathname === '/' || pathname === ''

  // On homepage: start transparent over dark hero, then show backdrop after scrolling past hero
  // On other pages: always show the solid backdrop
  useEffect(() => {
    function onScroll() {
      setScrolled(window.scrollY > 80)
    }
    onScroll()
    window.addEventListener('scroll', onScroll, { passive: true })
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  // Dark mode = white text on transparent/dark bg (over hero)
  // Light mode = ink text on parchment backdrop (scrolled or non-home pages)
  const showBackdrop = !isHome || scrolled

  return (
    <>
      <header
        className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
          showBackdrop
            ? 'bg-parchment/95 backdrop-blur-sm shadow-[0_1px_0_rgba(26,26,46,0.08)]'
            : 'bg-transparent'
        }`}
      >
        <div className="mc-container flex items-center justify-between py-6">
          {/* Logo */}
          <Link
            href="/"
            className={`transition-colors duration-300 ${showBackdrop ? 'text-ink' : 'text-parchment'}`}
            aria-label="Machine Collaborators — Home"
          >
            <Logo size={24} />
          </Link>

          {/* Desktop nav */}
          <nav className="hidden md:flex items-center gap-10">
            {navLinks.map((link) => {
              const isActive = pathname === link.href || pathname.startsWith(link.href + '/')
              return (
                <Link
                  key={link.href}
                  href={link.href}
                  className={`editorial-label transition-colors duration-300 ${
                    isActive
                      ? showBackdrop ? 'text-ink' : 'text-parchment'
                      : showBackdrop
                        ? 'text-warm-gray hover:text-ink'
                        : 'text-parchment/70 hover:text-parchment'
                  }`}
                >
                  {link.label}
                </Link>
              )
            })}
          </nav>

          {/* Mobile toggle */}
          <button
            className={`md:hidden transition-colors duration-300 ${showBackdrop ? 'text-ink' : 'text-parchment'}`}
            onClick={() => setMobileOpen(!mobileOpen)}
            aria-label="Toggle menu"
          >
            <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
              {mobileOpen ? (
                <path d="M18 6L6 18M6 6l12 12" />
              ) : (
                <path d="M3 12h18M3 6h18M3 18h18" />
              )}
            </svg>
          </button>
        </div>
      </header>

      {/* Mobile menu — full screen overlay */}
      <AnimatePresence>
        {mobileOpen && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.3 }}
            className="fixed inset-0 z-[100] bg-ink flex flex-col justify-center"
          >
            <button
              className="absolute top-6 right-6 text-parchment"
              onClick={() => setMobileOpen(false)}
              aria-label="Close menu"
            >
              <svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                <path d="M18 6L6 18M6 6l12 12" />
              </svg>
            </button>
            <nav className="mc-container flex flex-col gap-8">
              {navLinks.map((link, i) => (
                <motion.div
                  key={link.href}
                  initial={{ opacity: 0, x: -30 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: i * 0.08, duration: 0.4 }}
                >
                  <Link
                    href={link.href}
                    onClick={() => setMobileOpen(false)}
                    className="font-serif text-4xl font-bold text-parchment hover:text-terracotta transition-colors"
                  >
                    {link.label}
                  </Link>
                </motion.div>
              ))}
            </nav>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  )
}
