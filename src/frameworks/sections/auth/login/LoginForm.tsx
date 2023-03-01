import React from 'react'
import { useNavigate } from 'react-router-dom'
import { Button } from '@mui/material'

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
