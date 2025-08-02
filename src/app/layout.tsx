import type { Metadata } from 'next';
import Script from 'next/script';
import { Roboto } from 'next/font/google'
import './globals.css'
import { Toaster } from 'sonner';
import { NextAuthProvider } from '@/providers/SessionProvider';

const roboto = Roboto({
  subsets: ['latin'],
  display: 'swap',
  weight: "400",
})

export const metadata: Metadata = {
  title: 'Wealth Assets',
  description: 'Wealth Assets Mobile App',
  manifest: '/manifest.webmanifest',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <NextAuthProvider>
      <html lang="en">
        <body className={`${roboto.className} text-xs md:text-sm xl:text-base`} >
          {children}
          <Script src="https://code.jivosite.com/widget/VxcXFnXdTB" strategy="lazyOnload" />
          <Toaster richColors position="top-center" closeButton className='capitalize' />
        </body>
      </html>
    </NextAuthProvider>
  )
}
