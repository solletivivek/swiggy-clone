import React, { useState } from 'react';   
import { API_URL } from '../../data/apiPath';

const Register = () => {
  const [username, setUsername] = useState('');   
  const [email, setEmail] = useState('');   
  const [password, setPassword] = useState('');   
  const [error, setError] = useState('');  
  const [loading, setLoading] = useState(false);  

  const handleSubmit = async (e) => { 
    e.preventDefault();
    setLoading(true);
    setError(''); 
    try {
      const response = await fetch(`${API_URL}/vendor/register`, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json'
        },
        body: JSON.stringify({ username, email, password })
      });
      const data = await response.json();
      setLoading(false);
      if(response.ok){
        console.log(data);
        setUsername('');
        setEmail('');
        setPassword('');
        alert("Registration successful");
      } else {
        setError(data.message || "Registration failed");
      }
    } catch (error) {
      setLoading(false);
      console.error('Error:', error);
      alert("Registration failed");
    }
  };

  return (
    <div className="registerSection">
      <h3>Vendor Register</h3>
      <form className='authForm' onSubmit={handleSubmit}>
        <label>Username</label><br />
        <input 
          type="text" 
          name='username' 
          placeholder='Enter your username' 
          value={username} 
          onChange={(e) => setUsername(e.target.value)} 
        /><br />
        <label>Email</label><br />
        <input 
          type="text" 
          name='email' 
          placeholder='Enter your email' 
          value={email} 
          onChange={(e) => setEmail(e.target.value)} 
        /><br />
        <label>Password</label><br />
        <input 
          type="password" 
          name='password' 
          placeholder='Enter your password' 
          value={password} 
          onChange={(e) => setPassword(e.target.value)} 
        /><br />
        <div className="btnSubmit">
          <button type="submit" disabled={loading}>Submit</button>
        </div>
      </form>
      {error && <p style={{ color: 'red' }}>{error}</p>}
    </div>
  );
}

export default Register;
