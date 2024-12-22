import type { Metadata } from 'next'
import './globals.css'
import { Navbar } from 'app/components/Navbar'
import { Footer } from 'app/components/Footer'
export const metadata: Metadata = {
  title: 'Dalog Todo List',
  description: 'Technical test',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body>
        <Navbar />
        {children}
        <Footer />
      </body>
    </html>
  )
}