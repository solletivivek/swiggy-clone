import React, { useState } from 'react';
import { API_URL } from '../../data/apiPath';

const Login = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState('');

  const loginHandler = async (e) => {
    e.preventDefault();
    setLoading(true);
    setError('');
    try {
      const response = await fetch(`${API_URL}/vendor/login`, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json'
        },
        body: JSON.stringify({ email, password })
      });

      const data = await response.json();
      if (response.ok) {
        alert("Login successful");
        setEmail('');
        setPassword('');
        localStorage.setItem('loginToken', data.token);
        setError('');
      } else {
        alert("Login failed");
        setError(data.message || "Login failed");
      }
    } catch (error) {
      console.error('Error:', error);
      setError('An error occurred. Please try again.');
    } finally {
      setLoading(false);
    }
  }

  return (
    <div className="registerSection">
      <h3>Vendor Login</h3>
      <form className='authForm' onSubmit={loginHandler}>
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
          <button type='submit' disabled={loading}>Submit</button>
        </div>
      </form>
      {error && <p style={{ color: 'red' }}>{error}</p>}
    </div>
  );
}

export default Login;
