import express from 'express'
import cors from 'cors'

const app = express()
app.use(express.json())
app.use(cors())

app.get('/', (request, response) => {
  response.send('Hello, Express!')
})

const users = [
  {id: 1, name: 'Alice', available: true },
  {id: 2, name: 'Bob', available: false},
  {id: 3, name: 'Carol', available: true},
  {id: 4, name: 'Paulo', available: true},
]

app.get('/users', (request, response) => {
  if (users.length === 0) {
    return response.status(404).json({message: 'Nenhum usuário encontrado'})
  }

  response.json(users)
})

app.post('/users', (request, response) => {
  // const name = request.body.name
  // const available = request.body.available

  const { name, available } = request.body

  if (!name) {
    return response.status(400).json({message: 'Nome de usuário é obrigatório.'})
  }

  const newUser = {
    id: users.length + 1,
    name,
    // se available for null ou undefined, vai receber true
    available: available ?? true
  }

  users.push(newUser)

  response.status(201).json({message: 'Usuário adicionado com sucesso', user: newUser})
})

app.put('/users/:id', (request, response) => {
  // const id = request.params.id
  const { id } = request.params

  const {name: updatedUser, available} = request.body

  // Encontrar o usuário que será modificado
  const user = users.find(user => user.id === parseInt(id))

  if (!user) {
    return response.status(404).json({message: 'Usuário não encontrado.'})
  }

  // user.name = updatedUser
  // user.available = available

  const updates = request.body
  Object.keys(updates).forEach(key => {
    if (key in user) {
      user[key] = updates[key]
    }
  })

  response.status(200).json({message: 'Usuário atualizado com sucesso', user})
})

app.get('/users/filtered', (request, response) => {
  const { filtro } = request.query
  
  let filteredUsers = users

  if (filtro === 'ativo') {
    filteredUsers = filteredUsers.filter(user => user.available === true)
  } else if (filtro === 'inativo') {
    filteredUsers = filteredUsers.filter(user => user.available === false)
  }

  response.status(200).json(filteredUsers)
})

app.listen(3000, () => {
  console.log('Servidor rodando na porta 3000.')
})