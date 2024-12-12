import { Request, Response } from "express";

import { repository } from "../database/prisma.connection";

export class AssessmentController {
  // index -> lista todas as avaliações
  public async index(request: Request, response: Response) {
    try {
      const { studentId } = request.params

      const student = await repository.student.findUnique({
        where: { id: studentId },
        include: {
          assessments: {
            select: {
              id: true,
              discipline: true,
              grade: true
            }
          }
        }
      })

      if (!student) {
        return response.status(404).json({
          success: false,
          code: response.statusCode,
          message: 'Aluno não encontrado'
        })
      }

      return response.status(200).json({
        success: true,
        code: response.statusCode,
        message: 'Avaliações listadas com sucesso.',
        data: student.assessments
      })

    } catch (error) {
      return response.status(500).json({
        success: false,
        code: response.statusCode,
        message: 'Erro ao listar avaliações. Tente novamente.'
      })
    }
  }

  // store -> cria uma avaliação
  public async store(request: Request, response: Response) {
    try {
      const { studentId } = request.params
      const { discipline, grade } = request.body

      if (!discipline || !grade) {
        return response.status(400).json({
          success: false,
          code: response.statusCode,
          message: 'Os campos "discipline" e "grade" são obrigatórios.'
        })
      }

      const student = await repository.student.findUnique({
        where: { id: studentId },
      })

      if (!student) {
        return response.status(404).json({
          success: false,
          code: response.statusCode,
          message: 'Estudante não encontrado.'
        })
      }

      const createdAssessment = await repository.assessment.create({
        data: {
          discipline,
          grade, 
          studentId
        },
        select: {
          id: true,
          discipline: true,
          grade: true
        }
      })

      return response.status(201).json({
        success: true,
        code: response.statusCode,
        message: 'Avaliação criada com sucesso.',
        data: createdAssessment
      })
    } catch (error) {
      return response.status(500).json({
        success: false,
        code: response.statusCode,
        message: 'Erro ao criar avaliação.'
      })
    }
  }

  // show -> detalhes de uma única avaliação
  public async show(request: Request, response: Response) {
    try {
      const { studentId, id } = request.params

      const assessment = await repository.assessment.findFirst({
        where: {
          id,
          studentId
        },
        select: {
          id: true,
          discipline: true,
          grade: true
        }
      })

      if (!assessment) {
        return response.status(404).json({
          success: false,
          code: response.statusCode,
          message: 'Avaliação não encontrada.'
        })
      }

      return response.status(200).json({
        success: true,
        code: response.statusCode,
        message: 'Avaliação encontrada com sucesso.',
        data: assessment
      })

    } catch (error) {
      return response.status(500).json({
        success: false,
        code: response.statusCode,
        message: 'Erro ao buscar avaliação.'
      })
    }
  }
}