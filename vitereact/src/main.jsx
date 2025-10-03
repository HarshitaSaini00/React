import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import React from 'react';
import App from './App.jsx'

function MyApp() {
  return <div>
    <h1>Hello, world!</h1>
    <p>This is a simple React application.</p>
  </div>
}
/*const reactElement={
    type:'a',
    props:{
        href:'https://google.com',
        target:'_blank'
    },
    children:'click me to visit google'
}*/

const anotherElement =(
  <a href="https://google.com" target="_blank"> visit google</a>
)

const reactElement = React.createElement(
  'a',
  { href: 'https://google.com', target: '_blank' },
  'click me to visit google'
)

createRoot(document.getElementById('root')).render(
  reactElement
)
