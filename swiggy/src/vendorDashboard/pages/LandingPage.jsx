import React from 'react'
import NavBar from '../components/NavBar'
import SideBar from '../components/SideBar'
import Login from '../components/forms/Login'
import Register from '../components/forms/Register';

const LandingPage = () => {
  return (
    <>
        <section className='landingSection'>
        <NavBar/>

        <div className="collectionSection">
        <SideBar/>
        <Login/>
        {/* <Register/> */}
        </div>
        </section>
    </>

  )
}

export default LandingPage