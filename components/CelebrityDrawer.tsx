'use client'

import { useState, useEffect } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { X, Cross, Calendar, ExternalLink, ChevronDown, ChevronUp, ShoppingBag } from 'lucide-react'
import { Celebrity, Product } from '@/lib/types'

interface CelebrityDrawerProps {
  celebrity: Celebrity | null
  isOpen: boolean
  onClose: () => void
}

export default function CelebrityDrawer({ celebrity, isOpen, onClose }: CelebrityDrawerProps) {
  const [showFullBio, setShowFullBio] = useState(false)

  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = 'hidden'
    } else {
      document.body.style.overflow = ''
      setShowFullBio(false)
    }
    return () => {
      document.body.style.overflow = ''
    }
  }, [isOpen])

  const formatDate = (dateStr: string) => {
    const date = new Date(dateStr)
    return date.toLocaleDateString('en-US', { 
      month: 'long', 
      day: 'numeric', 
      year: 'numeric' 
    })
  }

  const calculateAge = (birth: string, death: string) => {
    const birthDate = new Date(birth)
    const deathDate = new Date(death)
    let age = deathDate.getFullYear() - birthDate.getFullYear()
    const monthDiff = deathDate.getMonth() - birthDate.getMonth()
    if (monthDiff < 0 || (monthDiff === 0 && deathDate.getDate() < birthDate.getDate())) {
      age--
    }
    return age
  }

  if (!celebrity) return null

  return (
    <AnimatePresence>
      {isOpen && (
        <>
          {/* Backdrop */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.3 }}
            onClick={onClose}
            className="fixed inset-0 bg-void/90 backdrop-blur-sm z-50"
          />

          {/* Drawer */}
          <motion.div
            initial={{ y: '100%' }}
            animate={{ y: 0 }}
            exit={{ y: '100%' }}
            transition={{ type: 'spring', damping: 30, stiffness: 300 }}
            className="fixed bottom-0 left-0 right-0 z-50 max-h-[90vh] overflow-hidden rounded-t-3xl bg-ash border-t border-bone/10"
          >
            {/* Drag Handle */}
            <div className="flex justify-center py-4">
              <div className="w-12 h-1 bg-bone/20 rounded-full" />
            </div>

            {/* Close Button */}
            <button
              onClick={onClose}
              className="absolute top-4 right-4 p-2 hover:bg-bone/5 rounded-full transition-colors"
            >
              <X className="w-6 h-6" />
            </button>

            {/* Content */}
            <div className="overflow-y-auto max-h-[calc(90vh-60px)] pb-safe">
              <div className="max-w-4xl mx-auto px-6 pb-12">
                {/* Header */}
                <div className="flex flex-col md:flex-row gap-8 mb-12">
                  {/* Image */}
                  <div className="relative w-full md:w-64 aspect-square flex-shrink-0 overflow-hidden">
                    <div 
                      className="absolute inset-0 bg-cover bg-center"
                      style={{ 
                        backgroundImage: `url(${celebrity.imageUrl})`,
                        filter: 'grayscale(100%)'
                      }}
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-ash via-transparent to-transparent" />
                  </div>

                  {/* Info */}
                  <div className="flex-1">
                    {/* Cross Icon */}
                    <div className="flex items-center gap-3 mb-4">
                      <Cross className="w-4 h-4 text-bone/40" />
                      <span className="font-mono text-xs tracking-wider text-bone/50">
                        {formatDate(celebrity.deathDate)}
                      </span>
                    </div>

                    {/* Name */}
                    <h2 className="gothic-text text-4xl md:text-5xl mb-2">{celebrity.name}</h2>
                    <p className="display-text text-xs tracking-[0.2em] text-bone/50 mb-4">
                      {celebrity.fullName}
                    </p>

                    {/* Stats */}
                    <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-6">
                      <div className="bg-void/50 p-3 border border-bone/5">
                        <span className="block font-mono text-[10px] text-bone/40 mb-1">BORN</span>
                        <span className="font-body text-sm">{formatDate(celebrity.birthDate)}</span>
                      </div>
                      <div className="bg-void/50 p-3 border border-bone/5">
                        <span className="block font-mono text-[10px] text-bone/40 mb-1">DIED</span>
                        <span className="font-body text-sm">{formatDate(celebrity.deathDate)}</span>
                      </div>
                      <div className="bg-void/50 p-3 border border-bone/5">
                        <span className="block font-mono text-[10px] text-bone/40 mb-1">AGE</span>
                        <span className="font-body text-sm">{calculateAge(celebrity.birthDate, celebrity.deathDate)} years</span>
                      </div>
                      <div className="bg-void/50 p-3 border border-bone/5">
                        <span className="block font-mono text-[10px] text-bone/40 mb-1">PROFESSION</span>
                        <span className="font-body text-sm">{celebrity.profession}</span>
                      </div>
                    </div>

                    {/* Cause of Death */}
                    <div className="mb-6 p-4 bg-blood/10 border border-blood/20">
                      <span className="display-text text-[10px] tracking-[0.15em] text-bone/50 block mb-1">
                        CAUSE OF DEATH
                      </span>
                      <p className="font-body">{celebrity.causeOfDeath}</p>
                    </div>

                    {/* Known For */}
                    <div className="mb-6">
                      <span className="display-text text-[10px] tracking-[0.15em] text-bone/50 block mb-1">
                        KNOWN FOR
                      </span>
                      <p className="font-body text-lg">{celebrity.knownFor}</p>
                    </div>
                  </div>
                </div>

                {/* Bio Section */}
                <div className="mb-12">
                  <h3 className="display-text text-xs tracking-[0.2em] text-bone/60 mb-4">BIOGRAPHY</h3>
                  <div className="font-body text-bone/80 leading-relaxed">
                    <p>{showFullBio ? celebrity.longBio : celebrity.shortBio}</p>
                  </div>
                  {celebrity.longBio && (
                    <button
                      onClick={() => setShowFullBio(!showFullBio)}
                      className="flex items-center gap-2 mt-4 text-bone/50 hover:text-bone transition-colors"
                    >
                      <span className="font-mono text-xs tracking-wider">
                        {showFullBio ? 'SHOW LESS' : 'SHOW MORE'}
                      </span>
                      {showFullBio ? (
                        <ChevronUp className="w-4 h-4" />
                      ) : (
                        <ChevronDown className="w-4 h-4" />
                      )}
                    </button>
                  )}
                </div>

                {/* Products Section */}
                <div>
                  <div className="flex items-center justify-between mb-6">
                    <h3 className="display-text text-xs tracking-[0.2em] text-bone/60">
                      MEMORIAL MERCHANDISE
                    </h3>
                    <span className="font-mono text-xs text-bone/40">
                      {celebrity.products.length} {celebrity.products.length === 1 ? 'ITEM' : 'ITEMS'}
                    </span>
                  </div>

                  <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
                    {celebrity.products.map((product) => (
                      <ProductCard key={product.id} product={product} />
                    ))}
                  </div>
                </div>

                {/* Genres/Tags */}
                <div className="mt-12 pt-6 border-t border-bone/10">
                  <div className="flex flex-wrap gap-2">
                    {celebrity.genres.map((genre, i) => (
                      <span 
                        key={i} 
                        className="px-3 py-1 border border-bone/10 text-[10px] font-mono tracking-wider text-bone/50 uppercase"
                      >
                        {genre}
                      </span>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          </motion.div>
        </>
      )}
    </AnimatePresence>
  )
}

function ProductCard({ product }: { product: Product }) {
  const formatDate = (dateStr: string) => {
    const date = new Date(dateStr)
    return date.toLocaleDateString('en-US', { 
      month: 'short', 
      year: 'numeric' 
    })
  }

  return (
    <a 
      href={product.url}
      className="group tombstone-card block overflow-hidden"
    >
      {/* Image */}
      <div className="relative aspect-square overflow-hidden">
        <div 
          className="absolute inset-0 bg-cover bg-center bg-no-repeat transition-transform duration-500 group-hover:scale-105"
          style={{ 
            backgroundImage: `url(${product.imageUrl})`,
            filter: 'grayscale(100%)'
          }}
        />
        <div className="absolute inset-0 bg-gradient-to-t from-void/80 to-transparent" />
        
        {/* Sold Out Badge */}
        {product.soldOut && (
          <div className="sold-out-badge">SOLD OUT</div>
        )}

        {/* Drop Date */}
        <div className="absolute top-3 left-3">
          <span className="death-badge text-[9px]">
            <Calendar className="w-3 h-3 inline mr-1" />
            {formatDate(product.dropDate)}
          </span>
        </div>
      </div>

      {/* Info */}
      <div className="p-4">
        <h4 className="font-body text-sm mb-2 group-hover:text-bone transition-colors">
          {product.name}
        </h4>
        <div className="flex items-center justify-between">
          <span className="font-mono text-xs text-bone/60">
            ${product.price.toFixed(2)}
          </span>
          <span className="display-text text-[9px] tracking-wider text-bone/40 uppercase">
            {product.type}
          </span>
        </div>
      </div>

      {/* Hover Overlay */}
      <div className="absolute inset-0 bg-bone/0 group-hover:bg-bone/5 transition-colors pointer-events-none" />
    </a>
  )
}
