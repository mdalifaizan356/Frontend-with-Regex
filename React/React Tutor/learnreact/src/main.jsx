import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import App from './App.jsx'
import './index.css'
import Home from './component/Home.jsx'
import { store } from "../src/Store/store.js"
import { Provider } from 'react-redux'

createRoot(document.getElementById('root')).render(

  <StrictMode>
  <Provider store={store}>
    <App />
    </Provider>
  </StrictMode>
)