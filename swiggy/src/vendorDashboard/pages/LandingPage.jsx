import React from 'react'
import NavBar from '../components/NavBar'
import SideBar from '../components/SideBar'
import Login from '../components/forms/Login'
import Register from '../components/forms/Register';
import AddFirm from '../components/forms/AddFirm';
import AddProduct from '../components/forms/AddProduct';

const LandingPage = () => {
  return (
    <>
        <section className='landingSection'>
        <NavBar/>

        <div className="collectionSection">
        <SideBar/>
        {/* <Login/> */}
        {/* <Register/> */}
        {/* <AddFirm/> */}
        <AddProduct/>
        </div>
        </section>
    </>

  )
}

export default LandingPage