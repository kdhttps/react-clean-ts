import React from 'react'
import { Outlet } from 'react-router-dom'
import { styled } from '@mui/material/styles'
import Iconify from '@/frameworks/components/iconify/Iconify'

const StyledHeader = styled('header')(({ theme }) => ({
  top: 0,
  left: 0,
  lineHeight: 0,
  width: '100%',
  position: 'absolute',
  padding: theme.spacing(3, 3, 0),
  [theme.breakpoints.up('sm')]: {
    padding: theme.spacing(5, 5, 0),
  },
}))

export default function SimpleLayout() {
  return (
    <>
      <StyledHeader>
        <Iconify icon={'fa6-solid:shapes'} color='#1877F2' width={32} />
      </StyledHeader>

      <Outlet />
    </>
  )
}
