import React, { useEffect, useState } from 'react'
import { Subjects } from '../assets/assets'
import { useNavigate } from 'react-router-dom'

const Dashboard = () => {
  const navigate = useNavigate()
  const [history, setHistory] = useState([])

  useEffect(() => {
    const data = JSON.parse(localStorage.getItem('quizHistory')) || []
    setHistory(data)
  }, [])

  const totalPlayed = history.length
  const totalScore = history.reduce((acc, h) => acc + h.score, 0)
  const totalQuestions = history.reduce((acc, h) => acc + h.total, 0)
  const accuracy = totalQuestions
    ? Math.round((totalScore / totalQuestions) * 100)
    : 0

  const getSubjectStats = (id) => {
    const subjectHistory = history.filter(h => h.subjectId === id)
    if (!subjectHistory.length) return null

    const best = Math.max(...subjectHistory.map(h => h.score))
    return {
      attempts: subjectHistory.length,
      best
    }
  }

  return (
    <div className="dashboard-page">
      <h1>Dashboard</h1>

      {/* Summary */}
      <div className="stats-grid">
        <div className="stat-card">
          <h2>{totalPlayed}</h2>
          <p>Quizzes Played</p>
        </div>
        <div className="stat-card">
          <h2>{accuracy}%</h2>
          <p>Accuracy</p>
        </div>
      </div>

      {/* Subject Progress */}
      <h2>Subject Progress</h2>
      <div className="subject-stats">
        {Subjects.map(subject => {
          const stats = getSubjectStats(subject.id)
          return (
            <div key={subject.id} className="subject-card">
              <h3>{subject.name}</h3>
              {stats ? (
                <>
                  <p>Attempts: {stats.attempts}</p>
                  <p>Best Score: {stats.best}</p>
                </>
              ) : (
                <p>No attempts yet</p>
              )}
              <button className='dashboard-play'
                onClick={() => navigate(`/subject/${subject.name}/${subject.id}`)}
              >
                Play
              </button>
            </div>
          )
        })}
      </div>
    </div>
  )
}

export default Dashboard
