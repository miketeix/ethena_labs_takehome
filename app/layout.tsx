import './globals.css'
import type { Metadata } from 'next'
import { Bai_Jamjuree } from 'next/font/google'

const jamjuree = Bai_Jamjuree({ 
  subsets: ['latin'],
  display: 'swap',
  weight: '400',
  variable: '--font-jamjuree'
})

 
export const metadata: Metadata = {
  title: 'Ethena Labs Takehome'
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body className={jamjuree.className}>{children}</body>
    </html>
  )
}
