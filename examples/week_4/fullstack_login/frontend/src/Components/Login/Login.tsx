import axios from 'axios';
import React, { useState } from 'react'

function Login() {

    let [state, setState] = useState({
        username: "",
        password: ""
    })

    async function handleSubmit(event: any){
        event.preventDefault();
        // will call an axios request
        console.log(state);
        const response = await axiosPostData();
        console.log(response);
    }

    function usernameChange(event: any){
        setState({...state, username: event.target.value});
    }

    function passwordChange(event: any){
        setState({...state, password: event.target.value});
    }

    async function fetchPostData(){
        const URL = "http://3.87.24.111:3000/user/login";
        try{
            const response = await fetch(URL, {
                method: "POST",
                headers: {
                    "Content-Type": "application/json",
                },
                body: JSON.stringify({
                    username: state.username,
                    password: state.password
                }),
            })
            const data = await response.json();
            return data;
        }catch(err){
            console.error(err);
        }

    }

    async function axiosPostData(){
        const URL = "http://3.87.24.111:3000/user/login";
        const data = {username: state.username, password: state.password};

        try{
            const returnedData = await axios.post(URL, data);
            return returnedData;
        }catch(err){
            console.error(err);
        }
    }

  return (
    <>
        <br/>
        <form onSubmit={handleSubmit}>
            <input type="text" placeholder='username' onChange={usernameChange}></input>
            <br/>
            <input type="text" placeholder='password' onChange={passwordChange}></input>
            <br/>
            <button type="submit">Submit</button>
        </form>
        <br/>
    </>
  )
}

export default Login