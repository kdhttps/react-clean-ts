import React, { useState } from 'react'
import { useNavigate } from 'react-router-dom'
import { Link, Stack, IconButton, InputAdornment, TextField, Checkbox, Button } from '@mui/material'
import Iconify from '../../../components/iconify'

export default function LoginForm() {
  const navigate = useNavigate()

  const handleClick = () => {
    navigate('/dashboard', { replace: true })
  }

  return (
    <>
      <Button fullWidth size='large' type='submit' variant='contained' onClick={handleClick}>
        Login
      </Button>
    </>
  )
}
