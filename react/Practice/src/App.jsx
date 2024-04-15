import { useState } from 'react'
import ReactDom from 'react-dom'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

function App() {
  const [count, setCount] = useState(0)
 function randomNo(){
  let no = Math.floor(Math.random()*100) ; 
  console.log(no); 
 }
  return (
    <>
      <button onClick={randomNo()}> Click me</button>
      <h2> Your Lucky no is </h2>
    </>
  )
}

export default App
