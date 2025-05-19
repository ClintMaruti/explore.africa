import React from 'react'
import './styles.css'
import Header from '@/app/components/Header'
import { getHeaderGlobal } from '@/utilities/fetchGlobals'

export const metadata = {
  description: 'A blank template using Payload in a Next.js app.',
  title: 'Payload Blank Template',
}

export default async function RootLayout(props: { children: React.ReactNode }) {
  const { children } = props
  const header = await getHeaderGlobal()

  return (
    <html lang="en">
      <body className="min-h-screen">
        <Header header={header} />
        <main className="pt-20">{children}</main>
      </body>
    </html>
  )
}
