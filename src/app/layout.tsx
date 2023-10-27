import type { Metadata } from 'next'
import { Inter as FontSans } from 'next/font/google'

import { cn } from '@/lib/utils'
import SiteFooter from '@/components/site-footer'
import SiteHeader from '@/components/site-header'

import '@/styles/globals.css'

export const fontSans = FontSans({
  subsets: ['latin'],
  variable: '--font-sans'
})

export const metadata: Metadata = {
  title: 'gerenyitamas.dev',
  description: "I'm a front-end developer, specialized in development of web applications using React, Next.js & more"
}

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html className='dark' lang='en'>
      <body className={cn('min-h-screen bg-background font-sans antialiased', fontSans.variable)}>
        <SiteHeader />
        <main className='relative flex h-full min-h-[calc(100vh-48px)] flex-grow flex-col pt-[48px] sm:min-h-[calc(100vh-100px)] sm:pt-[80px]'>
          {children}
        </main>
        <SiteFooter />
      </body>
    </html>
  )
}
