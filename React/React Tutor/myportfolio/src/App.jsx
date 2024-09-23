import React from 'react'
import Header from '../src/Components/Header/Header'
import Home from '../src/Pages/Home/Home'
import About from '../src/Pages/About/About'
import Contact from '../src/Pages/Contact/Contact'
import WICD from '../src/Pages/WICD/WICD'
import Work from '../src/Pages/Work/Work'
import {BrowserRouter, Route, Routes} from 'react-router-dom'
// import './App.css'

function App() {

  return(
    <>
      <BrowserRouter>
      {/* <Header /> */}
        <Routes>
        <Route path='/' element = {<Home/>} />
          <Route path='/about' element = {<About/>} />
          <Route path='/contact' element = {<Contact/>} />
          <Route path='/wicd' element = {<WICD/>} />
          <Route path='/work' element = {<Work/>} />

        </Routes>
      </BrowserRouter>
    </>
  )
}

export default App
