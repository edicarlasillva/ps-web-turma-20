import express, { Request, Response } from 'express'
import cors from 'cors'

import { PrismaClient } from '@prisma/client'

const app = express()

app.use(express.json())
app.use(cors())

const repository = new PrismaClient()

// Criar um novo usuário
// POST /users
app.post('/users', async (request: Request, response: Response) => {
  try {
    // entrada
    const { name, lastName, bio, isActive } = request.body
    // processamento
    if (!name || !lastName) {
      return response.status(400).json({
        success: false,
        code: response.statusCode,
        message: 'Preencha os campos obrigatórios'
      })
    }

    const createdUser = await repository.user.create({
      data: {
        name,
        lastName,
        bio,
        isActive
      },
      select: {
        id: true,
        name: true,
        lastName: true
      }
    })
    // saída
    return response.status(201).json({
      success: true,
      code: response.statusCode,
      message: 'Usuário criado com sucesso',
      data: createdUser
    })
  } catch (error) {
    return response.status(500).json({
      success: false,
      code: response.statusCode,
      message: 'Erro ao criar usuário'
    })
  }
})

// Listar todos os usuários
// GET /users
app.get('/users', async (request: Request, response: Response) => {
  try {
    // processamento
    const users = await repository.user.findMany({
      select: {
        id: true,
        name: true,
        lastName: true
      }, 
      orderBy: {
        name: 'desc'
      }
    })

    // saída
    return response.status(200).json({
      success: true,
      code: response.statusCode,
      message: 'Usuários listados com sucesso',
      data: users
    })
  } catch (error) {
    return response.status(500).json({
      success: false,
      code: response.statusCode,
      message: 'Erro ao listar usuários'
    })
  }
})

// Listar usuário por ID
// GET /users/id
app.get('/users/:id', async (request: Request, response: Response) => {
  try {
    // entrada
    const { id } = request.params

    // processamento
    const user = await repository.user.findUnique({
      where: { id },
      select: {
        id: true,
        name: true,
        lastName: true
      }
    })

    if (!user) {
      return response.status(404).json({
        success: false,
        code: response.statusCode,
        message: 'Usuário não encontrado'
      })
    }

    return response.status(200).json({
      success: true,
      code: response.statusCode,
      message: 'Usuário encontrado com sucesso',
      data: user
    })
  } catch (error) {
    return response.status(500).json({
      success: false,
      code: response.statusCode,
      message: 'Erro ao buscar usuário'
    })
  }
})

app.listen(3000, () => {
  console.log('Server running.')
})