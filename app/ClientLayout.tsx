'use client';

import { AuthProvider } from './context/AuthContext'
import { Suspense } from 'react'
import Loading from './loading'

export default function ClientLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <AuthProvider>
      <Suspense fallback={<Loading />}>
        {children}
      </Suspense>
    </AuthProvider>
  )
}
