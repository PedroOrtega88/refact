import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import Calculadora from './Calculadora.jsx'
import Bottom from './Bottom.jsx'
import Top from './top.jsx'
import './index.css'

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <Top /><App /> <Calculadora /> <Bottom />
  </React.StrictMode>,
)
