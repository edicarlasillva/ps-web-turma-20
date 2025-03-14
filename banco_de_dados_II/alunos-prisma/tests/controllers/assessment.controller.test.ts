import supertest from 'supertest'

import { createApp } from '../../src/server'
import repository from '../../src/database/prisma.connection'

describe('Listar avaliações', () => {
  let sut: any

  beforeAll(() => {
    sut = createApp()
  })

  afterAll(async () => {
    await repository.assessment.deleteMany()
    await repository.student.deleteMany()
  })

  it('Deve retornar 401, quando o token não for informado. ', async () => {
    const result = await supertest(sut).get('/students/any_id/assessments')

    // validações
    expect(result.status).toBe(401)
    expect(result.body).toHaveProperty('message', 'Token de autenticação não informado.')
    expect(result.body).toHaveProperty('success', false)
  })

  it('Deve retornar 401, quando o token informado for inválido', async () => {
    const result = await supertest(sut)
    .get('/students/any_id/assessments')
    .set('Authorization', 'any_token')

    // validações
    expect(result.status).toBe(401)
    expect(result.body).toHaveProperty('message', 'Token de autenticação inválido')
    expect(result.body).toHaveProperty('success', false)
  })

  it('Deve retornar 200, quando listar as avaliações de um estudante', async () => {
    // criar um student
    await supertest(sut).post('/students').send({
      name: 'Sara Costa',
      email: 'sara@gmail.com',
      password: 'senha123',
      age: 25, 
      type: 'M'
    })

    // fazer login
    const loginResponse = await supertest(sut).post('/login').send({
      email: 'sara@gmail.com',
      password: 'senha123',
    })

    // pega o token, e id do estudante
    let studentId = loginResponse.body.data.id
    let token = loginResponse.body.data.token

    // requisição para listar avaliações
    const result = await supertest(sut)
      .get(`/students/${studentId}/assessments`)
      .set('Authorization', token)

    // validações
    expect(result.status).toBe(200)
    expect(result.body.success).toBe(true)
    // expect(result.body).toHaveProperty('success', true)
    expect(result.body.data).toBeDefined()
  })
})

describe('Cadastrar avaliação', () => {
  let sut: any

  beforeAll(() => {
    sut = createApp()
  })

  afterAll(async () => {
    await repository.assessment.deleteMany()
    await repository.student.deleteMany()
  })

  // 401 - token não fornecido
  it('Deve retornar 401, quando o token não for fornecido', async () => {
    const result = await supertest(sut)
      .post('/students/any_id/assessments')
      .send({
        discipline: 'Qualidade de Software',
        grade: 8
      })

      expect(result.status).toBe(401)
      expect(result.body).toHaveProperty('message', 'Token de autenticação não informado.')
      expect(result.body).toHaveProperty('success', false)
  })

  // 401 - token inválido
  it('Deve retornar 401, quando o token informado for inválido', async () => {
    const result = await supertest(sut)
      .post('/students/any_id/assessments')
      .set('Authorization', 'any_token')
      .send({
        discipline: 'Qualidade de Software',
        grade: 8
      })

      expect(result.status).toBe(401)
      expect(result.body).toHaveProperty('message', 'Token de autenticação inválido')
      expect(result.body).toHaveProperty('success', false)
  })

  // 201 - avaliação criada com sucesso
  it('Deve retornar 201, quando uma avaliação for criada', async () => {
    // Criar student
    await supertest(sut).post('/students').send({
      name: 'Jane Costa',
      email: 'jane@gmail.com',
      password: 'senha123',
      age: 30, 
      type: 'M'
    })

    // Fazer login
    const loginResponse = await supertest(sut).post('/login').send({
      email: 'jane@gmail.com',
      password: 'senha123',
    })

    // Pegar token e id do aluno
    let studentId = loginResponse.body.data.id
    let token = loginResponse.body.data.token

    // Cadastrar avaliação
    const result = await supertest(sut)
      .post(`/students/${studentId}/assessments`)
      .set('Authorization', token)
      .send({
        discipline: 'Qualidade de Software',
        grade: 8
      })

    // Validações
    expect(result.status).toBe(201)
    expect(result.body.success).toBe(true)
    // expect(result.body).toHaveProperty('success', true)
    expect(result.body.data).toBeDefined()
  })

  it('Deve retornar 500, quando ocorrer um erro de servidor', async () => {
    // Criar student
    await supertest(sut).post('/students').send({
      name: 'Juliana Costa',
      email: 'juliana@gmail.com',
      password: 'senha123',
      age: 30, 
      type: 'M'
    })

    // Fazer login
    const loginResponse = await supertest(sut).post('/login').send({
      email: 'juliana@gmail.com',
      password: 'senha123',
    })

    // Pegar token e id do aluno
    let studentId = loginResponse.body.data.id
    let token = loginResponse.body.data.token

    // Erro do sistema simulado
    jest.spyOn(repository.assessment, 'create').mockImplementationOnce(() => {
      throw new Error('Erro interno inesperado')
    })

    // Cadastrar avaliação
    const result = await supertest(sut)
      .post(`/students/${studentId}/assessments`)
      .set('Authorization', token)
      .send({
        discipline: 'Qualidade de Software',
        grade: 8
      })

    // Validações
    expect(result.status).toBe(500)
    expect(result.body.success).toBe(false)
    expect(result.body).toHaveProperty('message', 'Erro ao criar avaliação.')
  })
})

