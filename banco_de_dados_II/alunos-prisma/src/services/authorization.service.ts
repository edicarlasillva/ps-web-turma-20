import { PayloadToken, ResponseData, TypeStudent } from "../types";
import { AuthService } from "./auth.service";

const authService = new AuthService()

export class AuthorizationService {
  public validateAuthorization(token: string, permittedTypes: TypeStudent[]): ResponseData {
    const payload = authService.decodeToken(token) as PayloadToken

    if (!permittedTypes.includes(payload.type)) {
      return {
        success: false,
        code: 403,
        message: 'Aluno não possui permissão.'
      }
    }

    return {
      success: true,
      code: 200,
      message: 'Validação feita com sucesso.' 
    }
  }

}