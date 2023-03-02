import React from 'react'
import { Navigate, useRoutes } from 'react-router-dom'
import DashboardLayout from '@/frameworks/layouts/dashboard'
import SimpleLayout from '@/frameworks/layouts/simple'
import UserPage from '@/frameworks/pages/UserPage'
import DashboardPage from '@/frameworks/pages/DashboardAppPage'
import LoginPage from '@/frameworks/pages/LoginPage'
import Page404 from '@/frameworks/pages/Page404'

export default function Router() {
  const routes = useRoutes([
    {
      path: '/dashboard',
      element: <DashboardLayout />,
      children: [
        { element: <Navigate to='/dashboard/home' />, index: true },
        { path: 'home', element: <DashboardPage /> },
        { path: 'users', element: <UserPage /> },
      ],
    },
    {
      path: 'login',
      element: <LoginPage />,
    },
    {
      element: <SimpleLayout />,
      children: [
        { element: <Navigate to='/dashboard/home' />, index: true },
        { path: '404', element: <Page404 /> },
        { path: '*', element: <Navigate to='/404' /> },
      ],
    },
    {
      path: '*',
      element: <Navigate to='/404' replace />,
    },
  ])

  return routes
}
