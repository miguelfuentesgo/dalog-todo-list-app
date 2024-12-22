import type { Metadata } from 'next'
import './globals.css'
import { Navbar } from 'app/components/Navbar'
import { Footer } from 'app/components/Footer'
import { TasksProvider } from "app/context/TasksContext";

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
        <TasksProvider>
        <Navbar />
        {children}
        <Footer />
        </TasksProvider>
      </body>
    </html>
  )
}