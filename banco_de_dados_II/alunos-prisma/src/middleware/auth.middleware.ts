import { NextFunction, Request, Response } from "express";

import { repository } from "../database/prisma.connection";

export async function validateToken(request: Request, response: Response, next: NextFunction) {
  try {
    const { authorization } = request.headers
    const { studentId } = request.params

    if (!authorization) {
      return response.status(401).json({
        success: false,
        code: response.statusCode,
        message: 'Token de autenticação não informado.'
      })
    }

    const student = await repository.student.findUnique({
      where: { id: studentId }
    })

    if (!student || (student.token !== authorization)) {
      return response.status(401).json({
        success: false,
        code: response.statusCode,
        message: 'Token de autenticação inválido.'
      })
    }

    next()
  } catch (error: any) {
    return response.status(500).json({
      success: false,
      code: response.statusCode,
      message: `Autenticação falhou: ${error.toString()}`
    })
  }
}