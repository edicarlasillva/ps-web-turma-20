import express, { request } from 'express'
import { v4 as uuidv4 } from 'uuid'

import { users } from './users'

const router = express.Router()

const notes = []

router.post('/', (request, response) => {
  const { title, description, userId } = request.body

  const user = users.find(user => user.id === userId)

  if (!user) {
    return response.status(404).json({
      message: 'Usuário não encontrado.'
    })
  }

  const newNote = {
    id: uuidv4(),
    title,
    description, 
    userId
  }

  notes.push(newNote)

  response.status(201).json({
    message: 'Recado criado com sucesso.',
    newNote
  })
})

router.put('/:id', (request, response) => {
  // Entrada
  const { id } = request.params
  const { title, description } = request.body

  // Processamento
  const note = notes.find(note => note.id === id)

  if (!note) {
    return response.status(404).json({
      message: 'Reecado não encontrado.'
    })
  }

  note.title = title
  note.description = description

  // Saída
  response.status(200).json({
    message: 'Recado atualizado com sucesso.',
    note
  })
})

router.delete('/:id', (request, response) => {
  const { id } =  request.params

  const noteIndex = notes.findIndex(note => note.id === id)

  if (noteIndex === -1) {
    return response.status(404). json({
      message: 'Recado não encontado.'
    })
  }

  const [ deletedNote ] = notes.splice(noteIndex, 1)

  response.status(200).json({
    message: 'Recado excluído com sucesso.',
    deletedNote
  })
})

// router.get('/:userId', (request, response) => {
//   const { userId } = request.params

//   const user = users.find(user => user.id === userId)

//   if (!user) {
//     return response.status(404).json({
//       message: 'Usuário não encontado.'
//     })
//   }

//   const userNotes = notes.filter(note => note.userId === userId)

//   response.status(200).json({
//     message: 'Notas listadas com sucesso',
//     userNotes 
//   })
// })

// Rota para listar todos os recados de um usuário específico com suporte a paginação
router.get('/:userId', (request, response) => {
  const { userId } = request.params

  const { page, perPage } = request.query

  const currentPage = parseInt(page) || 1 // valor padrão é 1
  const itemsPerPage = parseInt(perPage) || 10

  const user = users.find(user => user.id === userId)

  if (!user) {
    return response.status(404).json({
      message: 'Usuário não encontrado.'
    })
  }

  const userNotes = notes.filter(note => note.userId === userId)

  // currentPage = 1
  // itemsPerPage = 10

  // startIndex (1 - 1) * 10 = 0
  const startIndex = (currentPage - 1) * itemsPerPage
  //endIndex = startIndex + itemsPerPage (elemento 9)
  const endIndex = startIndex + itemsPerPage

  const paginatedNotes = userNotes.slice(startIndex, endIndex)

  const totalItems = userNotes.length // quantidade de notas no array

  const totalPages = Math.ceil(totalItems / itemsPerPage)

  response.status(200).json({
    userNotes: paginatedNotes,
    totalPages,
    currentPage
  })
})

// Rota para listar recado por id
router.get("/details/:id", (request, response) => {
  const { id } = request.params

  const note = notes.find(note => note.id === id)

  if (!note) {
    return response.status(404).json({
      message: "Recado não encontrado."
    })
  }

  response.status(200).json(note)
})

export default router