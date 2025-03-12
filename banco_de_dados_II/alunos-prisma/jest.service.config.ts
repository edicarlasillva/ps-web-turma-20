import baseConfig from './jest.config'

export default {
  ...baseConfig,
    // Colocar quando for usar o mock
    setupFilesAfterEnv: ["<rootDir>/tests/config/prisma.mock.ts"],
    testMatch: ["<rootDir>/tests/services/**/*.spec.ts"]
}