'use client'

import * as React from 'react'
import { ThemeProvider } from 'next-themes'

type ProviderProps = {
  children?: React.ReactNode
}

const DarkModeProvider = ({ children }: ProviderProps) => (
  <ThemeProvider attribute='class' defaultTheme='light'>
    {children}
  </ThemeProvider>
)

export default DarkModeProvider
