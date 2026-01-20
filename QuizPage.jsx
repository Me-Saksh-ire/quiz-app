import React, { useState } from 'react'
import { useParams, useNavigate } from 'react-router-dom'
import { Subjects } from '../assets/assets'

const QuizPage = () => {
  const { id } = useParams()
  const subject = Subjects.find(s => s.id === Number(id))

  const [currentQuestion, setCurrentQuestion] = useState(0)
  const [selectedOption, setSelectedOption] = useState(null)
  const [score, setScore] = useState(0)

  const question = subject.questions[currentQuestion]

  const handleOptionClick = (index) => {
    setSelectedOption(index)

    if (index === question.correctAnswer) {
      setScore(score + 1)
    }
  }

  const saveResult = (result) => {
    const history = JSON.parse(localStorage.getItem('quizHistory')) || []
    history.push(result)
    localStorage.setItem('quizHistory', JSON.stringify(history))
  }


  const navigate = useNavigate()

  const handleNext = () => {
    if (currentQuestion + 1 < subject.questions.length) {
      setSelectedOption(null)
      setCurrentQuestion(currentQuestion + 1)
    } else {
      
      saveResult({
        subjectId: subject.id,
        subjectName: subject.name,
        score,
        total: subject.questions.length,
        date: new Date().toLocaleDateString()
      })

      navigate('/result', {
        state: {
          score,
          total: subject.questions.length,
          subjectName: subject.name,
          subjectId: subject.id
        }
      })
    }
  }


  return (
    <div className="quiz-page">
      <h2>{subject.name}</h2>

      <p>
        Question {currentQuestion + 1} / {subject.questions.length}
      </p>

      <h3>{question.question}</h3>

      <div className="options">
        {question.options.map((option, index) => (
          <button
            key={index}
            onClick={() => handleOptionClick(index)}
            disabled={selectedOption !== null}
            className={`option
    ${selectedOption !== null
                ? index === question.correctAnswer
                  ? 'correct'
                  : index === selectedOption
                    ? 'wrong'
                    : ''
                : ''
              }
  `}
          >
            {option}
          </button>

        ))}
      </div>

      {selectedOption !== null && (
        <button onClick={handleNext} className="next-btn">
          Next <svg
            xmlns="http://www.w3.org/2000/svg"
            width="20"
            height="20"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
          >
            <line x1="5" y1="12" x2="19" y2="12" />
            <polyline points="12 5 19 12 12 19" />
          </svg>
        </button>
      )}
    </div>
  )
}

export default QuizPage

