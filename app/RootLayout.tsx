import './globals.css'
import type { Metadata } from 'next'
import { APP_CONFIG } from './config'
import ClientLayout from './ClientLayout'

export const metadata: Metadata = {
  title: APP_CONFIG.title,
  description: APP_CONFIG.description,
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body className="min-h-screen bg-gray-50">
        <ClientLayout>{children}</ClientLayout>
      </body>
    </html>
  )
}
