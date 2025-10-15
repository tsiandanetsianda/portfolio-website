import type { Metadata } from 'next'
import '@fontsource/playfair-display'
import '@fontsource/inter'
import './globals.css'
import Navbar from '@/components/layout/Navbar'
import GradientMesh from '@/components/GradientMesh'

export const metadata: Metadata = {
  title: 'Tsianda Portfolio',
  description: 'Personal portfolio showcasing my work and skills',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <head>
        <meta charSet="utf-8" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
      </head>
      <body className="bg-background text-text-primary font-['Inter']">
        <GradientMesh />
        <Navbar />
        {children}
      </body>
    </html>
  )
}