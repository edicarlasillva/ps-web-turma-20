import express from 'express'
import cors from 'cors'
import bcrypt from 'bcrypt'
import { v4 as uuidv4 } from 'uuid';

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
  {id: 4, name: 'Paulo', available: true}
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
    // id: users.length + 1,
    id: uuidv4(),
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
  const user = users.find(user => user.id === id)

  if (!user) {
    return response.status(404).json({message: 'Usuário não encontrado.'})
  }

  user.name = updatedUser
  user.available = available

  // const updates = request.body
  // Object.keys(updates).forEach(key => {
  //   if (key in user) {
  //     user[key] = updates[key]
  //   }
  // })

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

app.delete('/users/:id', (request, response) => {
  const { id } = request.params

  const userIndex = users.findIndex(user => user.id === id)

  if (userIndex === -1) {
    return response.status(404).json({message: 'Usuário não encontrado.'})
  }

  // const deletedUser = users.splice(userIndex, 1)[0]
  const [ deletedUser ] = users.splice(userIndex, 1)

  response.status(200).json({message: 'Usuário removido com sucesso', user: deletedUser})
})

// ADMIN
const adminUsers = []
app.post('/signup', async (request, response) => {
  try {
    const { username, password } = request.body

    const hashedPassword = await bcrypt.hash(password, 10)

    // Se já existe admim cadastrado com esse username
    const existingUser = adminUsers.find(user => user.username === username)

    if (existingUser) {
      return response.status(400).json({message: 'Usuário já existe.'})
    }

    const newUser = {
      id: uuidv4(),
      username,
      password: hashedPassword
    }

    adminUsers.push(newUser)

    response.status(201).json({message: 'Admin cadastrado com sucesso.', user: newUser})
  } catch {
    response.status(500).json({message: 'Erro ao cadastrar admin.'})
  }
})

app.post('/login', async (request, response) => {
  try {
    const { username, password } = request.body

    const user = adminUsers.find(user => user.username === username)

    if (!user) {
      return response.status(404).json({message: 'Admin não encontrado.'})
    }

    const isMatch = await bcrypt.compare(password, user.password)

    if (!isMatch) {
      return response.status(400).json({message: 'Senha incorreta.'})
    }

    response.status(200).json({message: 'Login de admim realizado com sucesso.'})
  } catch {
    response.status(500).json({message: 'Erro ao fazer login.'})
  }
})

app.listen(3000, () => {
  console.log('Servidor rodando na porta 3000.')
})