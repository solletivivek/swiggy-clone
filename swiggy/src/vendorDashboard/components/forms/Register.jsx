import React from 'react';  // Import the CSS file for styling

const Register = () => {
  return (
    <div className="registerSection">
      <h3>Vendor Register</h3>
      <form className='authForm'>
        <label>Username</label><br />
        <input type="text" placeholder='Enter your username' /><br />
        <label>Email</label><br />
        <input type="text" placeholder='Enter your email' /><br />
        <label>Password</label><br />
        <input type="password" placeholder='Enter your password' /><br />
        <div className="btnSubmit">
          <button type="submit">Submit</button>
        </div>
      </form>
    </div>
  );
}

export default Register;
