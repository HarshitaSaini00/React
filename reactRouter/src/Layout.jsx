import React from 'react'
import Header from './Components/Header/Header'
import Footer from './Components/Footer/Footer'
import { Outlet } from 'react-router-dom'

/*outlet  ko hum jahan bhi use karenge uska content fixed rahega hilega nhi*/


function Layout() {
  return (
    <>
      <Header />
      
        <Outlet />
      
      <Footer />
    </>
  )
}


export default Layout