import React from 'react'
import { Helmet } from 'react-helmet-async'
import { styled } from '@mui/material/styles'
import { Container, Typography } from '@mui/material'
import useResponsive from '@/frameworks/hooks/useResponsive'
import Iconify from '@/frameworks/components/iconify/Iconify'
import { LoginForm } from '@/frameworks/sections/auth/login'
import { MiTheme } from '../theme/prototype'

const StyledRoot = styled('div')(({ theme }) => ({
  [theme.breakpoints.up('md')]: {
    display: 'flex',
  },
}))

const StyledSection = styled('div')(({ theme }: any) => ({
  width: '100%',
  maxWidth: 480,
  display: 'flex',
  flexDirection: 'column',
  justifyContent: 'center',
  boxShadow: theme.customShadows.card,
  backgroundColor: theme.palette.background.default,
}))

const StyledContent = styled('div')(({ theme }) => ({
  maxWidth: 480,
  margin: 'auto',
  minHeight: '100vh',
  display: 'flex',
  justifyContent: 'center',
  flexDirection: 'column',
  padding: theme.spacing(12, 0),
}))

export default function LoginPage() {
  const mdUp = useResponsive('up', 'md', 0)

  return (
    <>
      <Helmet>
        <title> Login | Minimal UI </title>
      </Helmet>

      <StyledRoot>
        <Iconify
          icon={'fa6-solid:shapes'}
          sx={{
            position: 'fixed',
            top: { xs: 16, sm: 24, md: 40 },
            left: { xs: 16, sm: 24, md: 40 },
          }}
        />

        {mdUp && (
          <StyledSection>
            <Typography variant='h3' sx={{ px: 5, mt: 10, mb: 5 }}>
              Hi, Welcome Back
            </Typography>
          </StyledSection>
        )}

        <Container maxWidth='sm'>
          <StyledContent>
            <Typography variant='h4' gutterBottom>
              Sign in to Minimal
            </Typography>
            <LoginForm />
          </StyledContent>
        </Container>
      </StyledRoot>
    </>
  )
}
