import type { Metadata } from 'next'
import { Roboto } from 'next/font/google'
import './globals.css'
import { Toaster } from 'sonner';
import { NextAuthProvider } from '@/providers/SessionProvider';

const roboto = Roboto({ subsets: ['latin'],
display: 'swap',
weight: "400", })

export const metadata: Metadata = {
  title: 'Wealth Assets',
  description: 'Wealth Assets Mobile App',
  manifest: '/manifest.webmanifest',
  themeColor: '#0d47a2'
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <NextAuthProvider>
    <html lang="en">
      <body className={roboto.className}>
        {children}
        <Toaster richColors position="top-center" closeButton />
      </body>
    </html>
    </NextAuthProvider>
  )
}
