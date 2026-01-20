import React from 'react'
import '../index.css'
import { assets } from '../assets/assets'
import { Link } from 'react-router-dom'

const Nav = () => {
    return (
        <div className='navbar'>
            <Link to="/subject" className='logo'>IQmaster</Link>

            <div className='profile'>

                <div className='search-input'>
                    <img src={assets.search_icon} height='20' alt="" />
                    <input type="text" className='input-place' />
                </div>

                <div>
                    <Link to='/dashboard' className='dashboard'>Dashboard</Link>
                </div>

                <div className='profile-img'>
                    <Link to='/signup'>
                        <img src={assets.profile} height='25' alt="" />
                    </Link>

                </div>
            </div>
        </div>

    )
}

export default Nav
