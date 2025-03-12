import express from "express"
import cors from 'cors'

import authRoutes from './routes/auth.routes'
import studentRoutes from './routes/students.routes'

export function createApp() {
  const app = express()

  app.use(express.json())
  app.use(cors())

  app.use(authRoutes)
  app.use(studentRoutes)

  return app
}