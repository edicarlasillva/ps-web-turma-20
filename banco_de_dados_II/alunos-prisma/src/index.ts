import * as dotenv from 'dotenv'

import swagger from 'swagger-ui-express'
import swaggerJson from './docs/swagger.json'

import { createApp } from './server'

dotenv.config()

const app = createApp()

app.use('/docs', swagger.serve)
app.use('/docs', swagger.setup(swaggerJson))

app.listen(process.env.PORT, () => {
    console.log("🚀 Server ready at: http://localhost:3000")
})