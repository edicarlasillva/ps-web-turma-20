import { createBrowserRouter } from 'react-router-dom'

import { HomePage } from '../pages/HomePage'
import { DefaultLayout } from '../layouts/DefaultLayout'
import { AboutPage } from '../pages/AboutPage'

export const router = createBrowserRouter([
  {
    path: '/',
    element: <DefaultLayout />, // aplica o layout padrão
    children: [
      {
        path: '/',
        element: <HomePage />,
      },
      {
        path: '/about',
        element: <AboutPage />,
      },
    ],
  },
])
