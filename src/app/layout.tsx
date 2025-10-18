import type { Metadata } from 'next'
import '@fontsource/playfair-display'
import '@fontsource/inter'
import './globals.css'
import ConditionalNavbar from '@/components/layout/ConditionalNavbar'
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
        <ConditionalNavbar />
        {children}
      </body>
    </html>
  )
}