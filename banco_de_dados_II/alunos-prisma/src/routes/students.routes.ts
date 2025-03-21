import express from "express";

import { StudentController } from "../controllers/student.controller";
import { validateToken } from "../middleware/auth.middleware";
import { AssessmentController } from "../controllers/assessment.controller";
import {
  validadeAuthorizationPermissions
} from "../middleware/authorization.middleware";
import { TypeStudent } from "../types";

const studentController = new StudentController();
const assessmentController = new AssessmentController();

const router = express.Router();

// Listar todos os alunos
router.get("/students", studentController.index);

// Cadastrar novo aluno
router.post("/students", studentController.store);

// Pesquisar um aluno por ID
router.get("/students/:id", studentController.show);

// Atualiza um aluno
router.put("/students/:id", studentController.update);

// Exclui um aluno
router.delete("/students/:id", studentController.delete);

// Listar avaliações
router.get(
  "/students/:studentId/assessments",
  validateToken,
  assessmentController.index
);

// Criar avaliação
// router.post('/students/:studentId/assessments', validateToken, validateCreateAssessment, assessmentController.store)

router.post(
  "/students/:studentId/assessments",
  validateToken,
  validadeAuthorizationPermissions([
    TypeStudent.Matriculado,
    TypeStudent.TechHelper,
  ]),
  assessmentController.store
);

// Listar uma avaliação
router.get(
  "/students/:studentId/assessments/:id",
  validateToken,
  assessmentController.show
);

// Atualizar avaliação
router.put(
  "/students/:studentId/assessments/:id",
  validateToken,
  validadeAuthorizationPermissions([TypeStudent.TechHelper]),
  assessmentController.update
);

// Excluir avaliação
router.delete(
  "/students/:studentId/assessments/:id",
  validateToken,
  validadeAuthorizationPermissions([TypeStudent.TechHelper]),
  assessmentController.delete
);

export default router;
