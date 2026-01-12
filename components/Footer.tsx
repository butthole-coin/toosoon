'use client'

import { motion } from 'framer-motion'
import { Instagram, Twitter, Mail, Cross } from 'lucide-react'

export default function Footer() {
  const currentYear = new Date().getFullYear()

  return (
    <footer className="relative bg-ash border-t border-bone/10">
      {/* Main Footer */}
      <div className="max-w-7xl mx-auto px-6 lg:px-8 py-16">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-12">
          {/* Brand */}
          <div className="md:col-span-2">
            <span className="gothic-text text-4xl block mb-4">toosoon</span>
            <p className="font-body text-bone/60 max-w-md leading-relaxed mb-6">
              Memorial merchandise honoring those who left us too soon. 
              Each piece is a tribute to the legends who shaped our culture.
            </p>
            <div className="flex items-center gap-4">
              <a 
                href="https://instagram.com" 
                target="_blank" 
                rel="noopener noreferrer"
                className="p-3 border border-bone/10 hover:border-bone/30 hover:bg-bone/5 transition-all"
              >
                <Instagram className="w-5 h-5" />
              </a>
              <a 
                href="https://twitter.com" 
                target="_blank" 
                rel="noopener noreferrer"
                className="p-3 border border-bone/10 hover:border-bone/30 hover:bg-bone/5 transition-all"
              >
                <Twitter className="w-5 h-5" />
              </a>
              <a 
                href="mailto:contact@toosoon.rip"
                className="p-3 border border-bone/10 hover:border-bone/30 hover:bg-bone/5 transition-all"
              >
                <Mail className="w-5 h-5" />
              </a>
            </div>
          </div>

          {/* Links */}
          <div>
            <h4 className="display-text text-xs tracking-[0.2em] text-bone/40 mb-6">SHOP</h4>
            <ul className="space-y-4">
              <li>
                <a href="/shop" className="font-body text-bone/70 hover:text-bone transition-colors">
                  All Products
                </a>
              </li>
              <li>
                <a href="/drops" className="font-body text-bone/70 hover:text-bone transition-colors">
                  Recent Drops
                </a>
              </li>
              <li>
                <a href="/shop?category=tees" className="font-body text-bone/70 hover:text-bone transition-colors">
                  Tees
                </a>
              </li>
              <li>
                <a href="/shop?category=hoodies" className="font-body text-bone/70 hover:text-bone transition-colors">
                  Hoodies
                </a>
              </li>
            </ul>
          </div>

          {/* Info */}
          <div>
            <h4 className="display-text text-xs tracking-[0.2em] text-bone/40 mb-6">INFO</h4>
            <ul className="space-y-4">
              <li>
                <a href="/about" className="font-body text-bone/70 hover:text-bone transition-colors">
                  About Us
                </a>
              </li>
              <li>
                <a href="/contact" className="font-body text-bone/70 hover:text-bone transition-colors">
                  Contact
                </a>
              </li>
              <li>
                <a href="/shipping" className="font-body text-bone/70 hover:text-bone transition-colors">
                  Shipping
                </a>
              </li>
              <li>
                <a href="/returns" className="font-body text-bone/70 hover:text-bone transition-colors">
                  Returns
                </a>
              </li>
            </ul>
          </div>
        </div>
      </div>

      {/* Bottom Bar */}
      <div className="border-t border-bone/5">
        <div className="max-w-7xl mx-auto px-6 lg:px-8 py-6">
          <div className="flex flex-col md:flex-row items-center justify-between gap-4">
            <div className="flex items-center gap-3 text-bone/30">
              <Cross className="w-4 h-4" />
              <span className="font-mono text-xs tracking-wider">
                © {currentYear} TOO SOON. ALL RIGHTS RESERVED.
              </span>
            </div>
            <div className="flex items-center gap-6">
              <a href="/privacy" className="font-mono text-xs text-bone/30 hover:text-bone/60 transition-colors">
                Privacy
              </a>
              <a href="/terms" className="font-mono text-xs text-bone/30 hover:text-bone/60 transition-colors">
                Terms
              </a>
            </div>
          </div>
        </div>
      </div>

      {/* Decorative Elements */}
      <div className="absolute bottom-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-bone/10 to-transparent" />
    </footer>
  )
}
