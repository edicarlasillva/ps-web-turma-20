import supertest from 'supertest'

import { createApp } from '../../src/server'
import { TypeStudent } from '../../src/types'

import repository from '../../src/database/prisma.connection'

describe('Testes integrados para criação de um aluno via api.', () => {
  afterAll(async () => {
    await repository.assessment.deleteMany()
    await repository.student.deleteMany()
  })
  
  it('Deve retornar 400 quando o campo nome não seja informado.', async () => {
    // 1 - sut
    const sut = createApp()

    // 2 - Fazer a requisição com dados
    const result = await supertest(sut).post('/students').send({
      email: 'juan@gmail.com',
      password: 'senha123',
      age: 14,
      type: TypeStudent.Matriculado
    })

    expect(result).toBeDefined()
    expect(result).toHaveProperty('ok', false)
    expect(result.status).toEqual(400)

    expect(result.body).toBeDefined()
    expect(result.body.message).toBe('Preencha todos os campos obrigatórios.')
  })

  it('Deve retornar 201 quando um aluno for criado com sucesso', async () => {
    const sut = createApp()

    const result = await supertest(sut).post('/students').send({
      name: 'Lúcia',
      email: 'lucia@gmail.com',
      age: 62,
      password: 'senha123',
      type: TypeStudent.TechHelper
    })

    expect(result).toBeDefined()
    expect(result).toHaveProperty('ok', true)
    expect(result.status).toEqual(201)

    expect(result.body).toBeDefined()
    expect(result.body.message).toBe('Aluno criado com sucesso.')
  })
})