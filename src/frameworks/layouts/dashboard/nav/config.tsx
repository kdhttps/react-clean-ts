import React from 'react'
import Iconify from '@/frameworks/components/iconify/Iconify'

const icon = (name: string) => <Iconify icon={name} />

const navConfig = [
  {
    title: 'dashboard',
    path: '/dashboard/home',
    icon: icon('clarity:dashboard-solid'),
  },
  {
    title: 'users',
    path: '/dashboard/users',
    icon: icon('heroicons:users-20-solid'),
  },
  {
    title: 'about',
    path: '/about',
    icon: icon('material-symbols:info'),
  },
]

export default navConfig
