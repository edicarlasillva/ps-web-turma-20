export default {
  // Configura o Jest para testes no Node.js
  // usando Typescript.
  preset: "ts-jest",
  testEnvironment: "node",
  transform: {
    ".+\\.ts$": "ts-jest",
  },

  // Informa o diretório onde os testes estarão contidos.
  roots: ["<rootDir>/tests"],

  // Configurações de cobertura de código.
  collectCoverageFrom: ["<rootDir>/src/**/*.ts"],
  coverageDirectory: "coverage",
  coveragePathIgnorePatterns: ["\\\\node_modules\\\\"],

  // Colocar quando for usar o mock
  setupFilesAfterEnv: ["<rootDir>/tests/config/prisma.mock.ts"],
};