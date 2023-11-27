import { useState } from 'react';
import { useNavigate } from 'react-router-dom';

import './style.css';
import  { fakeAuthProvider } from '../../services/auth';
import { useAuth } from "../Auth";

function LoginPage() {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const navigate = useNavigate();
  const { setAuthTokens } = useAuth();

  function changeEmail(e) {
    setEmail(e.target.value);
  }

  function changePassword(e) {
    setPassword(e.target.value);
  }

  async function login() {
    const param = window.btoa(`${email}:${password}`);
    try {
        // const rawResponse = await fetch('http://localhost:8080/api/v1/auth/login', {
        //     method: 'POST',
        //     headers: {
        //         "Accept": "application/json",
        //         "Content-Type": "application/json;charset=UTF-8",
        //         authorization: `Basic ${param}`
        //     }
        // });

        // const result = await rawResponse.json();
        // if(rawResponse.ok) {
        //     window.sessionStorage.setItem('user-details', JSON.stringify(result));
        //     window.sessionStorage.setItem('access-token', rawResponse.headers.get('access-token'));
        //     navigate("/")
        // } else {
        //     const error = new Error();
        //     error.message = result.message || 'Something went wrong.';
        // }
        const result = await fakeAuthProvider.signin(param);
        window.sessionStorage.setItem('user-details', JSON.stringify(result['user-details']));
        setAuthTokens(result['token']);
        navigate("/")
    } catch(e) {
        alert(`Error: ${e.message}`);
    }
  }

  return (
    <div className="container-login">
      <form id="login-form" name="LoginForm">
          <label for="username" className="label-text">Email</label>
          <input type="text" id="email" placeholder="e.g., test@test.com" value={email} onChange={changeEmail} required />
          <label for="password" className="label-text">Password</label>
          <input type="password" id="password" placeholder="e.g., **********" value={password} onChange={changePassword} required />
      </form>
      <button type="button" onClick={login} className="login-btn">Login</button>
    </div>
  )
}

export default LoginPage;