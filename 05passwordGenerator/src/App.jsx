import {useState , useCallback ,useEffect,useRef, use} from'react'

/*useRef hook jab use karte hai hum jab humme refrence lena hota hai*/

function App() {
  const[length,setLength] = useState(8);
  const[numberAllowed ,setNumberAllowed] = useState(false);
  const[charAllowed,setCharAllowed] = useState(false);
  const[password,setPassword]= useState('');
   
  //useRef hook ka use karte hai jab humme kisi element ko direct access karna hota hai, jaise ki input field, button, ya kisi bhi DOM element ko. useRef ek mutable object return karta hai jiska current property hota hai, jisme hum apne desired value ko store kar sakte hai. jab bhi hum uss ref ko kisi element ke saath attach karte hai, to uss element ka reference uss ref ke current property me store ho jata hai. isse hum uss element ko directly manipulate kar sakte hai, jaise ki focus karna, value change karna, ya kisi bhi event listener ko add karna. useRef ka use karne se hum React ke re-render cycle se bach sakte hai, kyunki useRef me stored value change hone par component re-render nahi hota hai.
 
  const passwordRef =useRef(null);

  const copyPasswordToClipboard = useCallback(()=>{
    passwordRef.current.select();
    window.navigator.clipboard.writeText(password);
  },[password])


  
  const passwordGenerator = useCallback (()=>{
    let pass=""
    let str = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz";
    if (numberAllowed) str += '0123456789';
    if (charAllowed) str += '!@#$%^&*()_+~`|}{[]:;?><,./-=';
    
    for (let i = 0; i < length; i++) {let char = Math.floor(Math.random() * str.length +1);
      pass +=str.charAt(char)
    }

    setPassword(pass);


  },[length,numberAllowed,charAllowed,setPassword])

  useEffect(()=>{
    passwordGenerator();

  },[length,numberAllowed ,charAllowed,passwordGenerator])

  /* useCallback is a React hook that returns a memoized version of a callback function
  iska syntax hai: useCallback(fn, deps)deps=[dependencies] ye ek array hota hai jisme wo variables hote hain jinpe callback function depend karta hai. jab bhi in dependencies me se koi bhi variable change hota hai, tabhi useCallback ek naya function return karta hai. agar dependencies me koi bhi variable change nahi hota hai, to useCallback pehle se memoized function ko return karta hai. isse performance improve hoti hai kyunki unnecessary re-renders aur function recreations se bachata hai.
   */
  return (
    <>
       <div className="w-full max-w-md mx-auto shadow-md rounded-lg px-4 my-8 text-orange-500 bg-gray-800 h-30">
        <h1 className="text-white text-centre my-3 justify-center">Password Generator</h1>
        <div className='flex shadow rounded-lg overflow-hidden mb-4 bg-amber-50'>
          <input 
          type="text"
          value={password}
          className="outline-none w-full py-1 px-3"
          placeholder ="Password"
          readOnly
          ref={passwordRef}
           />
           <button
           onClick ={copyPasswordToClipboard}
            className ="outline-one bg-blue-700 text-white px-3 py-0.5 shrink-0"> Copy

           </button>
        </div>

        <div className ='flex text-sm gap-x-2'>
          <div className="flex items-centre gap-x-1">
            <input type="range"
              
             min={6}
             max={100}
             value={length}
             className="cursor-pointer"
             onChange ={(e) =>setLength(e.target.value)}
             />
             <label>Length:{length}</label>
          </div>
          <div className="flex items-centre gap-x-1">
            <input 
            type="checkbox"
            defaultChecked ={numberAllowed}
            id="numberInput"
            onChange ={() =>{
              setNumberAllowed ((prev) =>!prev);
            }}
             />
             <label>Numbers</label>
          </div>
          <div className="flex items-centre gap-x-1">
            <input 
            type="checkbox"
            defaultChecked ={charAllowed}
            id="charInput"
            onChange ={() =>{
              setCharAllowed ((prev) =>!prev);
            }}
             />
             <label> Characters</label>
          </div>
           
        </div>


       </div>

     
    </>
  )
}

export default App
