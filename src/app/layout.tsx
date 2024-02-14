import type { Metadata } from 'next'
import { Inter } from 'next/font/google'
import './globals.css'
import { Toaster } from 'sonner';
import { NextAuthProvider } from '@/providers/SessionProvider';

const inter = Inter({ subsets: ['latin'] })

export const metadata: Metadata = {
  title: 'Wealth Assests',
  description: 'Wealth Assests Mobile App',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <NextAuthProvider>
    <html lang="en">
      <body className={inter.className}>
        {children}
        <Toaster richColors position="top-center" closeButton />
      </body>
    </html>
    </NextAuthProvider>
  )
}
