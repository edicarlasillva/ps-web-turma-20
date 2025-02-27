import jwt from 'jsonwebtoken';

import repository from "../database/prisma.connection";
import { AuthDTO } from "../dtos/auth.dto";
import { PayloadToken, ResponseData } from "../types";

export class AuthService {
  /**
   * Realiza uma autenticação na API através de login com e-mail e senha
   * ```ts
   *    const authService = new AuthService()
   *    const result = await authService.login({
   *      email: 'example@gmail.com',
   *      password: 'senha123'
   *    })
   * ```
   * @author Carla Silva
   * @param data DTO contendo email e password
   * @async por conta da chamada ao banco de dados
   * @returns um objeto contendo informações de erro/sucesso e os dados do estudante
   */
  public async login(data: AuthDTO): Promise<ResponseData | null> {
    const student = await repository.student.findFirst({
      where: {
        email: data.email,
        password: data.password,
      },
      select: {
        id: true,
        name: true,
        email: true,
        age: true,
        type: true,
        token: true,
      },
    });

    if (!student) {
      return {
        success: false,
        code: 401,
        message: 'Credenciais inválidas.'
      }
    }

    const studentPayloadToken = {
      id: student.id,
      type: student.type
    }

    const token = this.generateToken(studentPayloadToken)

    return {
      success: true,
      code: 200,
      message: 'Login realizado com sucesso.',
      data: {
        ...student,
        token
      }
    }
  }

  /**
   * Valida o token
   * @param token
   * @param studentId
   * @returns os dados do estudante
   */
  public async validateLogin(token: string, studentId: string): Promise<ResponseData> {
    const payload = this.validateToken(token) as PayloadToken

    if (!payload || studentId !== payload.id) {
      return {
        success: false,
        message: 'Token de autenticação inválido.',
        code: 401 // unauthorized
      }
    }

    return {
      success: true,
      message: 'Validação de login realizada com sucesso.',
      code: 200 
    }
  }

  public generateToken(payload: any) {
    const token = jwt.sign(payload, process.env.JWT_SECRET!, {
      expiresIn: '1d'
    })

    return token
  }

  public validateToken(token: string) {
    try {
      const payload = jwt.verify(token, process.env.JWT_SECRET!)

      return payload
    } catch (error: any) {
      return null
    }
  }

  public decodeToken(token: string) {
    return jwt.decode(token)
  }

  /**
   * Método para decodificar um token JWT
   * @deprecated Este método está obsoleto
   */
  public decodeTokenOld(token: string) {
    return jwt.decode(token)
  }

  public async validateLoginOlderAge(studentId: string): Promise<ResponseData> {
    const student = await repository.student.findUnique({
      where: {
        id: studentId
      }
    })

    if (!student) {
      return {
        success: false,
        code: 404,
        message: 'Estudante não encontrado.'
      }
    }

    if (!student.age || student.age < 18) {
      return {
        success: false,
        code: 403, // forbidden -> proibido
        message: 'Estudante não possui mais de 18 anos.'
      }
    }

     return {
      success: true,
      code: 200,
      message: 'Validação feita com sucesso.'
     }
  }
}
