import { AuthService } from '../../src/services/auth.service'

describe('Testes de login no service de autenticação', () => {
  it('Deve retornar falha (401) quando o usuário não existe no banco de dados', async () => {
    // 1. sut
    const authService = new AuthService()

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