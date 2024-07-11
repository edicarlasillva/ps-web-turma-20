import express from 'express'
import cors from 'cors'

import usersRouter from './routes/users'
import notesRouter from './routes/notes'

const port = 3000

const app = express()

app.use(express.json())
app.use(cors())

app.use('/users', usersRouter)
app.use('/notes', notesRouter)

app.listen(port, () => {
  console.log(`Servidor rodando na porta ${port}`)
})