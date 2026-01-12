'use client'

import { useState, useEffect, useRef, useMemo } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { Search, X, Cross, ArrowRight } from 'lucide-react'
import { Celebrity } from '@/lib/types'

interface SearchModalProps {
  isOpen: boolean
  onClose: () => void
  celebrities: Celebrity[]
  onCelebrityClick: (celebrity: Celebrity) => void
}

export default function SearchModal({ isOpen, onClose, celebrities, onCelebrityClick }: SearchModalProps) {
  const [query, setQuery] = useState('')
  const inputRef = useRef<HTMLInputElement>(null)

  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = 'hidden'
      setTimeout(() => inputRef.current?.focus(), 100)
    } else {
      document.body.style.overflow = ''
      setQuery('')
    }
    return () => {
      document.body.style.overflow = ''
    }
  }, [isOpen])

  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'Escape') {
        onClose()
      }
      if ((e.metaKey || e.ctrlKey) && e.key === 'k') {
        e.preventDefault()
        if (!isOpen) {
          // This would need to be handled by parent
        }
      }
    }
    window.addEventListener('keydown', handleKeyDown)
    return () => window.removeEventListener('keydown', handleKeyDown)
  }, [isOpen, onClose])

  const results = useMemo(() => {
    if (!query.trim()) return []
    
    const searchTerm = query.toLowerCase()
    return celebrities.filter(c => 
      c.name.toLowerCase().includes(searchTerm) ||
      c.fullName.toLowerCase().includes(searchTerm) ||
      c.profession.toLowerCase().includes(searchTerm) ||
      c.genres.some(g => g.toLowerCase().includes(searchTerm)) ||
      c.knownFor.toLowerCase().includes(searchTerm)
    ).slice(0, 8)
  }, [query, celebrities])

  const formatDate = (dateStr: string) => {
    const date = new Date(dateStr)
    return date.toLocaleDateString('en-US', { 
      month: 'short', 
      day: 'numeric', 
      year: 'numeric' 
    })
  }

  const handleSelect = (celebrity: Celebrity) => {
    onClose()
    onCelebrityClick(celebrity)
  }

  return (
    <AnimatePresence>
      {isOpen && (
        <>
          {/* Backdrop */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.2 }}
            onClick={onClose}
            className="fixed inset-0 bg-void/95 backdrop-blur-md z-50"
          />

          {/* Modal */}
          <motion.div
            initial={{ opacity: 0, scale: 0.95, y: -20 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            exit={{ opacity: 0, scale: 0.95, y: -20 }}
            transition={{ type: 'spring', damping: 25, stiffness: 300 }}
            className="fixed top-[10%] left-1/2 -translate-x-1/2 w-full max-w-2xl z-50 px-4"
          >
            <div className="bg-ash border border-bone/10 overflow-hidden shadow-2xl">
              {/* Search Input */}
              <div className="relative border-b border-bone/10">
                <Search className="absolute left-6 top-1/2 -translate-y-1/2 w-5 h-5 text-bone/40" />
                <input
                  ref={inputRef}
                  type="text"
                  value={query}
                  onChange={(e) => setQuery(e.target.value)}
                  placeholder="Search the departed..."
                  className="w-full bg-transparent py-5 pl-14 pr-14 text-lg font-body text-bone placeholder:text-bone/30 focus:outline-none"
                />
                <button
                  onClick={onClose}
                  className="absolute right-4 top-1/2 -translate-y-1/2 p-2 hover:bg-bone/5 rounded transition-colors"
                >
                  <X className="w-5 h-5 text-bone/40" />
                </button>
              </div>

              {/* Results */}
              <div className="max-h-[60vh] overflow-y-auto">
                {query.trim() === '' ? (
                  // Empty state
                  <div className="p-8 text-center">
                    <Cross className="w-8 h-8 mx-auto mb-4 text-bone/20" />
                    <p className="font-body text-bone/40">
                      Search by name, profession, or genre
                    </p>
                    <p className="font-mono text-xs text-bone/20 mt-2">
                      Press ESC to close
                    </p>
                  </div>
                ) : results.length === 0 ? (
                  // No results
                  <div className="p-8 text-center">
                    <p className="gothic-text text-xl text-bone/40 mb-2">No souls found</p>
                    <p className="font-body text-sm text-bone/30">
                      Try a different search term
                    </p>
                  </div>
                ) : (
                  // Results list
                  <ul className="divide-y divide-bone/5">
                    {results.map((celebrity, index) => (
                      <motion.li
                        key={celebrity.id}
                        initial={{ opacity: 0, x: -10 }}
                        animate={{ opacity: 1, x: 0 }}
                        transition={{ delay: index * 0.05 }}
                      >
                        <button
                          onClick={() => handleSelect(celebrity)}
                          className="w-full flex items-center gap-4 p-4 hover:bg-bone/5 transition-colors text-left group"
                        >
                          {/* Image */}
                          <div className="relative w-12 h-12 flex-shrink-0 overflow-hidden">
                            <div 
                              className="absolute inset-0 bg-cover bg-center"
                              style={{ 
                                backgroundImage: `url(${celebrity.imageUrl})`,
                                filter: 'grayscale(100%)'
                              }}
                            />
                          </div>

                          {/* Info */}
                          <div className="flex-1 min-w-0">
                            <h4 className="gothic-text text-lg truncate group-hover:candle-glow transition-all">
                              {celebrity.name}
                            </h4>
                            <p className="flex items-center gap-2 text-bone/50">
                              <span className="display-text text-[10px] tracking-wider">
                                {celebrity.profession.toUpperCase()}
                              </span>
                              <span className="text-bone/20">•</span>
                              <span className="font-mono text-[10px]">
                                {formatDate(celebrity.deathDate)}
                              </span>
                            </p>
                          </div>

                          {/* Arrow */}
                          <ArrowRight className="w-4 h-4 text-bone/20 group-hover:text-bone/60 transition-colors" />
                        </button>
                      </motion.li>
                    ))}
                  </ul>
                )}
              </div>

              {/* Footer */}
              <div className="border-t border-bone/10 px-6 py-3 flex items-center justify-between">
                <span className="font-mono text-[10px] text-bone/30">
                  {results.length} {results.length === 1 ? 'result' : 'results'}
                </span>
                <div className="flex items-center gap-4">
                  <kbd className="px-2 py-1 bg-void border border-bone/10 text-[10px] font-mono text-bone/40">
                    ↵
                  </kbd>
                  <span className="text-[10px] text-bone/30">to select</span>
                  <kbd className="px-2 py-1 bg-void border border-bone/10 text-[10px] font-mono text-bone/40">
                    esc
                  </kbd>
                  <span className="text-[10px] text-bone/30">to close</span>
                </div>
              </div>
            </div>
          </motion.div>
        </>
      )}
    </AnimatePresence>
  )
}
