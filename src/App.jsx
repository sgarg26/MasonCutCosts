import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

function Link() {
  return(
    <>
      <a href="www.github.com" target="_blank">click here</a>
    </>
  )
}

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <Link></Link>
      <div>Hi welcome to the project</div>
      <button>Hi this is a button</button>
    </>
  )
}

export default App
