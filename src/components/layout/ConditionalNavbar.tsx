'use client'

import { usePathname } from 'next/navigation'
import Navbar from './Navbar'

export default function ConditionalNavbar() {
  const pathname = usePathname()

  // Hide navbar on project pages
  const isProjectPage = pathname?.startsWith('/projects/')

  if (isProjectPage) {
    return null
  }

  return <Navbar />
}
