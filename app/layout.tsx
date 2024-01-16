import './globals.css'
import { Inter } from 'next/font/google'
import { ReactQueryClientProvider } from './components/ReactQueryClientProvider'

const inter = Inter({ subsets: ['latin'] })

export const metadata = {
  title: 'Your Movie Site',
  description: 'An expansive open-source movie site that offers a vast collection of films, enabling users to discover, rate, and discuss their favorite movies in one centralized platform.',
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
