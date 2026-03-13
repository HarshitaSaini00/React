import React from "react"
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'

/*const reactElement ={ -- ye react syntax yahan directly yahan run nhi hoga isliye humne custom react banaya hai jisme humne react element ko object ke form me likha hai
    type:'a',
    props:{
        href:'https://google.com',
        target:'_blank'
    },
    Children:'click me to visit google'
}*/

const anotherElement =(
  <a href="https://google.com" target="_blank">click me to visit google</a>
)//ye react element hai jise humne jsx syntax me likha hai isko hum directly render kar sakte hai react ke andar

// react me bhi hum element create kar sakte hai react.createElement() method ke through jisme hum type , props aur children ko pass karte hai
const anotherElement2 = React.createElement('a',{href:'https://google.com',target:'_blank'},'click me to visit google') /* isme humne type , props aur children ko pass kar diya hai isse bhi hum directly render kar sakte hai react ke andar */





createRoot(document.getElementById('root')).render(
  
    <App/>
  
)
