import { exams } from "../data/mockDB"

export const getAllExams = () => {
  return Promise.resolve(exams)
}