import { NextFunction, Request, response, Response } from "express";
import { AuthorizationService } from "../services/authorization.service";
import { TypeStudent } from "../types";
import { serverError } from "../util/response.helpers";
import { request } from "http";

const authorizationService = new AuthorizationService();

export async function validateCreateAssessment(
  request: Request,
  response: Response,
  next: NextFunction
) {
  try {
    const { authorization } = request.headers;

    const result = authorizationService.validateAuthorization(authorization!, [
      TypeStudent.Matriculado,
      TypeStudent.TechHelper,
    ]);

    if (!result.success) {
      return response.status(result.code).json(result);
    }

    next();
  } catch (error: any) {
    return serverError(response, error);
  }
}

export async function validateEditAndDeleteAssessment(
  request: Request,
  response: Response,
  next: NextFunction
) {
  try {
    const { authorization } = request.headers;

    const result = authorizationService.validateAuthorization(authorization!, [
      TypeStudent.TechHelper,
    ]);

    if (!result.success) {
      return response.status(result.code).json(result);
    }

    next();
  } catch (error: any) {
    return serverError(response, error);
  }
}

export function validadeAuthorizationPermissions(
  permittedTypes: TypeStudent[]
) {
  return (request: Request, response: Response, next: NextFunction) => {
    try {
      const { authorization } = request.headers;

      const result = authorizationService.validateAuthorization(
        authorization!,
        permittedTypes
      );

      if (!result.success) {
        return response.status(result.code).json(result);
      }

      next();
    } catch (error: any) {
      return serverError(response, error);
    }
  };
}
