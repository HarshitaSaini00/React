import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'
import Layout from './Layout.jsx'
import Home from './Components/Home/Home.jsx'
import About from './Components/About/About.jsx'
import Contact from './Components/Contact/Contact.jsx'
import { createBrowserRouter, RouterProvider } from 'react-router-dom'
import User from './Components/User/User.jsx'
import Github from './Components/Github/Github.jsx'

const router = createBrowserRouter([
  {
    path:'/',
    element : <Layout/>,
    children:[
      {
        path:"",
        element :<Home/>
      },
      {
        path:"about",
        element:<About/>
      },
      {
        path:"contact",
        element:<Contact/>
      },
      {
        path:"User/:userid",
        element:<User/>
      },
      {
        path:"github",
        element:<Github/>
      }
    ]
  }
])




createRoot(document.getElementById('root')).render(
  <StrictMode>
    <RouterProvider router={router} />
  </StrictMode>,
)
