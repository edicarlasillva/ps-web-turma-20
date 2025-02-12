import { api } from "./api"
import { IAssessmentResponse } from "../types"

export async function getAssessments(data: IAssessmentResponse) {
  try {
    const response = await api.get(`/students/${data.id}/assessments`, {
      headers: {
        Authorization: data.token
      }
    })

    return response.data.data

  } catch (error) {
    console.log(error)

    return []
  }
}