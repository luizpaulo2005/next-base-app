import './globals.css'

import type { Metadata } from 'next'

import { ThemeProvider } from '@/providers/theme'

export const metadata: Metadata = {
  title: 'Base Next.js App',
}

export default function RootLayout({
  children,
}: Readonly<{
  // eslint-disable-next-line no-undef
  children: React.ReactNode
}>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body>
        <ThemeProvider attribute="class" defaultTheme="system" enableSystem>
          {children}
        </ThemeProvider>
      </body>
    </html>
  )
}
