import React from 'react'

const NavBar = ({showLoginForm,showRegisterForm}) => {
  // console.log(showLoginForm)
  return (
    <div className="navSection">
        <div className="company">
            Vendor dashboard
        </div>
<div className="userAuth">
    <span onClick={showLoginForm}>Login</span>
    <span onClick={showRegisterForm}>Register</span>
</div>
    </div>
  )
}

export default NavBar