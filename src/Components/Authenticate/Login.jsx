import axios from 'axios';
import React from 'react'
import { useState } from 'react';
import { Button } from '../../Button/Button'
import baseURL from './AuthenticationURL';

const Login = ({authenticationHandler}) => {


const [loginData,setLoginData]=useState({});

const handleChange=({target})=>{
  setLoginData({
    ...loginData,
    [target.name]:target.value
  })
  
}
  const handleLogin=(event)=>{
    event.preventDefault();
    axios.post(`${baseURL}/login`,{
      email:loginData.email,
      password:loginData.password
    }).then(response=>localStorage.setItem('authentication_token',response.data.token));
  }
  return (
    <>
        <h2 className="common-heading">Login</h2>
        <div className="container">
            <div className="contact-form">
            <form
            className="contact-inputs">
            <input
              type="email"
              placeholder="Email"
              name="email"
              className='form-input'
              onChange={handleChange}
            />

            <input
              type="password"
              name="password"
              placeholder="Password"
              autoComplete="off"
              className='form-input'
              onChange={handleChange}
            />
            <input type="submit" value="Login" onClick={handleLogin} />
            <p>Not Signed up yet? <Button onClick={authenticationHandler}>Sign Up</Button></p>
        </form>
            </div>
        </div>
        
        </>
  )
}

export default Login