import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import HelloComp from './components/HelloComp'
import Dashboard from './components/Dashboard'
import { BrowserRouter, Route, Routes, Link } from 'react-router-dom'
import Login from './components/Login'



function App() {
  // const [count, setCount] = useState(0)
  // comment 

  return (
    <>
      <h1>Revature + React</h1>
      <p>We are writing in tsx </p>

      
      <HelloComp />

      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Login />} />
          <Route path="/dashboard" element={<Dashboard />} />
          {/* <Route path="/about" element={<About />} />
          <Route path="/contact" element={<Contact />} /> */}
        </Routes>
      </BrowserRouter>


    </>
  )
}

export default App

