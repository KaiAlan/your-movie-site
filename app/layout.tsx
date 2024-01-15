import './globals.css'
import { Inter } from 'next/font/google'
import { ReactQueryClientProvider } from './components/ReactQueryClientProvider'

const inter = Inter({ subsets: ['latin'] })

export const metadata = {
  title: 'Create Next App',
  description: 'Generated by create next app',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <ReactQueryClientProvider>
    <html lang="en">
      <body className={inter.className}>{children}</body>
    </html>
    </ReactQueryClientProvider>
  )
}
