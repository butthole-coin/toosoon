# Too Soon

**Memorial Merchandise for Legends Gone Too Soon**

A premium e-commerce platform celebrating the legacies of deceased celebrities through thoughtfully designed apparel and merchandise. Built with a dark, gothic aesthetic that's reverent but not somber.

**Live Demo:** [toosoon.fly.dev](https://toosoon.fly.dev) *(deployment pending)*

---

## Screenshots

### Hero Section
![Hero](./docs/screenshots/hero.png)
*Featured celebrity showcase with Three.js particle background*

### Celebrity Grid
![Grid](./docs/screenshots/grid.png)
*Filterable, sortable grid with hover effects*

### Product Drawer
![Drawer](./docs/screenshots/drawer.png)
*Bottom sheet with celebrity details and merchandise*

### Mobile Experience
![Mobile](./docs/screenshots/mobile.png)
*Responsive design optimized for touch*

---

## Tech Stack

| Category | Technology | Version |
|----------|------------|---------|
| **Framework** | Next.js (App Router) | 14.2.5 |
| **UI Library** | React | 18.3.1 |
| **3D Graphics** | Three.js | 0.166.1 |
| **3D React** | React Three Fiber | 8.16.8 |
| **3D Helpers** | Drei | 9.109.2 |
| **Animation** | Framer Motion | 11.3.8 |
| **Styling** | Tailwind CSS | 3.4.7 |
| **Icons** | Lucide React | 0.424.0 |
| **Language** | TypeScript | 5.5.4 |

### Typography
- **UnifrakturMaguntia** - Blackletter headings (gothic feel)
- **Cinzel** - Display text and buttons
- **Cormorant Garamond** - Body copy
- **JetBrains Mono** - Dates and badges

---

## Getting Started

### Prerequisites
- Node.js 18.17+ (LTS recommended)
- npm 9+ or yarn 1.22+

### Installation

```bash
# Clone the repository
git clone https://github.com/yourusername/toosoon.git
cd toosoon/toosoon

# Install dependencies
npm install

# Start development server
npm run dev
```

Open [http://localhost:3000](http://localhost:3000) to view the site.

### Environment Variables

Currently, no environment variables are required for basic functionality. Future integrations may require:

```bash
# .env.local (optional, for future features)
SHOPIFY_STORE_DOMAIN=your-store.myshopify.com
SHOPIFY_STOREFRONT_TOKEN=your-storefront-token
DATABASE_URL=postgres://...
```

---

## Project Structure

```
toosoon/
├── app/
│   ├── globals.css          # Global styles, gothic theme, animations
│   ├── layout.tsx           # Root layout with fonts + SEO metadata
│   ├── page.tsx             # Main page composing all sections
│   └── postcss.config.js    # PostCSS configuration
│
├── components/
│   ├── ParticleBackground.tsx   # Three.js floating particles + crosses
│   ├── Header.tsx               # Navigation with mobile menu
│   ├── Hero.tsx                 # Featured celebrity hero section
│   ├── CelebrityCard.tsx        # Individual grid card component
│   ├── CelebrityGrid.tsx        # Filterable/sortable grid layout
│   ├── CelebrityDrawer.tsx      # Bottom sheet with details + products
│   ├── SearchModal.tsx          # Full-screen search (Cmd+K)
│   └── Footer.tsx               # Newsletter + links
│
├── lib/
│   ├── types.ts             # TypeScript interfaces (Celebrity, Product, Drop)
│   └── data.ts              # Placeholder celebrity/product data
│
├── public/
│   └── images/
│       ├── logo.png         # Logo asset
│       └── logo-circle.png  # Circular logo variant
│
├── docs/
│   └── screenshots/         # README screenshots (create this folder)
│
├── fly.toml                 # Fly.io deployment configuration
├── Dockerfile               # Production container build
├── .dockerignore            # Docker build exclusions
├── next.config.js           # Next.js configuration
├── tailwind.config.js       # Tailwind theme extension
├── tsconfig.json            # TypeScript configuration
├── postcss.config.js        # PostCSS plugins
└── package.json             # Dependencies + scripts
```

---

## Design System

### Color Palette

| Token | Hex | Usage |
|-------|-----|-------|
| `void` | `#0a0a0a` | Primary background |
| `ash` | `#1a1a1a` | Card backgrounds, surfaces |
| `smoke` | `#2a2a2a` | Borders, secondary surfaces |
| `bone` | `#f5f5f0` | Primary text |
| `ivory` | `#e8e8e0` | Secondary text |
| `blood` | `#8b0000` | Death-related accents |
| `candle` | `#ffcc00` | Glow effects, highlights |

### Typography Scale

```css
/* Headings - UnifrakturMaguntia */
.gothic-text { font-family: 'UnifrakturMaguntia', serif; }

/* Display - Cinzel */
.display-text {
  font-family: 'Cinzel', serif;
  text-transform: uppercase;
  letter-spacing: 0.2em;
}

/* Body - Cormorant Garamond */
.font-body { font-family: 'Cormorant Garamond', serif; }

/* Mono - JetBrains Mono */
.font-mono { font-family: 'JetBrains Mono', monospace; }
```

### Component Patterns

- **Cards**: Dark backgrounds with subtle hover lift (`translateY(-4px)`)
- **Buttons**: Left-to-right fill animation on hover
- **Modals**: Scale + fade entrance animations
- **Drawer**: Bottom sheet with drag handle
- **Badges**: Rotated overlays for "SOLD OUT" indicators

### Custom CSS Classes

| Class | Description |
|-------|-------------|
| `.candle-glow` | Gold text shadow effect |
| `.death-badge` | Styled date badge |
| `.tombstone-card` | Card with hover effects |
| `.cross-divider` | Horizontal line with cross icon |
| `.grain-overlay` | Film grain texture overlay |
| `.btn-memorial` | Button with slide-fill animation |
| `.sold-out-badge` | Rotated sold-out ribbon |

---

## Features

### Three.js Background
- 2000 floating particles with slow rotation
- 8 animated floating crosses
- Fog effect for atmospheric depth
- Dynamically imported (SSR disabled for performance)

### Search
- Keyboard shortcut: `Cmd/Ctrl + K` to open
- `Escape` to close
- Searches: name, profession, genres, known for
- Maximum 8 results displayed

### Filtering & Sorting
- **Sort by**: Recent Drops, Alphabetical, Death Date
- **Filter by**: All, Musicians, Actors, Athletes, Comedians, Television, Other
- Real-time count updates

### Celebrity Drawer
- Bottom sheet with smooth animation
- Stats grid (birth, death, age, profession)
- Cause of death display
- Biography with expand/collapse
- Product grid with sold-out indicators

---

## Deployment

### Fly.io (Recommended)

#### Prerequisites
```bash
# Install Fly CLI
curl -L https://fly.io/install.sh | sh

# Login to Fly
flyctl auth login
```

#### Deploy

```bash
# First-time setup (creates app)
flyctl launch

# Deploy to production
npm run fly:deploy
# or
flyctl deploy --remote-only

# View logs
npm run fly:logs

# Check status
npm run fly:status

# Open in browser
flyctl open
```

#### Configuration

The `fly.toml` is pre-configured with:
- **Region**: `dfw` (Dallas) - change in fly.toml if needed
- **Memory**: 256MB (sufficient for Next.js)
- **CPU**: Shared (cost-effective)
- **Auto-stop**: Enabled (stops when idle)

### Alternative: Vercel

```bash
# Install Vercel CLI
npm i -g vercel

# Deploy
vercel --prod
```

---

## Scripts

```json
{
  "dev": "next dev",              // Development server (port 3000)
  "build": "next build",          // Production build
  "start": "next start",          // Production server
  "lint": "next lint",            // ESLint check
  "fly:deploy": "flyctl deploy --remote-only",
  "fly:logs": "flyctl logs",
  "fly:status": "flyctl status"
}
```

---

## Data Management

### Adding Celebrities

Edit `lib/data.ts` following the `Celebrity` interface:

```typescript
{
  id: 'unique-id',
  name: 'Stage Name',
  fullName: 'Full Legal Name',
  birthDate: '1990-01-15',
  deathDate: '2023-06-20',
  causeOfDeath: 'Cause of death',
  profession: 'Rapper',
  knownFor: 'Most notable achievement',
  shortBio: '1-2 sentence bio for cards',
  longBio: 'Extended biography for drawer...',
  imageUrl: 'https://...',  // Unsplash or CDN URL
  genres: ['musician', 'hip-hop'],
  products: [...],
  dropDates: ['2024-01-15'],
  featured: false  // Set true to show in hero
}
```

### Adding Products

```typescript
{
  id: 'product-id',
  name: 'Memorial Tee',
  type: 'tee',  // 'tee' | 'hoodie' | 'hat' | 'socks' | 'poster' | 'other'
  price: 45,
  imageUrl: 'https://...',
  soldOut: false,
  dropDate: '2024-01-15',
  celebrityId: 'celebrity-id',
  url: '/products/product-id'
}
```

---

## Roadmap

### Phase 1: Foundation (Current)
- [x] Gothic UI design system
- [x] Three.js particle background
- [x] Celebrity grid with filtering
- [x] Bottom sheet drawer
- [x] Search functionality
- [x] Responsive design

### Phase 2: E-Commerce Integration
- [ ] Shopify Storefront API integration
- [ ] Real product data from Shopify
- [ ] Cart functionality
- [ ] Checkout flow
- [ ] Inventory sync

### Phase 3: Content Automation
- [ ] DeadLebs.org scraper for celebrity data
- [ ] AI-powered obituary processing (Vercel AI SDK)
- [ ] Neon PostgreSQL database
- [ ] Drizzle ORM integration
- [ ] Admin dashboard

### Phase 4: User Features
- [ ] User authentication (NextAuth.js)
- [ ] Favorites/wishlist
- [ ] Email notifications for drops
- [ ] Order history
- [ ] User reviews

### Phase 5: Analytics & Growth
- [ ] Vercel Analytics / Plausible
- [ ] A/B testing for conversion
- [ ] SEO optimization
- [ ] Social sharing
- [ ] Affiliate program

---

## Contributing

1. Fork the repository
2. Create a feature branch: `git checkout -b feature/amazing-feature`
3. Commit changes: `git commit -m 'Add amazing feature'`
4. Push to branch: `git push origin feature/amazing-feature`
5. Open a Pull Request

### Code Style
- TypeScript strict mode enabled
- Tailwind CSS for styling (avoid custom CSS when possible)
- Framer Motion for animations
- Lucide for icons

---

## License

MIT License - See [LICENSE](LICENSE) for details.

---

**Rest in Peace**
