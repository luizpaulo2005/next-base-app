import './globals.css'

import type { Metadata } from 'next'

import { Toaster } from '@/components/ui/sonner'
import { ProgressProvider } from '@/providers/progress'
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
    <html lang="pt-BR" suppressHydrationWarning>
      <body>
        <ThemeProvider attribute="class" defaultTheme="system" enableSystem>
          <ProgressProvider>
            <Toaster richColors />
            {children}
          </ProgressProvider>
        </ThemeProvider>
      </body>
    </html>
  )
}
