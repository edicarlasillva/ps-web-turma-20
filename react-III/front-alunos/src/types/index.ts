export interface ILogin {
  email: string
  password: string
}

export interface IUser {
  id: string
  name: string
  email: string
  age: number
  token?: string
}

export interface IAssessment {
  id: string
  discipline: string
  grade: number,
  idStudent: string
}

export interface IAssessmentResponse {
  id: string
  token: string | undefined
}