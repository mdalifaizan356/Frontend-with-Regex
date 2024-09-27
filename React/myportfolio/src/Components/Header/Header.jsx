import React from 'react'
import { Link } from 'react-router-dom'
import '../Header/Header.css'

const Header = () => {
  return (
    <>
      <header className="header-container">
        <div className="logo"><h1>Dev.</h1></div>
        <div className="nav-container">
            <nav className="nav"> 
                <ul>
                    <li><Link to = {'/'} className='navlink'>Home</Link></li>
                    <li><Link to = {'/about'} className='navlink'>About Us</Link></li>
                    <li><Link to = {'/contact'} className='navlink'>Contact Us</Link></li>
                    <li><Link to = {'/wicd'} className='navlink'>What I Do</Link></li>
                    <li><Link to = {'/work'} className='navlink'>My Work</Link></li>
                </ul>
            </nav>
        </div>
      </header>
    </>
  )
}

export default Header