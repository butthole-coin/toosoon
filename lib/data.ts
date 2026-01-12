import { Celebrity, Product, Drop } from './types'

export const celebrities: Celebrity[] = [
  {
    id: 'young-dolph',
    name: 'Young Dolph',
    fullName: 'Adolph Robert Thornton Jr.',
    birthDate: '1985-07-27',
    deathDate: '2021-11-17',
    causeOfDeath: 'Gunshot wounds',
    profession: 'Rapper',
    knownFor: 'Founding Paper Route Empire',
    shortBio: 'Memphis legend. Paper Route Empire founder. Forever the King of Memphis.',
    longBio: 'Adolph Robert Thornton Jr., known professionally as Young Dolph, was an American rapper and record executive. Born in Chicago and raised in Memphis, he founded the independent record label Paper Route Empire. Known for his entrepreneurial spirit and loyalty to his Memphis roots, Dolph built a legacy that transcended music. His authentic approach to the game and dedication to independence made him a icon in hip-hop.',
    imageUrl: 'https://images.unsplash.com/photo-1493225457124-a3eb161ffa5f?w=800',
    genres: ['hip-hop', 'trap', 'southern rap'],
    featured: true,
    dropDates: ['2024-11-17', '2023-11-17'],
    products: [
      {
        id: 'dolph-tee-1',
        name: 'Dolph Memorial Tee',
        type: 'tee',
        price: 45,
        imageUrl: 'https://images.unsplash.com/photo-1521572163474-6864f9cf17ab?w=400',
        soldOut: false,
        dropDate: '2024-11-17',
        celebrityId: 'young-dolph',
        url: '/shop/dolph-memorial-tee'
      },
      {
        id: 'dolph-hoodie-1',
        name: 'PRE Forever Hoodie',
        type: 'hoodie',
        price: 85,
        imageUrl: 'https://images.unsplash.com/photo-1556821840-3a63f95609a7?w=400',
        soldOut: true,
        dropDate: '2023-11-17',
        celebrityId: 'young-dolph',
        url: '/shop/pre-forever-hoodie'
      }
    ]
  },
  {
    id: 'jerry-springer',
    name: 'Jerry Springer',
    fullName: 'Gerald Norman Springer',
    birthDate: '1944-02-13',
    deathDate: '2023-04-27',
    causeOfDeath: 'Pancreatic cancer',
    profession: 'Television Host',
    knownFor: 'The Jerry Springer Show',
    shortBio: 'Talk show icon. Political figure turned entertainer. Chaos curator.',
    longBio: 'Gerald Norman Springer was an English-born American television presenter, actor, and politician best known for hosting the tabloid talk show The Jerry Springer Show from 1991 to 2018. Before his television career, Springer served on the Cincinnati City Council and as Mayor of Cincinnati. His show became synonymous with provocative content and became a cultural phenomenon.',
    imageUrl: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=800',
    genres: ['television', 'entertainment', 'talk show'],
    featured: false,
    dropDates: ['2024-04-27'],
    products: [
      {
        id: 'springer-tee-1',
        name: 'Springer Tee',
        type: 'tee',
        price: 40,
        imageUrl: 'https://images.unsplash.com/photo-1521572163474-6864f9cf17ab?w=400',
        soldOut: false,
        dropDate: '2024-04-27',
        celebrityId: 'jerry-springer',
        url: '/shop/springer-tee'
      },
      {
        id: 'springer-hat-1',
        name: 'Jerry Springer Hat',
        type: 'hat',
        price: 35,
        imageUrl: 'https://images.unsplash.com/photo-1588850561407-ed78c282e89b?w=400',
        soldOut: true,
        dropDate: '2024-04-27',
        celebrityId: 'jerry-springer',
        url: '/shop/springer-hat'
      }
    ]
  },
  {
    id: 'dmx',
    name: 'DMX',
    fullName: 'Earl Simmons',
    birthDate: '1970-12-18',
    deathDate: '2021-04-09',
    causeOfDeath: 'Cocaine-induced heart attack',
    profession: 'Rapper, Actor',
    knownFor: 'Its Dark and Hell Is Hot',
    shortBio: 'Dark Man X. Ruff Ryders legend. Voice of the streets.',
    imageUrl: 'https://images.unsplash.com/photo-1493225457124-a3eb161ffa5f?w=800',
    genres: ['hip-hop', 'hardcore rap'],
    dropDates: ['2024-04-09'],
    products: [
      {
        id: 'dmx-tee-1',
        name: 'Dark Man X Tee',
        type: 'tee',
        price: 45,
        imageUrl: 'https://images.unsplash.com/photo-1521572163474-6864f9cf17ab?w=400',
        soldOut: false,
        dropDate: '2024-04-09',
        celebrityId: 'dmx',
        url: '/shop/dmx-tee'
      }
    ]
  },
  {
    id: 'kobe-bryant',
    name: 'Kobe Bryant',
    fullName: 'Kobe Bean Bryant',
    birthDate: '1978-08-23',
    deathDate: '2020-01-26',
    causeOfDeath: 'Helicopter crash',
    profession: 'Basketball Player',
    knownFor: 'LA Lakers, 5x NBA Champion',
    shortBio: 'Black Mamba. Five-time champion. Mamba mentality forever.',
    imageUrl: 'https://images.unsplash.com/photo-1546519638-68e109498ffc?w=800',
    genres: ['sports', 'basketball', 'nba'],
    dropDates: ['2024-01-26'],
    products: [
      {
        id: 'kobe-tee-1',
        name: 'Mamba Forever Tee',
        type: 'tee',
        price: 50,
        imageUrl: 'https://images.unsplash.com/photo-1521572163474-6864f9cf17ab?w=400',
        soldOut: true,
        dropDate: '2024-01-26',
        celebrityId: 'kobe-bryant',
        url: '/shop/mamba-tee'
      }
    ]
  },
  {
    id: 'mac-miller',
    name: 'Mac Miller',
    fullName: 'Malcolm James McCormick',
    birthDate: '1992-01-19',
    deathDate: '2018-09-07',
    causeOfDeath: 'Accidental overdose',
    profession: 'Rapper, Producer',
    knownFor: 'Swimming, Blue Slide Park',
    shortBio: 'Pittsburgh poet. Musical visionary. Most dope forever.',
    imageUrl: 'https://images.unsplash.com/photo-1493225457124-a3eb161ffa5f?w=800',
    genres: ['hip-hop', 'alternative rap', 'jazzy'],
    dropDates: ['2024-09-07'],
    products: [
      {
        id: 'mac-tee-1',
        name: 'Swimming Tee',
        type: 'tee',
        price: 45,
        imageUrl: 'https://images.unsplash.com/photo-1521572163474-6864f9cf17ab?w=400',
        soldOut: false,
        dropDate: '2024-09-07',
        celebrityId: 'mac-miller',
        url: '/shop/swimming-tee'
      }
    ]
  },
  {
    id: 'nipsey-hussle',
    name: 'Nipsey Hussle',
    fullName: 'Ermias Joseph Asghedom',
    birthDate: '1985-08-15',
    deathDate: '2019-03-31',
    causeOfDeath: 'Gunshot wounds',
    profession: 'Rapper, Entrepreneur',
    knownFor: 'Victory Lap, Marathon Clothing',
    shortBio: 'Marathon continues. Crenshaw legend. Community first.',
    imageUrl: 'https://images.unsplash.com/photo-1493225457124-a3eb161ffa5f?w=800',
    genres: ['hip-hop', 'west coast rap'],
    dropDates: ['2024-03-31'],
    products: [
      {
        id: 'nipsey-tee-1',
        name: 'Marathon Tee',
        type: 'tee',
        price: 45,
        imageUrl: 'https://images.unsplash.com/photo-1521572163474-6864f9cf17ab?w=400',
        soldOut: false,
        dropDate: '2024-03-31',
        celebrityId: 'nipsey-hussle',
        url: '/shop/marathon-tee'
      }
    ]
  },
  {
    id: 'juice-wrld',
    name: 'Juice WRLD',
    fullName: 'Jarad Anthony Higgins',
    birthDate: '1998-12-02',
    deathDate: '2019-12-08',
    causeOfDeath: 'Accidental overdose',
    profession: 'Rapper, Singer',
    knownFor: 'Lucid Dreams, Legends Never Die',
    shortBio: 'Emo rap pioneer. 999 forever. Legends never die.',
    imageUrl: 'https://images.unsplash.com/photo-1493225457124-a3eb161ffa5f?w=800',
    genres: ['hip-hop', 'emo rap', 'melodic rap'],
    dropDates: ['2024-12-08'],
    products: [
      {
        id: 'juice-tee-1',
        name: '999 Tee',
        type: 'tee',
        price: 45,
        imageUrl: 'https://images.unsplash.com/photo-1521572163474-6864f9cf17ab?w=400',
        soldOut: false,
        dropDate: '2024-12-08',
        celebrityId: 'juice-wrld',
        url: '/shop/999-tee'
      }
    ]
  },
  {
    id: 'betty-white',
    name: 'Betty White',
    fullName: 'Betty Marion White Ludden',
    birthDate: '1922-01-17',
    deathDate: '2021-12-31',
    causeOfDeath: 'Cerebrovascular accident',
    profession: 'Actress, Comedian',
    knownFor: 'The Golden Girls, The Mary Tyler Moore Show',
    shortBio: 'Americas sweetheart. Comedy legend. Golden Girl forever.',
    imageUrl: 'https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=800',
    genres: ['television', 'comedy', 'acting'],
    dropDates: ['2024-12-31'],
    products: [
      {
        id: 'betty-tee-1',
        name: 'Golden Girl Tee',
        type: 'tee',
        price: 40,
        imageUrl: 'https://images.unsplash.com/photo-1521572163474-6864f9cf17ab?w=400',
        soldOut: false,
        dropDate: '2024-12-31',
        celebrityId: 'betty-white',
        url: '/shop/golden-girl-tee'
      }
    ]
  }
]

export const recentDrops: Drop[] = [
  {
    id: 'drop-2024-11',
    name: 'November 2024 Drop',
    date: '2024-11-17',
    celebrities: ['young-dolph'],
    products: celebrities.find(c => c.id === 'young-dolph')?.products || []
  },
  {
    id: 'drop-2024-09',
    name: 'September 2024 Drop',
    date: '2024-09-07',
    celebrities: ['mac-miller'],
    products: celebrities.find(c => c.id === 'mac-miller')?.products || []
  }
]

export const genres = [
  { value: 'all', label: 'All' },
  { value: 'musician', label: 'Musicians' },
  { value: 'actor', label: 'Actors' },
  { value: 'athlete', label: 'Athletes' },
  { value: 'comedian', label: 'Comedians' },
  { value: 'television', label: 'Television' },
  { value: 'other', label: 'Other' }
]
