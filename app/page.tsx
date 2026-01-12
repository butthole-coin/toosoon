'use client'

import { useState } from 'react'
import dynamic from 'next/dynamic'
import { celebrities } from '@/lib/data'
import { Celebrity } from '@/lib/types'
import Header from '@/components/Header'
import Hero from '@/components/Hero'
import CelebrityGrid from '@/components/CelebrityGrid'
import CelebrityDrawer from '@/components/CelebrityDrawer'
import SearchModal from '@/components/SearchModal'
import Footer from '@/components/Footer'

// Dynamic import for Three.js to avoid SSR issues
const ParticleBackground = dynamic(
  () => import('@/components/ParticleBackground'),
  { ssr: false }
)

export default function Home() {
  const [selectedCelebrity, setSelectedCelebrity] = useState<Celebrity | null>(null)
  const [isDrawerOpen, setIsDrawerOpen] = useState(false)
  const [isSearchOpen, setIsSearchOpen] = useState(false)

  const handleCelebrityClick = (celebrity: Celebrity) => {
    setSelectedCelebrity(celebrity)
    setIsDrawerOpen(true)
  }

  const handleDrawerClose = () => {
    setIsDrawerOpen(false)
    // Delay clearing the celebrity so exit animation can play
    setTimeout(() => setSelectedCelebrity(null), 300)
  }

  return (
    <main className="relative min-h-screen bg-void text-bone">
      {/* Three.js Background */}
      <ParticleBackground />
      
      {/* Header */}
      <Header onSearchOpen={() => setIsSearchOpen(true)} />

      {/* Hero Section */}
      <Hero videoUrl="https://quantum-assets.fly.dev/assets/Runway_stitch_videos_d1bf1fac-34d6-42e6-9067-706d6b5ad273.mp4" />

      {/* Celebrity Grid */}
      <CelebrityGrid 
        celebrities={celebrities}
        onCelebrityClick={handleCelebrityClick}
      />

      {/* Recent Drops Section */}
      <section className="relative py-24 bg-ash/50">
        <div className="max-w-7xl mx-auto px-6 lg:px-8 text-center">
          <span className="display-text text-[10px] tracking-[0.5em] text-bone/40 block mb-4">
            STAY INFORMED
          </span>
          <h2 className="gothic-text text-4xl md:text-5xl mb-6">
            Never Miss a Drop
          </h2>
          <p className="font-body text-bone/60 max-w-xl mx-auto mb-8">
            Subscribe to receive notifications about new memorial releases and exclusive drops.
          </p>
          
          {/* Newsletter Form */}
          <form className="flex flex-col sm:flex-row gap-4 max-w-md mx-auto">
            <input
              type="email"
              placeholder="Enter your email"
              className="flex-1 bg-void border border-bone/20 px-6 py-4 font-body text-bone placeholder:text-bone/30 focus:outline-none focus:border-bone/40 transition-colors"
            />
            <button type="submit" className="btn-memorial">
              Subscribe
            </button>
          </form>
        </div>
      </section>

      {/* Footer */}
      <Footer />

      {/* Celebrity Drawer */}
      <CelebrityDrawer
        celebrity={selectedCelebrity}
        isOpen={isDrawerOpen}
        onClose={handleDrawerClose}
      />

      {/* Search Modal */}
      <SearchModal
        isOpen={isSearchOpen}
        onClose={() => setIsSearchOpen(false)}
        celebrities={celebrities}
        onCelebrityClick={handleCelebrityClick}
      />
    </main>
  )
}
