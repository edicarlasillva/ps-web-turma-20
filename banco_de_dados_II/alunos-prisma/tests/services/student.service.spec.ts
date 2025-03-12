import { prismaMock } from "../config/prisma.mock";

import { StudentService } from "../../src/services/student.service";
import { TypeStudent } from "../../src/types";

describe("Testes unitários do StudentService", () => {
  // beforeEach -> antes de cada teste dentro do describe
  // beforeAll -> apenas uma vez no inicio dos testes
  // afterEach -> depois de cada teste dentro do describe
  // afterAll -> apenas uma vez após os testes
  let studentService: StudentService
  beforeEach(() => {
    studentService = new StudentService()
    jest.clearAllMocks()
    jest.resetAllMocks()
  })
  it("getAllStudents deve retornar (200) quando listar alunos.", async () => {
    // 1 - SUT
    // const studentService = new StudentService();

    // comportamento simulado
    prismaMock.student.findMany.mockResolvedValue([
      {
        id: "1",
        name: "Alice",
        email: "alice@gmailcom",
        age: 25,
        password: "senha123",
        token: "eyJ",
        type: "M",
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        id: "2",
        name: "Bob",
        email: "bob@gmailcom",
        age: 35,
        password: "senha123",
        token: "eyJ",
        type: "M",
        createdAt: new Date(),
        updatedAt: new Date(),
      },
    ]);

    // 2 - Chamar o método
    const result = await studentService.getAllStudents();

    // 3 - Validações (Asserts)
    expect(result).toBeDefined();
    expect(result).toHaveProperty("success", true);
    expect(result).toHaveProperty("message", "Alunos listados com sucesso.");
    expect(result).toHaveProperty("code", 200);
    expect(result).toHaveProperty("data");
    expect(result.data).toHaveLength(2);
  });

  it("createStudent deve retornar sucesso (201) quando o aluno for criado", async () => {
    // 1 - SUT
    // const studentService = new StudentService();

    // comportamento simulado
    prismaMock.student.create.mockResolvedValue({
      id: "3",
      name: "Carlos",
      age: 61,
      password: "senha123",
      email: "carlos@gmail.com",
      token: null,
      type: "M",
      createdAt: new Date(),
      updatedAt: new Date(),
    });

    // 2 - Chamar o método
    const result = await studentService.createStudent({
      name: "Carlos",
      email: "carlos@gmail.com",
      password: "senha123",
      age: 61,
      type: TypeStudent.Matriculado,
    });

    // 3 - Validações (Asserts)
    expect(result).toBeDefined();
    expect(result).toHaveProperty("success", true);
    expect(result).toHaveProperty("message", "Aluno criado com sucesso.");
    expect(result).toHaveProperty("code", 201);
    expect(result).toHaveProperty("data");
    expect(result.data).toHaveProperty("id", "3");
  });

  it("getStudentById deve retornar sucesso (200) quando o aluno for encontrado", async () => {
    // 1 - SUT
    // const studentService = new StudentService();

    // comportamento simulado
    prismaMock.student.findUnique.mockResolvedValue({
      id: "1",
      name: "Alice",
      email: "alice@gmailcom",
      age: 25,
      password: "senha123",
      token: "eyJ",
      type: "M",
      createdAt: new Date(),
      updatedAt: new Date(),
    });

    // 2 - Chamar o método
    const result = await studentService.getStudentById("1");

    // 3 - Validações (Asserts)
    expect(result).toBeDefined();
    expect(result).toHaveProperty("success", true);
    expect(result).toHaveProperty("message", "Aluno encontado com sucesso.");
    expect(result).toHaveProperty("code", 200);
    expect(result).toHaveProperty("data");
  });

  it('updatedStudent deve retornar sucesso (200) quando o aluno for atualizado.', async () => {
    // 1 - SUT
    // const studentService = new StudentService();

    // comportamento simulado
    prismaMock.student.findUnique.mockResolvedValue({
      id: "3",
      name: "Carlos",
      age: 61,
      password: "senha123",
      email: "carlos@gmail.com",
      token: null,
      type: "M",
      createdAt: new Date(),
      updatedAt: new Date(),
    })

    prismaMock.student.update.mockResolvedValue({
      id: "3",
      name: "Joana",
      age: 61,
      password: "senha123",
      email: "joana@gmail.com",
      token: null,
      type: "M",
      createdAt: new Date(),
      updatedAt: new Date(),
    })

    const result = await studentService.updateStudent({
      id: '3',
      name: 'Joana',
      password: "senha123",
      age: 61,
    })

    // 3 - Validações (Asserts)
    expect(result).toBeDefined();
    expect(result).toHaveProperty("success", true);
    expect(result).toHaveProperty("message", "Aluno atualizado com sucesso.");
    expect(result).toHaveProperty("code", 200);
    expect(result).toHaveProperty("data");
  })

  it('deletedStudent deve retornar sucesso (200) quando o aluno for removido', async () => {
    // 1 - SUT
    // const studentService = new StudentService();

    // comportamento simulado
    prismaMock.student.findUnique.mockResolvedValue({
      id: "3",
      name: "Carlos",
      age: 61,
      password: "senha123",
      email: "carlos@gmail.com",
      token: null,
      type: "M",
      createdAt: new Date(),
      updatedAt: new Date(),
    })

    const result = await studentService.deleteStudent('3')

     // 3 - Validações (Asserts)
     expect(result).toBeDefined();
     expect(result).toHaveProperty("success", true);
     expect(result).toHaveProperty("message", "Aluno removido com sucesso.");
     expect(result).toHaveProperty("code", 200);
     expect(result).toHaveProperty("data");
  })
});
