import React from 'react'
import { Link } from 'react-router-dom'
import '../../../node_modules/bootstrap/dist/css/bootstrap.min.css'
import './Navbar.css'

const Navbar = ({ links }) => {
  return (
    <>
        <div className='row border-success'>
          <div className='col'>
            <nav className="nav"> 
            <ul>
              {links.map((link, index) => (
              <li key={index}>
              <Link to={link.path}>{link.label}</Link>
          </li>
        ))}
      </ul>
            </nav>
          </div>
        </div>
    </>
  )
}

export default Navbar