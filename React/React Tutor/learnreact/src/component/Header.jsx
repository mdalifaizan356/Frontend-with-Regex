import React from 'react'
import { Link } from 'react-router-dom'

function Header() {
  return (
    <div>
      <Link style={{margin:"10px"}} to = {'/'}>Home</Link>
      <Link style={{margin:"10px"}} to = {'/about'}>About</Link>
      <Link style={{margin:"10px"}} to = {'/contact'}>Contact</Link>
      {/* <Link style={{margin:"10px"}} to = {'/demo'}>Demo</Link> */}

      <a style={{margin:"10px"}} href = '/demo'>Demo</a>      {/* Relode Page */}
    </div>
  )
}

export default Header