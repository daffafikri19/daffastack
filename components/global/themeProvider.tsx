"use client"
import React from 'react'
import { ThemeProvider } from '@material-tailwind/react'

const ThemeRegister = ({ children } : { children : React.ReactNode }) => {
  return (
    <ThemeProvider>
        {children}
    </ThemeProvider>
  )
}

export default ThemeRegister