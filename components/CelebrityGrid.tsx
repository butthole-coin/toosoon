'use client'

import { useState, useMemo } from 'react'
import { motion } from 'framer-motion'
import { SlidersHorizontal, Grid, List, ArrowUpDown } from 'lucide-react'
import { Celebrity, SortOption, FilterGenre } from '@/lib/types'
import { genres } from '@/lib/data'
import CelebrityCard from './CelebrityCard'

interface CelebrityGridProps {
  celebrities: Celebrity[]
  onCelebrityClick: (celebrity: Celebrity) => void
}

export default function CelebrityGrid({ celebrities, onCelebrityClick }: CelebrityGridProps) {
  const [sortBy, setSortBy] = useState<SortOption>('drop')
  const [filterGenre, setFilterGenre] = useState<FilterGenre>('all')
  const [viewMode, setViewMode] = useState<'grid' | 'list'>('grid')
  const [showFilters, setShowFilters] = useState(false)

  const sortedAndFiltered = useMemo(() => {
    let result = [...celebrities]

    // Filter by genre
    if (filterGenre !== 'all') {
      result = result.filter(c => 
        c.genres.some(g => g.toLowerCase().includes(filterGenre.toLowerCase())) ||
        c.profession.toLowerCase().includes(filterGenre.toLowerCase())
      )
    }

    // Sort
    switch (sortBy) {
      case 'alphabetical':
        result.sort((a, b) => a.name.localeCompare(b.name))
        break
      case 'death-date':
        result.sort((a, b) => new Date(b.deathDate).getTime() - new Date(a.deathDate).getTime())
        break
      case 'drop':
      default:
        result.sort((a, b) => {
          const aLatest = Math.max(...a.dropDates.map(d => new Date(d).getTime()))
          const bLatest = Math.max(...b.dropDates.map(d => new Date(d).getTime()))
          return bLatest - aLatest
        })
    }

    return result
  }, [celebrities, sortBy, filterGenre])

  return (
    <section id="archive" className="relative py-24 rip-pattern">
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <span className="display-text text-[10px] tracking-[0.5em] text-bone/40 block mb-4">
            MEMORIAL ARCHIVE
          </span>
          <h2 className="gothic-text text-4xl md:text-5xl lg:text-6xl mb-4">
            The Departed
          </h2>
          <div className="cross-divider max-w-xs mx-auto">
            <span className="text-bone/30">✝</span>
          </div>
        </motion.div>

        {/* Controls */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="flex flex-wrap items-center justify-between gap-4 mb-8 pb-8 border-b border-bone/10"
        >
          {/* Filter Toggle */}
          <button
            onClick={() => setShowFilters(!showFilters)}
            className={`flex items-center gap-2 px-4 py-2 border transition-all duration-300 ${
              showFilters 
                ? 'border-bone bg-bone text-void' 
                : 'border-bone/20 hover:border-bone/40'
            }`}
          >
            <SlidersHorizontal className="w-4 h-4" />
            <span className="display-text text-[10px] tracking-[0.15em]">FILTERS</span>
          </button>

          {/* Results Count */}
          <span className="font-mono text-xs text-bone/50">
            {sortedAndFiltered.length} {sortedAndFiltered.length === 1 ? 'SOUL' : 'SOULS'}
          </span>

          {/* View Mode Toggle */}
          <div className="flex items-center gap-2">
            <button
              onClick={() => setViewMode('grid')}
              className={`p-2 border transition-all duration-300 ${
                viewMode === 'grid' 
                  ? 'border-bone bg-bone text-void' 
                  : 'border-bone/20 hover:border-bone/40'
              }`}
            >
              <Grid className="w-4 h-4" />
            </button>
            <button
              onClick={() => setViewMode('list')}
              className={`p-2 border transition-all duration-300 ${
                viewMode === 'list' 
                  ? 'border-bone bg-bone text-void' 
                  : 'border-bone/20 hover:border-bone/40'
              }`}
            >
              <List className="w-4 h-4" />
            </button>
          </div>
        </motion.div>

        {/* Filters Panel */}
        <motion.div
          initial={false}
          animate={{ 
            height: showFilters ? 'auto' : 0,
            opacity: showFilters ? 1 : 0,
            marginBottom: showFilters ? 32 : 0
          }}
          transition={{ duration: 0.3 }}
          className="overflow-hidden"
        >
          <div className="bg-ash/50 border border-bone/10 p-6">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {/* Sort By */}
              <div>
                <label className="display-text text-[10px] tracking-[0.2em] text-bone/60 block mb-3">
                  SORT BY
                </label>
                <div className="flex flex-wrap gap-2">
                  {[
                    { value: 'drop', label: 'Recent Drops' },
                    { value: 'alphabetical', label: 'A-Z' },
                    { value: 'death-date', label: 'Death Date' }
                  ].map(option => (
                    <button
                      key={option.value}
                      onClick={() => setSortBy(option.value as SortOption)}
                      className={`px-4 py-2 border text-xs font-mono tracking-wider transition-all duration-300 ${
                        sortBy === option.value
                          ? 'border-bone bg-bone text-void'
                          : 'border-bone/20 hover:border-bone/40'
                      }`}
                    >
                      {option.label}
                    </button>
                  ))}
                </div>
              </div>

              {/* Filter Genre */}
              <div>
                <label className="display-text text-[10px] tracking-[0.2em] text-bone/60 block mb-3">
                  CATEGORY
                </label>
                <div className="flex flex-wrap gap-2">
                  {genres.map(genre => (
                    <button
                      key={genre.value}
                      onClick={() => setFilterGenre(genre.value as FilterGenre)}
                      className={`px-4 py-2 border text-xs font-mono tracking-wider transition-all duration-300 ${
                        filterGenre === genre.value
                          ? 'border-bone bg-bone text-void'
                          : 'border-bone/20 hover:border-bone/40'
                      }`}
                    >
                      {genre.label}
                    </button>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </motion.div>

        {/* Grid */}
        <div className={
          viewMode === 'grid'
            ? 'grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6'
            : 'flex flex-col gap-4'
        }>
          {sortedAndFiltered.map((celebrity, index) => (
            viewMode === 'grid' ? (
              <CelebrityCard
                key={celebrity.id}
                celebrity={celebrity}
                index={index}
                onClick={() => onCelebrityClick(celebrity)}
              />
            ) : (
              <CelebrityListItem
                key={celebrity.id}
                celebrity={celebrity}
                index={index}
                onClick={() => onCelebrityClick(celebrity)}
              />
            )
          ))}
        </div>

        {/* Empty State */}
        {sortedAndFiltered.length === 0 && (
          <div className="text-center py-24">
            <p className="gothic-text text-2xl text-bone/50 mb-4">No souls found</p>
            <p className="font-body text-bone/30">Try adjusting your filters</p>
          </div>
        )}
      </div>
    </section>
  )
}

function CelebrityListItem({ 
  celebrity, 
  index, 
  onClick 
}: { 
  celebrity: Celebrity
  index: number
  onClick: () => void 
}) {
  const formatDate = (dateStr: string) => {
    const date = new Date(dateStr)
    return date.toLocaleDateString('en-US', { 
      month: 'short', 
      day: 'numeric', 
      year: 'numeric' 
    })
  }

  return (
    <motion.article
      initial={{ opacity: 0, x: -20 }}
      animate={{ opacity: 1, x: 0 }}
      transition={{ duration: 0.4, delay: index * 0.05 }}
      onClick={onClick}
      className="tombstone-card cursor-pointer flex items-center gap-6 p-4"
    >
      {/* Image */}
      <div className="relative w-16 h-16 flex-shrink-0 overflow-hidden">
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
        <h3 className="gothic-text text-xl mb-1 truncate">{celebrity.name}</h3>
        <p className="display-text text-[10px] tracking-[0.15em] text-bone/50">
          {celebrity.profession.toUpperCase()}
        </p>
      </div>

      {/* Death Date */}
      <div className="hidden sm:block text-right">
        <span className="font-mono text-xs text-bone/50">
          {formatDate(celebrity.deathDate)}
        </span>
      </div>

      {/* Products */}
      <div className="hidden md:flex items-center gap-2">
        <span className="death-badge">
          {celebrity.products.length} ITEMS
        </span>
      </div>
    </motion.article>
  )
}
