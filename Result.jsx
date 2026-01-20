import React from 'react'
import { useLocation, useNavigate } from 'react-router-dom'

const Result = () => {
  const navigate = useNavigate()
  const { state } = useLocation()

  if (!state) {
    return <h2>No result found</h2>
  }

  const { score, total, subjectName } = state
  const percentage = Math.round((score / total) * 100)

  return (
    <div className="result-page">
      <h2>{subjectName} Quiz Result</h2>

      <div className="result-card">
        <p>Score</p>
        <h1>{score} / {total}</h1>
        <p>{percentage}%</p>
      </div>

      <div className="result-actions">
        <button onClick={() => navigate(`/subject/${subjectName}/${state.subjectId}`)}>
          Restart Quiz
        </button>
        <button onClick={() => navigate('/subject')}>
          Back to Subjects
        </button>
      </div>
    </div>
  )
}

export default Result
