import React from 'react'
import { Link } from 'react-router-dom'
import "../../../node_modules/bootstrap/dist/css/bootstrap.min.css"
import '../Header/Header.css'

const Header = () => {
  return (
    <>
      <div className='container-fluid bg-success'>
        <div className='row'>
          <div className='col-6'>
            <nav className="nav"> 
                {/* <ul> */}
                    <burtton><Link to = {'/basicreact'} className='navlink'>Basic</Link></burtton>
                    <button><Link to = {'/advancereact'} className='navlink'>Advance</Link></button>
                {/* </ul> */}
            </nav>
          </div>
        </div>
      </div>
    </>
  )
}

export default Header