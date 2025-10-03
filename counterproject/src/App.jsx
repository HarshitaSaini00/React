
import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

function App() {
  let[counter,setcounter] = useState(15)
  //let counter = 15s

  const addValue = () => {
    console.log("clicked",counter); 
    counter = counter+1
    setcounter(counter)
    //setcounter(precounter=>prevcounter+1)
    //setcounter(precounter=>prevcounter+1)
    //setcounter(precounter=>prevcounter+1)
    //setcounter(precounter=>prevcounter+1)

    
  }
  const removeValue = () => {
    counter=counter-1
    setcounter(counter)
  }

  return (
    <>
      <h1>chai or react</h1>
      <h2> counter value: {counter}</h2>
      <button onClick={addValue}>add value</button>
      <br />
      <button onClick={removeValue}>remove value</button>
    </>
  )
}

export default App
