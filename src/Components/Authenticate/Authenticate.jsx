import {useState} from 'react'
import styled from 'styled-components'
import Signup from './Signup'
import Login from './Login'
const Authenticate = () => {
    const [signUp,setSignUp]=useState(false)
    const authenticationHandler=()=>{
        setSignUp(!signUp);
}
  return (
    <Wrapper>
    {
        signUp?
                <Signup authenticationHandler={authenticationHandler}/>
        :
        <Login authenticationHandler={authenticationHandler}/>
}
    </Wrapper>
  )
}
const Wrapper = styled.section`
    padding: 9rem 0 5rem 0;
    text-align: center;
    .container {
      margin-top: 6rem;
      .contact-form {
        max-width: 50rem;
        margin: auto;
        .contact-inputs {
          display: flex;
          flex-direction: column;
          gap: 3rem;
          .form-input{
            text-transform:none;
          }
          input[type="submit"] {
            cursor: pointer;
            transition: all 0.2s;
            &:hover {
              background-color: ${({ theme }) => theme.colors.white};
              border: 1px solid ${({ theme }) => theme.colors.btn};
              color: ${({ theme }) => theme.colors.btn};
              transform: scale(0.9);
            }
          }
        }
      }
    }
  `;

export default Authenticate