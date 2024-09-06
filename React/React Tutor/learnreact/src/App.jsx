import React from 'react'
import './App.css'
import Home from './component/Home'
import Header from './component/Header'
import About from './component/About'
import Demo from './component/Demo'
import Contact from './component/Contact'
import {BrowserRouter, Route, Routes} from 'react-router-dom'


function App() {
  return (
    <>
      <BrowserRouter>
        <Header />
        <Routes>
          <Route path='/' element = {<Home/>} />
          <Route path='/about' element = {<About/>} />
          <Route path='/contact' element = {<Contact/>} />
          <Route path='/demo' element = {<Demo/>} />
        </Routes>
      </BrowserRouter>
    </>
  )
}

export default App