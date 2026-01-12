import type { Metadata } from 'next'
import './globals.css'

export const metadata: Metadata = {
  title: 'Too Soon | Memorial Merch',
  description: 'Premium memorial merchandise honoring those who left us too soon.',
  keywords: ['memorial', 'merchandise', 'tribute', 'celebrity', 'memorabilia'],
  openGraph: {
    title: 'Too Soon | Memorial Merch',
    description: 'Premium memorial merchandise honoring those who left us too soon.',
    type: 'website',
    locale: 'en_US',
    siteName: 'Too Soon',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Too Soon | Memorial Merch',
    description: 'Premium memorial merchandise honoring those who left us too soon.',
  },
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body className="bg-void text-bone antialiased">
        <div className="grain-overlay" />
        {children}
      </body>
    </html>
  )
}
