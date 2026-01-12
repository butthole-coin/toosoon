'use client'

import { useState, useEffect } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { Search, Menu, X, User, ShoppingBag } from 'lucide-react'
import Image from 'next/image'

interface HeaderProps {
  onSearchOpen: () => void
}

export default function Header({ onSearchOpen }: HeaderProps) {
  const [isScrolled, setIsScrolled] = useState(false)
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false)

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50)
    }
    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  return (
    <>
      <motion.header
        initial={{ y: -100, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
        className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${
          isScrolled 
            ? 'bg-void/95 backdrop-blur-md border-b border-bone/10' 
            : 'bg-transparent'
        }`}
      >
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <div className="flex items-center justify-between h-20">
            {/* Mobile Menu Toggle */}
            <button
              onClick={() => setIsMobileMenuOpen(true)}
              className="lg:hidden p-2 hover:bg-bone/5 rounded transition-colors"
              aria-label="Open menu"
            >
              <Menu className="w-6 h-6" />
            </button>

            {/* Logo */}
            <div className="flex-1 flex justify-center lg:justify-start">
              <a href="/" className="group relative">
                <img
                  src="https://quantum-assets.fly.dev/assets/logo%20no%20bck.png"
                  alt="Too Soon"
                  className="h-10 lg:h-12 w-auto object-contain group-hover:opacity-80 transition-opacity invert"
                />
              </a>
            </div>

            {/* Desktop Navigation */}
            <nav className="hidden lg:flex items-center gap-10">
              <NavLink href="/shop">Shop</NavLink>
              <NavLink href="/drops">Drops</NavLink>
              <NavLink href="/about">About</NavLink>
            </nav>

            {/* Actions */}
            <div className="flex items-center gap-4">
              <button
                onClick={onSearchOpen}
                className="p-2 hover:bg-bone/5 rounded transition-colors"
                aria-label="Search"
              >
                <Search className="w-5 h-5" />
              </button>
              <button
                className="hidden sm:flex p-2 hover:bg-bone/5 rounded transition-colors"
                aria-label="Account"
              >
                <User className="w-5 h-5" />
              </button>
              <button
                className="p-2 hover:bg-bone/5 rounded transition-colors relative"
                aria-label="Cart"
              >
                <ShoppingBag className="w-5 h-5" />
                <span className="absolute -top-1 -right-1 w-4 h-4 bg-bone text-void text-[10px] flex items-center justify-center rounded-full font-mono">
                  0
                </span>
              </button>
            </div>
          </div>
        </div>
      </motion.header>

      {/* Mobile Menu */}
      <AnimatePresence>
        {isMobileMenuOpen && (
          <>
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              transition={{ duration: 0.3 }}
              className="fixed inset-0 bg-void/80 backdrop-blur-sm z-50"
              onClick={() => setIsMobileMenuOpen(false)}
            />
            <motion.div
              initial={{ x: '-100%' }}
              animate={{ x: 0 }}
              exit={{ x: '-100%' }}
              transition={{ type: 'spring', damping: 30, stiffness: 300 }}
              className="fixed top-0 left-0 bottom-0 w-80 bg-ash z-50 border-r border-bone/10"
            >
              <div className="flex flex-col h-full">
                <div className="flex items-center justify-between p-6 border-b border-bone/10">
                  <img
                    src="https://quantum-assets.fly.dev/assets/logo%20no%20bck.png"
                    alt="Too Soon"
                    className="h-8 w-auto object-contain invert"
                  />
                  <button
                    onClick={() => setIsMobileMenuOpen(false)}
                    className="p-2 hover:bg-bone/5 rounded transition-colors"
                  >
                    <X className="w-6 h-6" />
                  </button>
                </div>
                <nav className="flex-1 p-6">
                  <ul className="space-y-6">
                    <MobileNavLink href="/shop" onClick={() => setIsMobileMenuOpen(false)}>
                      Shop
                    </MobileNavLink>
                    <MobileNavLink href="/drops" onClick={() => setIsMobileMenuOpen(false)}>
                      Drops
                    </MobileNavLink>
                    <MobileNavLink href="/about" onClick={() => setIsMobileMenuOpen(false)}>
                      About
                    </MobileNavLink>
                    <MobileNavLink href="/account" onClick={() => setIsMobileMenuOpen(false)}>
                      Account
                    </MobileNavLink>
                  </ul>
                </nav>
                <div className="p-6 border-t border-bone/10">
                  <p className="text-bone/50 text-sm font-body">
                    Honoring those who left us too soon.
                  </p>
                </div>
              </div>
            </motion.div>
          </>
        )}
      </AnimatePresence>
    </>
  )
}

function NavLink({ href, children }: { href: string; children: React.ReactNode }) {
  return (
    <a
      href={href}
      className="display-text text-xs tracking-[0.2em] text-bone/70 hover:text-bone transition-colors relative group"
    >
      {children}
      <span className="absolute -bottom-1 left-0 w-0 h-px bg-bone transition-all duration-300 group-hover:w-full" />
    </a>
  )
}

function MobileNavLink({ href, children, onClick }: { href: string; children: React.ReactNode; onClick: () => void }) {
  return (
    <li>
      <a
        href={href}
        onClick={onClick}
        className="display-text text-lg tracking-[0.15em] text-bone/70 hover:text-bone transition-colors block"
      >
        {children}
      </a>
    </li>
  )
}
