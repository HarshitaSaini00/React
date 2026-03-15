import { useState } from 'react'

import './App.css'

function App() {
  /*  * useState is a hook that allows us to add state to our functional components.
      * It returns an array with two elements: the current state value and a function to update that value.
      * We can use array destructuring to assign these values to variables. */
  /*useState hook responsible hota hai state ko change karne ke liye is change ko propagate kiya jaata hai dom ke andar */

  let [counter,setCounter] =useState(0);
  
  /*useState array ki form me return karta hai jisme pehla element hota hai current state value aur dusra element hota hai function jo state ko update karta hai.*/

 /*counter variable me current state value store hoti hai aur setCounter function ke through hum is value ko update kar sakte hai. jahan jahan bhi counter usse dikhega wo wahan wahan update kardega*/
 
 /*counter ek variable hai jisme humri current value hogi jo humne useState hook me pass ki hai and setCounter function usse update karega */



  const addValue =()=>{
    
    if(counter<20){ /*humne condition lagayi hai ki counter 20 se zyada nahi hona chahiye taki humara counter value 20 se zyada na ho jaye */
      setCounter(counter+1)
      
      
    }
  }
  /*addValue function me hum counter variable ko 1 se increment kar rahe hai aur phir setCounter function ke through usse update kar rahe hai. jab bhi hum setCounter function ko call karenge to react ko pata chal jayega ki state change ho gaya hai aur wo component ko re-render karega jisse updated value dom me reflect ho jayegi. */

  const removeValue =() =>{
    setCounter(counter-1)
  }
  
  return (
    <>
    <h1>
      Chai aur react
    </h1>
    <h2>Counter value:{counter}</h2>

    <button onClick={addValue}>Add Value</button>
    <br />
    <button onClick={removeValue}>Remove Value</button>
    
    </>
  )
}

export default App
