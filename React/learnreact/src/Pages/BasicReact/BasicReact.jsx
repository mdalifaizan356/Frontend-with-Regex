import React from 'react'
import { Link } from 'react-router-dom'
import '../../../node_modules/bootstrap/dist/css/bootstrap.min.css'
import Navbar from './../../Components/Navbar/Navbar';
// import DataEffect from './../../Components/FetchProduct/DataEffect';
import Header from './../../../../myportfolio/src/Components/Header/Header';


const BasicReact = () => {
  return (
    <>
      <div className='container-fluid'>
      <div className='row'>
        <div className='col'>
          <Header/>
        </div>
      </div>
        <div className='row'>
          <div className='col-4'>
            <Navbar/>
          </div>
          <div className='col-10'>
          </div>
        </div>
      </div>
    </>
  )
}

export default BasicReact