import { useState } from 'react'
import { useNavigate } from 'react-router-dom';
import "./style.css";

import { fakeSignUpProvider } from '../../services/auth';

function SignUpPage() {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [firstName, setFirstName] = useState('');
  const [lastName, setLastName] = useState('');
  const [mobile, setMobile] = useState('');
  const navigate = useNavigate();

  function changeEmail(e) {
    setEmail(e.target.value);
  }

  function changePassword(e) {
    setPassword(e.target.value);
  }
  function changeFirstName(e) {
    setFirstName(e.target.value);
  }
  function changeLastName(e) {
    setLastName(e.target.value);
  }
  function changeMobile(e) {
    setMobile(e.target.value);
  }

  async function signUpSubmit() {
    const params = {
      email_address: email,
      password: password,
      first_name: firstName,
      last_name: lastName,
      mobile_number: mobile,
    }

    try {
        // const rawResponse = await fetch('http://localhost:8080/api/v1/signup', {
        //     body: JSON.stringify(params),
        //     method: 'POST',
        //     headers: {
        //         "Accept": "application/json",
        //         "Content-Type": "application/json;charset=UTF-8"
        //     }
        // });

        // const result = await rawResponse.json();

        // if(rawResponse.ok) {
        //   navigate("/login");
        // } else {
        //     const error = new Error();
        //     error.message = result.message || 'Something went wrong.';
        //     throw error;
        // }
        const a = await fakeSignUpProvider.createUser(params);
        console.log('abc', a);
        navigate("/login");
    } catch(e) {
        alert(`Error: ${e.message}`);
    }
  }

  return (
    <div className="container-signup">
      <form>
        <h1>Sign up</h1>
        <label className="labelText">First name</label>
        <input type="text" placeholder="eg., Mark" id="firstName" value={firstName} onChange={changeFirstName}/>
        <label className="labelText">Last name</label>
        <input type="text" placeholder="eg., Green" id="lastName" value={lastName} onChange={changeLastName} />
        <label>Email</label>
        <input type="email" placeholder="eg., test@upgrad.com" id="email" value={email} onChange={changeEmail} />
        <label id="password">Password</label>
        <input type="password" placeholder="eg., xxyyzz" id="password" value={password} onChange={changePassword}/>
        <label>Mobile</label>
        <input type="tel" placeholder="eg., 1234567890" id="mobile" value={mobile} onChange={changeMobile}/>
      </form>
      <button className="submit-btn" onClick={signUpSubmit}>Submit</button>
    </div>
  )
}

export default SignUpPage