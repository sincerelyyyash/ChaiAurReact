import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

function App() {
  let [counter, setCounter] = useState(5)


  const addValue=()=>{
    if(counter<=20){
      setCounter(counter++)
    }else{
      alert("Limit Reached")
    }
    
  }

  const removeValue =()=>{
    if(counter>=1){
      setCounter(counter-1)
    }else{
      alert("Negative number not allowed.")
    }
  }

  return (
    <>
    <h1>Chai Aur React- Counter App</h1>
    <h2>Counter value: {counter}</h2>

    <button onClick={addValue}>Add Value</button>
    <br /> <br />
    <button onClick={removeValue}>Remove value</button>
    </>
  )
}

export default App
