import React from 'react'
import { Helmet } from 'react-helmet-async'
import { Grid, Container, Typography, Card, CardContent, Box, Paper } from '@mui/material'
import Iconify from '@/frameworks/components/iconify/Iconify'
import palette from '@/frameworks/theme/palette'

export default function DashboardAppPage() {
  return (
    <>
      <Helmet>
        <title> Dashboard </title>
      </Helmet>

      <Container maxWidth='xl'>
        <Typography variant='h4' sx={{ mb: 5, color: palette.primary.main }}>
          Hi, Welcome back
        </Typography>

        <Grid container spacing={3}>
          <Grid item xs={12} md={6} lg={4}>
            <Card>
              <CardContent>
                <Box
                  sx={{
                    display: 'grid',
                    gap: 2,
                    gridTemplateColumns: 'repeat(2, 1fr)',
                  }}
                >
                  <Paper variant='outlined' sx={{ py: 2.5, textAlign: 'center' }}>
                    <Box sx={{ mb: 0.5 }}>
                      <Iconify icon={'eva:facebook-fill'} color={'#1877F2'} width={32} />
                    </Box>

                    <Typography variant='h6'>16,122</Typography>

                    <Typography variant='body2' sx={{ color: 'text.secondary' }}></Typography>
                  </Paper>
                </Box>
              </CardContent>
            </Card>
          </Grid>
        </Grid>
      </Container>
    </>
  )
}
