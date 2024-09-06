import React from 'react'
import './Header.css'
import App from '../../App'
import About from '../../Pages/AboutUs/About'
import { Link } from 'react-router-dom'

const Header = () => {
  return (
    <>
    <div className="container">
        <div className='logo'><h2>CP <span style={{color: "red"}}>Bags</span></h2></div>
        <div className='menu'>
            <ul>
                <li><Link to="../../App.jsx">Home</Link></li>
                {/* <li>About Us</li>
                <li>Contact Us</li>
                <li>Services</li> */}
            </ul>
        </div>
    </div>
    </>
  )
}

export default Header