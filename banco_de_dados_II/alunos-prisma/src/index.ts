import express from "express"
import cors from 'cors'

import { StudentController } from "./controllers/student.controller"
import { AssessmentController } from "./controllers/assessment.controller"

const app = express()

app.use(express.json())
app.use(cors())

const studentController = new StudentController()
const assessmentController = new AssessmentController()

// Listar todos os alunos
app.get('/students', studentController.index)

// Cadastrar novo aluno
app.post('/students', studentController.store)

// Pesquisar um aluno por ID
app.get('/students/:id', studentController.show)

// Atualiza um aluno
app.put('/students/:id', studentController.update)

// Exclui um aluno
app.delete('/students/:id', studentController.delete)

// Listar avaliações
app.get('/students/:studentId/assessments', assessmentController.index)

// Criar avaliação
app.post('/students/:studentId/assessments', assessmentController.store)

// Listar uma avaliação
app.get('/students/:studentId/assessments/:id', assessmentController.show)

// Atualizar avaliação
app.put('/students/:studentId/assessments/:id', assessmentController.update)

// Excluir avaliação
app.delete('/students/:studentId/assessments/:id', assessmentController.delete)

app.listen(3000, () => {
    console.log("🚀 Server ready at: http://localhost:3000")
})