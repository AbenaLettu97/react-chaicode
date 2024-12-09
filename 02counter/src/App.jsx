import { useState } from 'react'
import './App.css'

function App() {
const [counter, setCounter] = useState(0, setCounter)

  const addValue = () => {
    setCounter(counter + 1)
    // setCounter((preCounter) => preCounter + 1)
    // setCounter((preCounter) => preCounter + 1)
    // setCounter((preCounter) => preCounter + 1)
  }
  const removeValue = () => {
    setCounter(counter - 1)
  }

  return (
    <>
     <h1>{counter}</h1>
     <h2>Counter value : {counter}</h2>
     <button onClick={addValue}>Add value</button>{" "}
     <button onClick={removeValue}>Remove value</button>
     <p>footer: {counter}</p>
    </>
  )
}

export default App