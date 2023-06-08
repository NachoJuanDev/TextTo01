import React from 'react'
import './globals.css'

export const metadata = {
  title: 'TextTo01',
  description: 'Draw text and convert it in 0s and 1s - Next App by @NachoJuanDev',
  viewport: {
    width: 'device-width',
    initialScale: 1,
    maximumScale: 1
  }
}

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="es">
      <body>{children}</body>
    </html>
  )
}
