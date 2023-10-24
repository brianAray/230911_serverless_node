import React, { useState } from 'react'
import LoginForm from './LoginForm/LoginForm'
import Display from './Display/Display'

const LoginContainer = () => {
    const [success, setSuccess] = useState(false);
    const [submitted, setSubmitted] = useState(false);

    async function loginSubmissionHandler(data: {username: string, password: string}){
        setSubmitted(true);
        const {username, password} = data;
        setSuccess((username === 'user1' && password === 'pass1'));
    }

  return (
    <>
        <LoginForm onSubmit={loginSubmissionHandler}/>
        {
            submitted && <Display success={success}/>
        }
    </>
  )
}

export default LoginContainer