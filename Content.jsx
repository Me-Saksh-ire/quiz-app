import React from 'react'
import Nav from '../components/Nav.jsx'
import { Link, useNavigate } from 'react-router-dom'
import { Subjects } from '../assets/assets'

const Content = () => {

  const navigate = useNavigate();

  return (
    <div>
      <h1 className='content'>Select a Subject</h1>

      {/* Single container with the grid class */}
      <div className='quiz-content'>
        {Subjects.map(subject => (
          <button className='quiz-subject'
            key={subject.id}
            style={{
              backgroundImage: `url(${subject.image})`
            }}
            onClick={() => { navigate(`/subject/${subject.name}/${subject.id}`) }}>

            <div className="subject-overlay">
              <h2>{subject.name}</h2>
              <span className="play-now">Play Now ▶</span>
            </div>
            
          </button>

        ))}
      </div>
    </div>
  )
}

export default Content