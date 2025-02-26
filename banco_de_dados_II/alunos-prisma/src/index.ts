import express from "express"
import cors from 'cors'
import * as dotenv from 'dotenv'

import authRoutes from './routes/auth.routes'
import studentRoutes from './routes/students.routes'

import swagger from 'swagger-ui-express'
import swaggerJson from './docs/swagger.json'

const app = express()

dotenv.config()

app.use(express.json())
app.use(cors())

app.use(authRoutes)
app.use(studentRoutes)

app.use('/docs', swagger.serve)
app.use('/docs', swagger.setup(swaggerJson))

app.listen(process.env.PORT, () => {
    console.log("🚀 Server ready at: http://localhost:3000")
})