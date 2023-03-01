import React, { useEffect, useState } from 'react'
import { BrowserRouter } from 'react-router-dom'
import { HelmetProvider } from 'react-helmet-async'

import { makeGetUsers } from './factories'
import { TUser } from '@/domain/entities/TUsers'
import ThemeProvider from './theme'
import ScrollToTop from './components/scroll-to-top'
import { StyledChart } from './components/chart'
import Router from './routes'

function App() {
  const [users, setUsers] = useState<TUser[]>([])

  useEffect(() => {
    // getUsers()
  }, [])

  const getUsers = async () => {
    try {
      const users: TUser[] = (await makeGetUsers().execute('123')) as TUser[]
      setUsers(users)
    } catch (e) {
      console.error(e)
    }
  }

  return (
    <HelmetProvider>
      <BrowserRouter>
        <ThemeProvider>
          <ScrollToTop />
          <StyledChart />
          <Router />
        </ThemeProvider>
      </BrowserRouter>
    </HelmetProvider>
  )
}

export default App
