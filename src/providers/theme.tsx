'use client'

import { ThemeProvider as NextThemesProvider } from 'next-themes'

const ThemeProvider = ({
  children,
  ...props
  // eslint-disable-next-line no-undef
}: React.ComponentProps<typeof NextThemesProvider>) => {
  return <NextThemesProvider {...props}>{children}</NextThemesProvider>
}

export { ThemeProvider }
