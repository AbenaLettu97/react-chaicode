import { useState } from 'react'
import './App.css'

function App() {
const [counter, setCounter] = useState(0)

  const addValue = () => {
    setCounter(counter + 1)
  
  }
  const subtractValue = () => {
    setCounter(counter - 1)
  }

  const resetValue = () => {
    setCounter(0)
  }

  return (
    <>
     <h1>{counter}</h1>
     <h2>Counter value : {counter}</h2>
     <button onClick={addValue}>Add value</button>{" "}
     <button onClick={subtractValue}>Remove value</button>{" "}
     <button onClick={resetValue}>Reset value</button>{" "}

    </>
  )
}

export default App
