import React from 'react'
import ReactDOM from 'react-dom/client'
import './index.css'
import Header from './my_component/Header.jsx'
import Content from './my_component/Content.jsx'
import Footer from './my_component/Footer.jsx'




ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <Header />
    <Content />
    <Footer />
  </React.StrictMode>,
)

