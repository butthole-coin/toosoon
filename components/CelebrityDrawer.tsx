'use client'

import { useState, useEffect } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { X, Cross, ChevronDown, ChevronUp, ShoppingBag } from 'lucide-react'
import { Celebrity } from '@/lib/types'

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

  // Generate demo products with the celebrity's image
  const demoProducts = [
    {
      id: `${celebrity.id}-memorial-tee`,
      name: `${celebrity.name} Memorial Tee`,
      price: 45,
      type: 'Classic Fit'
    },
    {
      id: `${celebrity.id}-portrait-tee`,
      name: `${celebrity.name} Portrait Tee`,
      price: 50,
      type: 'Premium'
    },
    {
      id: `${celebrity.id}-legacy-tee`,
      name: `${celebrity.name} Legacy Tee`,
      price: 55,
      type: 'Limited Edition'
    }
  ]

  return (
    <AnimatePresence>
      {isOpen && (
        <>
          {/* Full Screen Backdrop with Celebrity Image */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.5 }}
            className="fixed inset-0 z-50 overflow-y-auto"
          >
            {/* Background Image */}
            <div className="fixed inset-0">
              <div
                className="absolute inset-0 bg-cover bg-center bg-no-repeat"
                style={{
                  backgroundImage: `url(${celebrity.imageUrl})`,
                  filter: 'grayscale(100%) blur(8px)',
                  transform: 'scale(1.1)'
                }}
              />
              <div className="absolute inset-0 bg-void/85" />
              <div className="absolute inset-0 bg-gradient-to-b from-void via-transparent to-void" />
            </div>

            {/* Close Button */}
            <button
              onClick={onClose}
              className="fixed top-6 right-6 z-50 p-3 bg-void/50 hover:bg-void/70 border border-bone/20 rounded-full transition-colors"
            >
              <X className="w-6 h-6" />
            </button>

            {/* Content */}
            <div className="relative z-10 min-h-screen">
              {/* Hero Section */}
              <section className="min-h-screen flex items-center justify-center py-20 px-6">
                <div className="max-w-4xl mx-auto text-center">
                  {/* Memorial Cross */}
                  <motion.div
                    initial={{ opacity: 0, scale: 0.8 }}
                    animate={{ opacity: 1, scale: 1 }}
                    transition={{ duration: 0.8, delay: 0.1 }}
                    className="mb-6"
                  >
                    <div className="inline-flex items-center justify-center w-16 h-16 border border-bone/20 rounded-full">
                      <Cross className="w-6 h-6 text-bone/60" />
                    </div>
                  </motion.div>

                  {/* Death Dates */}
                  <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.6, delay: 0.2 }}
                    className="mb-4"
                  >
                    <span className="death-badge inline-block">
                      {formatDate(celebrity.birthDate)} — {formatDate(celebrity.deathDate)}
                    </span>
                  </motion.div>

                  {/* Name */}
                  <motion.h1
                    initial={{ opacity: 0, y: 30 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.6, delay: 0.3 }}
                    className="gothic-text text-5xl sm:text-6xl md:text-7xl lg:text-8xl mb-4 candle-glow"
                  >
                    {celebrity.name}
                  </motion.h1>

                  {/* Full Name */}
                  <motion.p
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.6, delay: 0.4 }}
                    className="display-text text-xs sm:text-sm tracking-[0.3em] text-bone/50 mb-6"
                  >
                    {celebrity.fullName}
                  </motion.p>

                  {/* Bio */}
                  <motion.p
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.6, delay: 0.5 }}
                    className="font-body text-lg md:text-xl text-bone/70 max-w-2xl mx-auto mb-8 leading-relaxed"
                  >
                    {celebrity.shortBio}
                  </motion.p>

                  {/* Stats */}
                  <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.6, delay: 0.6 }}
                    className="flex flex-wrap justify-center gap-6 mb-8"
                  >
                    <div className="text-center px-4">
                      <span className="block gothic-text text-2xl md:text-3xl candle-glow">
                        {calculateAge(celebrity.birthDate, celebrity.deathDate)}
                      </span>
                      <span className="display-text text-[10px] tracking-widest text-bone/40">YEARS OLD</span>
                    </div>
                    <div className="text-center px-4">
                      <span className="block gothic-text text-2xl md:text-3xl candle-glow">
                        {celebrity.profession.split(',')[0]}
                      </span>
                      <span className="display-text text-[10px] tracking-widest text-bone/40">PROFESSION</span>
                    </div>
                  </motion.div>

                  {/* Known For */}
                  <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.6, delay: 0.7 }}
                    className="mb-10"
                  >
                    <span className="display-text text-[10px] tracking-[0.2em] text-bone/40 block mb-2">
                      KNOWN FOR
                    </span>
                    <p className="font-body text-lg text-bone/80">{celebrity.knownFor}</p>
                  </motion.div>

                  {/* Scroll for Merch */}
                  <motion.div
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    transition={{ duration: 0.6, delay: 1 }}
                  >
                    <motion.div
                      animate={{ y: [0, 10, 0] }}
                      transition={{ duration: 2, repeat: Infinity, ease: 'easeInOut' }}
                      className="flex flex-col items-center gap-2 text-bone/40"
                    >
                      <span className="display-text text-[10px] tracking-[0.3em]">SCROLL FOR MERCH</span>
                      <ChevronDown className="w-5 h-5" />
                    </motion.div>
                  </motion.div>
                </div>
              </section>

              {/* Merchandise Section */}
              <section className="relative py-20 px-6 bg-void/80 backdrop-blur-sm">
                <div className="max-w-6xl mx-auto">
                  {/* Section Header */}
                  <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.6 }}
                    className="text-center mb-16"
                  >
                    <span className="display-text text-[10px] tracking-[0.4em] text-bone/40 block mb-4">
                      MEMORIAL COLLECTION
                    </span>
                    <h2 className="gothic-text text-4xl md:text-5xl candle-glow mb-4">
                      Honor The Legacy
                    </h2>
                    <p className="font-body text-bone/60 max-w-xl mx-auto">
                      Premium memorial apparel featuring {celebrity.name}. Each piece is a tribute to their enduring impact.
                    </p>
                  </motion.div>

                  {/* T-Shirt Grid */}
                  <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                    {demoProducts.map((product, index) => (
                      <motion.div
                        key={product.id}
                        initial={{ opacity: 0, y: 30 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.6, delay: index * 0.1 }}
                        className="group"
                      >
                        {/* T-Shirt Mockup */}
                        <div className="relative aspect-square mb-4 bg-ash border border-bone/10 overflow-hidden">
                          {/* Black T-Shirt Shape */}
                          <div className="absolute inset-0 flex items-center justify-center p-8">
                            <div className="relative w-full h-full">
                              {/* Shirt Body */}
                              <svg
                                viewBox="0 0 200 220"
                                className="w-full h-full"
                                fill="none"
                                xmlns="http://www.w3.org/2000/svg"
                              >
                                {/* T-Shirt Shape */}
                                <path
                                  d="M40 50 L20 70 L20 90 L40 85 L40 210 L160 210 L160 85 L180 90 L180 70 L160 50 L130 50 C130 50 125 70 100 70 C75 70 70 50 70 50 L40 50"
                                  fill="#0a0a0a"
                                  stroke="#1a1a1a"
                                  strokeWidth="2"
                                />
                                {/* Collar */}
                                <ellipse
                                  cx="100"
                                  cy="55"
                                  rx="25"
                                  ry="10"
                                  fill="#0a0a0a"
                                  stroke="#1a1a1a"
                                  strokeWidth="2"
                                />
                              </svg>

                              {/* Celebrity Image on Shirt */}
                              <div
                                className="absolute top-[35%] left-1/2 -translate-x-1/2 w-[40%] aspect-square rounded overflow-hidden border border-bone/10"
                                style={{
                                  backgroundImage: `url(${celebrity.imageUrl})`,
                                  backgroundSize: 'cover',
                                  backgroundPosition: 'center top',
                                  filter: 'grayscale(100%) contrast(1.1)'
                                }}
                              />

                              {/* RIP Text Under Image */}
                              <div className="absolute top-[72%] left-1/2 -translate-x-1/2 text-center">
                                <span className="text-bone/80 text-[8px] font-mono tracking-wider">
                                  REST IN PEACE
                                </span>
                              </div>
                            </div>
                          </div>

                          {/* Hover Overlay */}
                          <div className="absolute inset-0 bg-candle/0 group-hover:bg-candle/5 transition-colors duration-300" />

                          {/* Quick Add Button */}
                          <div className="absolute bottom-4 left-1/2 -translate-x-1/2 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                            <button className="flex items-center gap-2 bg-bone text-void px-4 py-2 text-xs font-mono tracking-wider">
                              <ShoppingBag className="w-4 h-4" />
                              ADD TO CART
                            </button>
                          </div>
                        </div>

                        {/* Product Info */}
                        <div className="text-center">
                          <h3 className="font-body text-lg mb-1 group-hover:text-candle transition-colors">
                            {product.name}
                          </h3>
                          <div className="flex items-center justify-center gap-3">
                            <span className="font-mono text-sm text-bone/60">
                              ${product.price}.00
                            </span>
                            <span className="text-bone/30">•</span>
                            <span className="display-text text-[10px] tracking-wider text-bone/40">
                              {product.type}
                            </span>
                          </div>
                        </div>
                      </motion.div>
                    ))}
                  </div>

                  {/* Coming Soon Notice */}
                  <motion.div
                    initial={{ opacity: 0 }}
                    whileInView={{ opacity: 1 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.6, delay: 0.3 }}
                    className="text-center mt-12 pt-8 border-t border-bone/10"
                  >
                    <p className="font-mono text-xs text-bone/40 tracking-wider">
                      PRODUCTS COMING SOON • JOIN WAITLIST FOR EARLY ACCESS
                    </p>
                  </motion.div>
                </div>
              </section>

              {/* Extended Bio Section */}
              {celebrity.longBio && (
                <section className="py-16 px-6 bg-ash/50">
                  <div className="max-w-3xl mx-auto">
                    <motion.div
                      initial={{ opacity: 0 }}
                      whileInView={{ opacity: 1 }}
                      viewport={{ once: true }}
                      transition={{ duration: 0.6 }}
                    >
                      <h3 className="display-text text-xs tracking-[0.2em] text-bone/40 mb-6 text-center">
                        THE LEGACY
                      </h3>
                      <div className="font-body text-lg text-bone/70 leading-relaxed">
                        <p>{showFullBio ? celebrity.longBio : celebrity.longBio.slice(0, 300) + '...'}</p>
                      </div>
                      <button
                        onClick={() => setShowFullBio(!showFullBio)}
                        className="flex items-center gap-2 mx-auto mt-6 text-bone/50 hover:text-candle transition-colors"
                      >
                        <span className="font-mono text-xs tracking-wider">
                          {showFullBio ? 'SHOW LESS' : 'READ FULL BIO'}
                        </span>
                        {showFullBio ? (
                          <ChevronUp className="w-4 h-4" />
                        ) : (
                          <ChevronDown className="w-4 h-4" />
                        )}
                      </button>
                    </motion.div>
                  </div>
                </section>
              )}

              {/* Cause of Death */}
              <section className="py-12 px-6 bg-blood/10 border-y border-blood/20">
                <div className="max-w-2xl mx-auto text-center">
                  <span className="display-text text-[10px] tracking-[0.2em] text-bone/40 block mb-2">
                    CAUSE OF DEATH
                  </span>
                  <p className="font-body text-xl text-bone/80">{celebrity.causeOfDeath}</p>
                </div>
              </section>

              {/* Footer Section */}
              <section className="py-16 px-6 text-center">
                <div className="max-w-2xl mx-auto">
                  {/* Genres */}
                  <div className="flex flex-wrap justify-center gap-2 mb-8">
                    {celebrity.genres.map((genre, i) => (
                      <span
                        key={i}
                        className="px-4 py-2 border border-bone/10 text-[10px] font-mono tracking-wider text-bone/50 uppercase"
                      >
                        {genre}
                      </span>
                    ))}
                  </div>

                  {/* Memorial Message */}
                  <p className="gothic-text text-2xl text-bone/40 mb-8">
                    Forever in our hearts
                  </p>

                  {/* Back Button */}
                  <button
                    onClick={onClose}
                    className="btn-memorial"
                  >
                    Back to Archive
                  </button>
                </div>
              </section>
            </div>
          </motion.div>
        </>
      )}
    </AnimatePresence>
  )
}
