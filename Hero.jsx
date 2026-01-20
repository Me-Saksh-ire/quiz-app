import React from 'react'
import '../index.css'
import Content from './Content.jsx'
import { Link } from 'react-router-dom'

const Hero = () => {
    return (
        <div className='hero'>
            <h1>IQmaster</h1>

            <Link to="/subject" onClick='' className="play-btn">
                Play Now
                <svg
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
            </Link>

        </div>
    )
}

export default Hero
