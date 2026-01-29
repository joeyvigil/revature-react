import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import HelloComp from './components/HelloComp'
import TestComp from './components/TestComp'
import ThirdComp from './components/ThirdComp'


function App() {
  // const [count, setCount] = useState(0)
  // comment 

  return (
    <>
      <h1>Revature + React</h1>
      <p>We are writing in tsx </p>

      {/* comment */}
      
      <p>check out this custom component:</p>
      <HelloComp />
      <TestComp />
      <ThirdComp />



    </>
  )
}

export default App

