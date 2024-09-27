import React from 'react'
import { Link } from 'react-router-dom'
import "../../../node_modules/bootstrap/dist/css/bootstrap.min.css"
import './Landing.css'

const Landing = () => {
  return (
    <>
        <div className='container-fluid bg-danger'>
            <div className='row'>
                <div>
                <button><Link to = {'/basicreact'} className='navlink'>Basic</Link></button>
                <button><Link to = {'/advancereact'} className='navlink'>Advance</Link></button>
                </div>
            </div>
        </div>
    </>
  )
}

export default Landing