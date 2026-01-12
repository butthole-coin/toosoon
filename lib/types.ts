export interface Celebrity {
  id: string
  name: string
  fullName: string
  birthDate: string
  deathDate: string
  causeOfDeath: string
  profession: string
  knownFor: string
  shortBio: string
  longBio?: string
  imageUrl: string
  genres: string[]
  products: Product[]
  dropDates: string[]
  featured?: boolean
}

export interface Product {
  id: string
  name: string
  type: 'tee' | 'hoodie' | 'hat' | 'socks' | 'poster' | 'other'
  price: number
  imageUrl: string
  soldOut: boolean
  dropDate: string
  celebrityId: string
  url: string
}

export interface Drop {
  id: string
  name: string
  date: string
  celebrities: string[]
  products: Product[]
}

export type SortOption = 'drop' | 'alphabetical' | 'death-date'
export type FilterGenre = 'all' | 'musician' | 'actor' | 'athlete' | 'comedian' | 'influencer' | 'other'
