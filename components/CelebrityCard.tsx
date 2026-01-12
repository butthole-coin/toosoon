'use client'

import { motion } from 'framer-motion'
import { Calendar, Cross } from 'lucide-react'
import { Celebrity } from '@/lib/types'

interface CelebrityCardProps {
  celebrity: Celebrity
  index: number
  onClick: () => void
}

export default function CelebrityCard({ celebrity, index, onClick }: CelebrityCardProps) {
  const formatDate = (dateStr: string) => {
    const date = new Date(dateStr)
    return date.toLocaleDateString('en-US', { 
      month: 'short', 
      day: 'numeric', 
      year: 'numeric' 
    })
  }

  const productCount = celebrity.products.length
  const availableCount = celebrity.products.filter(p => !p.soldOut).length

  return (
    <motion.article
      initial={{ opacity: 0, y: 30 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ 
        duration: 0.5, 
        delay: index * 0.1,
        ease: [0.16, 1, 0.3, 1]
      }}
      onClick={onClick}
      className="tombstone-card group cursor-pointer overflow-hidden"
    >
      {/* Image */}
      <div className="relative aspect-[3/4] overflow-hidden">
        <div 
          className="absolute inset-0 bg-cover bg-center bg-no-repeat transition-transform duration-700 group-hover:scale-105"
          style={{ 
            backgroundImage: `url(${celebrity.imageUrl})`,
            filter: 'grayscale(100%)'
          }}
        />
        <div className="absolute inset-0 bg-gradient-to-t from-void via-void/50 to-transparent" />
        
        {/* Product Count Badge */}
        <div className="absolute top-4 right-4 flex items-center gap-2">
          <span className="death-badge">
            {availableCount}/{productCount} AVAILABLE
          </span>
        </div>

        {/* Death Date Ribbon */}
        <div className="absolute top-4 left-4">
          <div className="flex items-center gap-2 text-bone/70">
            <Cross className="w-3 h-3" />
            <span className="font-mono text-xs tracking-wider">
              {formatDate(celebrity.deathDate)}
            </span>
          </div>
        </div>

        {/* Overlay Content */}
        <div className="absolute bottom-0 left-0 right-0 p-6">
          <h3 className="gothic-text text-3xl lg:text-4xl mb-2 group-hover:candle-glow transition-all duration-300">
            {celebrity.name}
          </h3>
          <p className="display-text text-[10px] tracking-[0.2em] text-bone/60 mb-3">
            {celebrity.profession.toUpperCase()}
          </p>
          <p className="font-body text-sm text-bone/70 line-clamp-2">
            {celebrity.shortBio}
          </p>
        </div>
      </div>

      {/* Footer */}
      <div className="p-4 border-t border-bone/5 flex items-center justify-between">
        <div className="flex flex-wrap gap-2">
          {celebrity.genres.slice(0, 2).map((genre, i) => (
            <span 
              key={i} 
              className="text-[10px] font-mono tracking-wider text-bone/40 uppercase"
            >
              {genre}
            </span>
          ))}
        </div>
        <div className="flex items-center gap-2 text-bone/40">
          <Calendar className="w-3 h-3" />
          <span className="text-[10px] font-mono tracking-wider">
            {celebrity.dropDates.length} {celebrity.dropDates.length === 1 ? 'DROP' : 'DROPS'}
          </span>
        </div>
      </div>
    </motion.article>
  )
}
