import { useState } from 'react'
import ControlHub from './components/ControlHub'
//import './App.css'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <ControlHub></ControlHub>
    </>
  )
}

export default App
