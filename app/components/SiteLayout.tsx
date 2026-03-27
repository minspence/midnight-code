'use client'

import { usePathname } from 'next/navigation'
import Navbar from './navbar'
import Footer from './footer'

export default function SiteLayout({ children }: { children: React.ReactNode }) {
  const pathname = usePathname()
  const isStudio = pathname?.startsWith('/studio')

  if (isStudio) return <>{children}</>

  return (
    <>
      <Navbar />
      {children}
      <Footer />
    </>
  )
}
