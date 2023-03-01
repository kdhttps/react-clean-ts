import PropTypes from 'prop-types'
import React, { useEffect } from 'react'
import { useLocation } from 'react-router-dom'
import { styled, alpha } from '@mui/material/styles'
import { Box, Link, Button, Drawer, Typography, Avatar, Stack } from '@mui/material'
import useResponsive from '../../../hooks/useResponsive'
import Scrollbar from '../../../components/scrollbar'
import NavSection from '../../../components/nav-section'
import navConfig from './config'
import Iconify from '@/frameworks/components/iconify/Iconify'

const NAV_WIDTH = 280

const StyledAccount = styled('div')(({ theme }) => ({
  display: 'flex',
  alignItems: 'center',
  padding: theme.spacing(2, 2.5),
  borderRadius: Number(theme.shape.borderRadius) * 1.5,
  backgroundColor: alpha(theme.palette.grey[500], 0.12),
}))

Nav.propTypes = {
  openNav: PropTypes.bool,
  onCloseNav: PropTypes.func,
}

export default function Nav({ openNav, onCloseNav }) {
  const { pathname } = useLocation()

  const isDesktop = useResponsive('up', 'lg')

  useEffect(() => {
    if (openNav) {
      onCloseNav()
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [pathname])

  const renderContent = (
    <Scrollbar
      sx={{
        height: 1,
        '& .simplebar-content': { height: 1, display: 'flex', flexDirection: 'column' },
      }}
    >
      <Box sx={{ px: 2.5, py: 3, display: 'inline-flex' }}>
        <Iconify icon={'fa6-solid:shapes'} /> &nbsp; Code
      </Box>

      <NavSection data={navConfig} />

      <Box sx={{ flexGrow: 1 }} />

      <Box sx={{ px: 2.5, pb: 3, mt: 10 }}>
        <Stack
          alignItems='center'
          spacing={3}
          sx={{ pt: 5, borderRadius: 2, position: 'relative' }}
        >
          <Box sx={{ textAlign: 'center' }}>
            <Typography gutterBottom variant='h6'>
              MUI
            </Typography>
          </Box>

          <Button
            href='https://github.com/minimal-ui-kit/material-kit-react'
            target='_blank'
            variant='contained'
          >
            Theme Details
          </Button>
        </Stack>
      </Box>
    </Scrollbar>
  )

  return (
    <Box
      component='nav'
      sx={{
        flexShrink: { lg: 0 },
        width: { lg: NAV_WIDTH },
      }}
    >
      {isDesktop ? (
        <Drawer
          open={openNav}
          onClose={onCloseNav}
          variant='permanent'
          PaperProps={{
            sx: {
              width: NAV_WIDTH,
              bgcolor: 'background.default',
              borderRightStyle: 'dashed',
            },
          }}
        >
          {renderContent}
        </Drawer>
      ) : (
        <Drawer
          open={openNav}
          onClose={onCloseNav}
          ModalProps={{
            keepMounted: true,
          }}
          PaperProps={{
            sx: { width: NAV_WIDTH },
          }}
        >
          {renderContent}
        </Drawer>
      )}
    </Box>
  )
}
