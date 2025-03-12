import { AuthService } from '../../src/services/auth.service'
import { prismaMock } from './../config/prisma.mock'

import * as dotenv from 'dotenv'
dotenv.config()

describe('Testes de login no service de autenticação', () => {
  it('Deve retornar falha (401) quando o usuário não existe no banco de dados', async () => {
    // 1. sut
    const authService = new AuthService()

    // Comportamento simulado
    // Simular que não existe o aluno no banco de dados
    // Quando chamar login, o findFirst deve retornar null
    prismaMock.student.findFirst.mockResolvedValue(null)

    // 2. Chamar o método
    // para falhar, passar um usuário que não está no banco.
    const result = await authService.login({
      email: 'juan@gmail.com',
      password: 'senha123'
    })

    // 3. Validações (asserts)
    expect(result).toBeDefined()

    expect(result).toHaveProperty('success')
    expect(result?.success).toBe(false)

    expect(result).toHaveProperty('code', 401)
    expect(result).toHaveProperty('message', 'Credenciais inválidas.')

    expect(result).not.toHaveProperty('data')
    expect(result?.data).toBeUndefined() // undefined, porque não tem data

    expect(result).not.toBeNull()
  })

  it('Deve retornar (200) quando o login for feito com sucesso ', async () => {
    // sut
    const authService = new AuthService()

    // Comportamento simulado
    // Simular que existe um aluno no banco de dados (findFirst)
    prismaMock.student.findFirst.mockResolvedValue({
      id: '4e78f8ad-c200-4ce3-8d45-28cd0aa930e4',
      age: 35,
      email: 'carla@gmail.com',
      name: 'Carla Silva',
      password: 'senha123',
      token: 'eyJqualquer',
      type: 'M',
      createdAt: new Date(),
      updatedAt: new Date()
    })

    // chama o método
    const result = await authService.login({
      email: 'carla@gmail.com',
      password: 'senha123'
    })

    // validações
    expect(result).toBeDefined()

    expect(result).toHaveProperty('success', true)
    expect(result).toHaveProperty('code', 200)
    expect(result).toHaveProperty('message', 'Login realizado com sucesso.')
    expect(result).toHaveProperty('data')

    expect(result?.data).toHaveProperty('id')
    expect(result?.data).toHaveProperty('email')
    expect(result?.data).toHaveProperty('name')
    expect(result?.data).toHaveProperty('age')
    expect(result?.data).toHaveProperty('token')

    expect(result?.data.token).toContain('eyJ')
  })
})