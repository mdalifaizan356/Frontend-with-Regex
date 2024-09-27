import React from 'react'
import {BrowserRouter, Route, Routes} from 'react-router-dom'
import "../node_modules/bootstrap/dist/css/bootstrap.min.css"
import './App.css'
import Landing from './Pages/Landing/Landing'
import BasicReact from "../src/Pages/BasicReact/BasicReact"
import AdvanceReact from "../src/Pages/AdvanceReact/AdvanceReact"


function App() {
  return(
    <>
      <BrowserRouter>
        <Routes>
          <Route path='/' element = {<Landing/>} />
          <Route path='/basicreact' element = {<BasicReact/>} />
          <Route path='/advancereact' element = {<AdvanceReact/>} />
        </Routes>
      </BrowserRouter>
    </>
  )
}

export default App
