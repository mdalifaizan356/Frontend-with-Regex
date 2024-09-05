import React from 'react'
import './App.css'
// import Home from './component/Home'
import Header from './component/Header'
import About from './component/About'
import Demo from './component/Demo'
import Contact from './component/Contact'
import {BrowserRouter, Route, Routes} from 'react-router-dom'


function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <BrowserRouter>
        <Header />
        <Routes>
          <Route path='/' element = {<Home/>} />
        </Routes>
      </BrowserRouter>
    </>
  )
}

export default App
