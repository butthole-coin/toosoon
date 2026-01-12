'use client'

import { motion } from 'framer-motion'
import { ArrowDown, Calendar, Cross } from 'lucide-react'
import { Celebrity } from '@/lib/types'

interface HeroProps {
  featured: Celebrity
}

export default function Hero({ featured }: HeroProps) {
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

  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
      {/* Background Image */}
      <div className="absolute inset-0 z-0">
        <div 
          className="absolute inset-0 bg-cover bg-center bg-no-repeat opacity-20"
          style={{ 
            backgroundImage: `url(${featured.imageUrl})`,
            filter: 'grayscale(100%)'
          }}
        />
        <div className="absolute inset-0 bg-gradient-to-b from-void via-void/80 to-void" />
        <div className="absolute inset-0 bg-gradient-to-r from-void via-transparent to-void" />
      </div>

      {/* Content */}
      <div className="relative z-10 max-w-7xl mx-auto px-6 lg:px-8 py-32 text-center">
        {/* Memorial Cross */}
        <motion.div
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 1, delay: 0.2 }}
          className="mb-8"
        >
          <div className="inline-flex items-center justify-center w-16 h-16 border border-bone/20 rounded-full">
            <Cross className="w-6 h-6 text-bone/60" />
          </div>
        </motion.div>

        {/* Death Dates */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.4 }}
          className="mb-6"
        >
          <span className="death-badge inline-block">
            {formatDate(featured.birthDate)} — {formatDate(featured.deathDate)}
          </span>
        </motion.div>

        {/* Name */}
        <motion.h1
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.6 }}
          className="gothic-text text-6xl sm:text-7xl md:text-8xl lg:text-9xl mb-6 candle-glow"
        >
          {featured.name}
        </motion.h1>

        {/* Full Name */}
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.8 }}
          className="display-text text-sm tracking-[0.3em] text-bone/60 mb-8"
        >
          {featured.fullName}
        </motion.p>

        {/* Bio */}
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 1 }}
          className="font-body text-xl md:text-2xl text-bone/80 max-w-2xl mx-auto mb-12 leading-relaxed"
        >
          {featured.shortBio}
        </motion.p>

        {/* Age Badge */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 1.2 }}
          className="mb-12"
        >
          <span className="inline-block px-6 py-2 border border-bone/20 font-mono text-sm tracking-wider">
            {calculateAge(featured.birthDate, featured.deathDate)} YEARS OLD
          </span>
        </motion.div>

        {/* CTA */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 1.4 }}
          className="flex flex-col sm:flex-row gap-4 justify-center"
        >
          <a href="/shop" className="btn-memorial">
            Shop Collection
          </a>
          <a 
            href="#archive" 
            className="btn-memorial bg-bone/5 hover:bg-bone/10 border-bone/30"
          >
            View Archive
          </a>
        </motion.div>

        {/* Scroll Indicator */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.8, delay: 2 }}
          className="absolute bottom-12 left-1/2 -translate-x-1/2"
        >
          <motion.div
            animate={{ y: [0, 10, 0] }}
            transition={{ duration: 2, repeat: Infinity, ease: 'easeInOut' }}
            className="flex flex-col items-center gap-2 text-bone/40"
          >
            <span className="display-text text-[10px] tracking-[0.3em]">SCROLL</span>
            <ArrowDown className="w-4 h-4" />
          </motion.div>
        </motion.div>
      </div>

      {/* Side Memorial Text */}
      <div className="hidden lg:block absolute left-8 top-1/2 -translate-y-1/2 -rotate-90 origin-center">
        <span className="display-text text-[10px] tracking-[0.5em] text-bone/20">
          REST IN PEACE
        </span>
      </div>
      <div className="hidden lg:block absolute right-8 top-1/2 -translate-y-1/2 rotate-90 origin-center">
        <span className="display-text text-[10px] tracking-[0.5em] text-bone/20">
          GONE TOO SOON
        </span>
      </div>
    </section>
  )
}
