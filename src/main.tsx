import React from 'react'
import ReactDOM from 'react-dom/client'
import Window from './components/Window.tsx'
import './index.css'

ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
    <img src='./atm8_compressed.jpg' id='background'/>
    <div className="min-h-screen flex justify-center items-center" id='mom'>
      <Window />
    </div>
  </React.StrictMode>,
)
