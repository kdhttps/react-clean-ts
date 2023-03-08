import React from 'react'
import PropTypes from 'prop-types'
import { styled } from '@mui/material/styles'
import { Box, Stack, AppBar, Toolbar, IconButton } from '@mui/material'
import AccountPopover from './AccountPopover'
import { bgBlur } from '@/frameworks/utils'
import Iconify from '@/frameworks/components/iconify/Iconify'

const NAV_WIDTH = 280

const HEADER_MOBILE = 64

const HEADER_DESKTOP = 92

const StyledRoot = styled(AppBar, { shouldForwardProp: (prop) => prop !== 'open' })<{
  open?: boolean
}>(({ theme, open }): any => {
  return {
    ...bgBlur({ color: theme.palette.background.default }),
    boxShadow: 'none',
    [theme.breakpoints.up('lg')]: {
      width: `calc(100% - ${NAV_WIDTH + 1}px)`,
      transition: theme.transitions.create('width', {
        easing: theme.transitions.easing.sharp,
        duration: theme.transitions.duration.leavingScreen,
      }),
      ...(!open && {
        transition: theme.transitions.create('width', {
          easing: theme.transitions.easing.easeOut,
          duration: theme.transitions.duration.enteringScreen,
        }),
        width: 'calc(100%)',
      }),
    },
  }
})

const StyledToolbar = styled(Toolbar)(({ theme }) => ({
  minHeight: HEADER_MOBILE,
  [theme.breakpoints.up('lg')]: {
    minHeight: HEADER_DESKTOP,
    padding: theme.spacing(0, 5),
  },
}))

Header.propTypes = {
  openNav: PropTypes.bool,
  onOpenNav: PropTypes.func,
}

export default function Header({ openNav, onOpenNav }: any) {
  return (
    <StyledRoot open={openNav}>
      <StyledToolbar>
        <IconButton
          onClick={onOpenNav}
          sx={{
            mr: 1,
            color: 'text.primary',
          }}
        >
          <Iconify icon='eva:menu-2-fill' />
        </IconButton>

        <Box sx={{ flexGrow: 1 }} />

        <Stack
          direction='row'
          alignItems='center'
          spacing={{
            xs: 0.5,
            sm: 1,
          }}
        >
          <AccountPopover />
        </Stack>
      </StyledToolbar>
    </StyledRoot>
  )
}
