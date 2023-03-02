import React from 'react'
import { BrowserRouter } from 'react-router-dom'
import { HelmetProvider } from 'react-helmet-async'
import ThemeProvider from '@/frameworks/theme'
import ScrollToTop from '@/frameworks/components/scroll-to-top'
import Router from '@/frameworks/routes'

function App() {
  return (
    <HelmetProvider>
      <BrowserRouter>
        <ThemeProvider>
          <ScrollToTop />
          <Router />
        </ThemeProvider>
      </BrowserRouter>
    </HelmetProvider>
  )
}

export default App
