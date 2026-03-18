import { useState } from 'react'

import './App.css'
import Card from './components/card'

function App() {
  /* props -- components ko reusable banate hain, jise hum alag alag jagah use kar sakte hain.
  props ke through hum components ko customize kar sakte hain, jise hum alag alag tarike se use kar sakte hain. */
  
  let myObj ={
    username:"harshita",
    age:21
  }



  return (
    <>
     <h1 className='bg-green-500 text-red-500 p-4 rounded-xl'>Tailwind Test</h1>
     
    <Card username="harshita"/>
    </>
  )
}

export default App
