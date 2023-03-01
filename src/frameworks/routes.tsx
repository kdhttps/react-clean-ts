import React from 'react'
import { Navigate, useRoutes } from 'react-router-dom'
import DashboardLayout from './layouts/dashboard'
import SimpleLayout from './layouts/simple'
import UserPage from './pages/UserPage'
import DashboardPage from './pages/DashboardAppPage'
import LoginPage from './pages/LoginPage'
import Page404 from './pages/Page404'

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
