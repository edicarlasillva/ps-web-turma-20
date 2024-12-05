import express, { Request, Response } from "express"
import cors from 'cors'

import { PrismaClient } from '@prisma/client'

const app = express()

app.use(express.json())
app.use(cors())

const repository = new PrismaClient()

// Listar todos os alunos
app.get('/students', async (request: Request, response: Response) => {
  try {
    // processamento
    const students = await repository.student.findMany({
      select: {
        id: true,
        name: true,
        email: true,
        age: true
      }
    })

    // saída
    return response.status(200).json({
      success: true,
      code: response.statusCode,
      message: 'Alunos listados com sucesso.',
      data: students
    })
  } catch (error) {
    return response.status(500).json({
      success: false,
      code: response.statusCode,
      message: 'Erro ao listar alunos.'
    })
  }
})

// Cadastrar novo aluno
app.post('/students', async (request: Request, response: Response) => {
  try {
    // entrada
    const { name, email, password, age } = request.body

    // processamento
    if (!name || !email || !password) {
      return response.status(400).json({
        success: false,
        code: response.statusCode,
        message: 'Preencha todos os campos obrigatórios.'
      })
    }

    const createdStudent = await repository.student.create({
      data: {
        name,
        email,
        password,
        age
      },
      select: {
        id: true,
        name: true, 
        email: true,
        password: true,
        age: true
      }
    })

    // saída
    return response.status(201).json({
      success: true,
      code: response.statusCode,
      message: 'Aluno cadastrado com sucesso.',
      data: createdStudent
    })
  } catch (error) {
    return response.status(500).json({
      success: false,
      code: response.statusCode,
      message: 'Erro ao cadastrar aluno.'
    })
  }
})

// Pesquisar um aluno por ID
app.get('/students/:id', async (request: Request, response: Response) => {
  try {
    // entrada
    const { id } = request.params

    //processamento
    const student = await repository.student.findUnique({
      where: { id },
      select: {
        id: true,
        name: true, 
        email: true,
        password: true,
        age: true
      }
    })

    if (!student) {
      return response.status(404).json({
        success: false,
        code: response.statusCode,
        message: 'Aluno não encontrado.'
      })
    }

    return response.status(200).json({
      success: true,
      code: response.statusCode,
      message: 'Aluno encontrado com sucesso.',
      data: student
    })
  } catch (error) {
    return response.status(500).json({
      success: false,
      code: response.statusCode,
      message: 'Erro ao encontrar aluno.'
    })
  }
})

// Atualiza um aluno
app.put('/students/:id', async (request: Request, response: Response) => {
  try {
    // entrada
    const { id } = request.params
    const { name, email, password, age } = request.body

    // processamento
    const updatedStudent = await repository.student.update({
      where: { 
        id 
      },
      data: {
        name,
        email,
        password,
        age
      },
      select: {
        name: true,
        email: true,
        password: true,
        age: true
      }
    })

    return response.status(200).json({
      success: true,
      code: response.statusCode,
      message: 'Aluno atualizado com sucesso.',
      data: updatedStudent
    })
  } catch (error) {
    return response.status(500).json({
      success: false,
      code: response.statusCode,
      message: 'Erro ao atualizar aluno.'
    })
  }
})

// Exclui um aluno
app.delete('/students/:id', async (request: Request, response: Response) => {
  try {
    // entrada
    const { id } = request.params

    // processamento
    const student = await repository.student.delete({
      where: {
        id
      },
      select: {
        id: true,
        name: true,
        email: true,
        age: true
      }
    })

    return response.status(200).json({
      success: true,
      code: response.statusCode,
      message: 'Aluno removido com sucesso.',
      data: student
    })

    // saída
  } catch (error) {
    return response.status(500).json({
      success: false,
      code: response.statusCode,
      message: `Aluno removido com sucesso. ${error}`
    })
  }
})

app.listen(3000, () => {
    console.log("🚀 Server ready at: http://localhost:3000")
})