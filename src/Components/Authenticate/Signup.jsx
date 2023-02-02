import axios from 'axios'
import React from 'react'
import { useState } from 'react'
import { Button } from '../../Button/Button'
import baseURL from './AuthenticationURL'
const Signup = ({authenticationHandler}) => {
  const [signUp,setSignUp]=useState({});

  const handleChange=({target})=>{
    setSignUp({
      ...signUp,
      [target.name]:target.value
    })
  }

    const signupHandler=(event)=>{
      event.preventDefault();
      axios.post(`${baseURL}/signup`,{
            fullName:signUp.fullName,
            email:signUp.email.toLowerCase(),
            password:signUp.password
        },{
          headers:{
            'Authorization':'bearer',
            'Content-Type':'application/json'
          }
        }).then(data=>console.log(data))
    }
    
  return (
    <>
        <h2 className="common-heading">Signup</h2>
        <div className="container">
            <div className="contact-form">
            <form
            className="contact-inputs">
             <input
              type="text"
              name="fullName"
              placeholder="Full Name"
              autoComplete="off"
              onChange={handleChange}
              className="form-input"
            />
            <input
              type="email"
              placeholder="Email"
              name="email"
              onChange={handleChange}
              className="form-input"
            />

            <input
              type="password"
              name="password"
              placeholder="Password"
              autoComplete="off"
              onChange={handleChange}
              className="form-input"
            />
            <input type="submit" value="Sign Up" onClick={signupHandler} />
            <p>Already Signed Up? <Button onClick={authenticationHandler}>Login</Button></p>
        </form>
            </div>
        </div>
        
        </>
  )
}

export default Signup