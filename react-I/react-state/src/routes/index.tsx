import { createBrowserRouter } from 'react-router-dom'

import { Counter } from '../components/Counter'
import { MyInput } from '../components/MyInput'
import { Checkbox } from '../components/Checkbox'
import { CardContainer } from '../components/CardContainer'
import { Modal } from '../components/Modal'

export const router = createBrowserRouter([
  {
    path: '/',
    element: <Counter />,
  },
  {
    path: '/input',
    element: <MyInput />,
  },
  {
    path: '/checkbox',
    element: <Checkbox />,
  },
  {
    path: '/card',
    element: <CardContainer />,
  },
  {
    path: '/modal',
    element: <Modal />,
  },
])
