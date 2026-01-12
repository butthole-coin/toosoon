'use client'

import { motion } from 'framer-motion'
import { ArrowDown, Cross, Skull } from 'lucide-react'

interface HeroProps {
  videoUrl?: string
}

export default function Hero({ videoUrl }: HeroProps) {
  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
      {/* Background Video or Fallback */}
      <div className="absolute inset-0 z-0">
        {videoUrl ? (
          <>
            <video
              autoPlay
              loop
              muted
              playsInline
              className="absolute inset-0 w-full h-full object-cover"
              style={{ filter: 'grayscale(30%)' }}
            >
              <source src={videoUrl} type="video/mp4" />
            </video>
            {/* Dark overlay for video */}
            <div className="absolute inset-0 bg-void/70" />
          </>
        ) : (
          <div className="absolute inset-0 bg-void" />
        )}
        <div className="absolute inset-0 bg-gradient-to-b from-void/90 via-void/50 to-void" />
        <div className="absolute inset-0 bg-gradient-to-r from-void/70 via-transparent to-void/70" />
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
          <div className="inline-flex items-center justify-center w-20 h-20 border border-candle/30 rounded-full">
            <Skull className="w-8 h-8 text-candle/80" />
          </div>
        </motion.div>

        {/* Tagline */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.4 }}
          className="mb-6"
        >
          <span className="display-text text-[10px] sm:text-xs tracking-[0.4em] text-bone/50">
            MEMORIAL MERCHANDISE FOR LEGENDS
          </span>
        </motion.div>

        {/* Brand Name */}
        <motion.h1
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.6 }}
          className="gothic-text text-7xl sm:text-8xl md:text-9xl lg:text-[12rem] mb-6 candle-glow"
        >
          Too Soon
        </motion.h1>

        {/* Subtitle */}
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.8 }}
          className="display-text text-sm tracking-[0.3em] text-bone/60 mb-8"
        >
          GONE BUT NEVER FORGOTTEN
        </motion.p>

        {/* Description */}
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 1 }}
          className="font-body text-xl md:text-2xl text-bone/70 max-w-2xl mx-auto mb-12 leading-relaxed"
        >
          Premium memorial apparel honoring the icons who left us too soon.
          Each piece is a tribute to their legacy, designed with reverence and crafted with care.
        </motion.p>

        {/* Stats */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 1.2 }}
          className="flex flex-wrap justify-center gap-8 mb-12"
        >
          <div className="text-center">
            <span className="block gothic-text text-3xl md:text-4xl candle-glow">8+</span>
            <span className="display-text text-[10px] tracking-widest text-bone/40">LEGENDS</span>
          </div>
          <div className="text-center">
            <span className="block gothic-text text-3xl md:text-4xl candle-glow">100%</span>
            <span className="display-text text-[10px] tracking-widest text-bone/40">PREMIUM</span>
          </div>
          <div className="text-center">
            <span className="block gothic-text text-3xl md:text-4xl candle-glow">LIMITED</span>
            <span className="display-text text-[10px] tracking-widest text-bone/40">EDITIONS</span>
          </div>
        </motion.div>

        {/* CTA Buttons */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 1.4 }}
          className="flex flex-col sm:flex-row gap-4 justify-center"
        >
          <a href="#archive" className="btn-memorial">
            Browse Collection
          </a>
          <a
            href="#about"
            className="btn-memorial bg-bone/5 hover:bg-bone/10 border-bone/30"
          >
            Learn More
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
