import React, { useState } from 'react'
import { Outlet } from 'react-router-dom'
import { styled } from '@mui/material/styles'
import Header from './header'
import Nav from './nav'
import useResponsive from '@/frameworks/hooks/useResponsive'

const APP_BAR_MOBILE = 64
const APP_BAR_DESKTOP = 92
const drawerWidth = 280

const StyledRoot = styled('div')({
  display: 'flex',
  minHeight: '100%',
  overflow: 'hidden',
})

const Main = styled('main', { shouldForwardProp: (prop) => prop !== 'open' })<{
  open?: boolean
}>(({ theme, open }) => ({
  flexGrow: 1,
  overflow: 'auto',
  minHeight: '100%',
  paddingTop: APP_BAR_MOBILE + 24,
  paddingBottom: theme.spacing(10),
  [theme.breakpoints.up('lg')]: {
    paddingTop: APP_BAR_DESKTOP + 24,
    paddingLeft: theme.spacing(2),
    paddingRight: theme.spacing(2),
    marginLeft: `-${drawerWidth}px`,
    transition: theme.transitions.create('margin', {
      easing: theme.transitions.easing.sharp,
      duration: theme.transitions.duration.leavingScreen,
    }),
    ...(open && {
      transition: theme.transitions.create('margin', {
        easing: theme.transitions.easing.easeOut,
        duration: theme.transitions.duration.enteringScreen,
      }),
      marginLeft: 0,
    }),
  },
}))

export default function DashboardLayout() {
  const [open, setOpen] = useState(true)
  const isDesktop = useResponsive('up', 'lg', 0)

  return (
    <StyledRoot>
      <Header openNav={open} onOpenNav={() => setOpen(!open)} />

      <Nav openNav={open} onCloseNav={() => (isDesktop ? undefined : setOpen(false))} />

      <Main open={open}>
        <Outlet />
      </Main>
    </StyledRoot>
  )
}
