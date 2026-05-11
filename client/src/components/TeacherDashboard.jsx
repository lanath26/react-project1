import { useEffect, useState } from "react"
import { getAllExams } from "../api/examService"

function TeacherDashboard() {
  const [exams, setExams] = useState([])

  useEffect(() => {
    getAllExams().then((data) => {
      setExams(data)
    })
  }, [])

  return (
    <div className="container mt-5">
      <h1 className="mb-4">Teacher Dashboard</h1>

      {exams.map((exam) => (
        <div key={exam.id} className="card mb-3 p-3">
          <h3>{exam.title}</h3>
          <p>Questions: {exam.questions}</p>
        </div>
      ))}
    </div>
  )
}

export default TeacherDashboard