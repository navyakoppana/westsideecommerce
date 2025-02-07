import React from 'react'
import { useState } from 'react';
import styled from 'styled-components';


const LoginForm = styled.form`
  display:flex;
  flex-direction:column;
  gap:20px;
  align-items:center;
  font-size:30px;
  font-weight:bold;
  margin:100px 0 500px 0;

`
const LoginInput = styled.input`
  display:inline-block;
  width:fit-content;
  padding:10px 200px 10px 5px;

`
const MsgDiv = styled.div`
  font-size:16px;
  cursor:pointer;
  display:flex;
  flex-direction:row;
  gap:130px;
  margin-top:-30px;
`

const Login = () => {

  const [currentState,setCurrentState]=useState('Sign Up');

  const SubmitHandler = (e) =>{
    e.preventDefault();
  }
  return (
    <LoginForm onSubmit={SubmitHandler}>
      <div>
        <p>{currentState}</p>
      </div>
      {currentState==='Login'?'':<LoginInput type='text' placeholder='Name' required />}
      <LoginInput type='email' placeholder='Email'required/>
      <LoginInput type='password' placeholder='Password' required />
      <MsgDiv>
        <p>Forgot your password?</p>
        {
          currentState==='Login'?
          <p onClick={() =>setCurrentState('Sign Up')}>Create account</p>:
          <p onClick={() =>setCurrentState('Login')}>Login Here</p>
        }
      </MsgDiv>
      <button>{currentState==='Login'?'Sign In':'Sign Up'}</button>
    </LoginForm>
  )
}

export default Login