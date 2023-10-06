import React, { useState } from 'react'
import { useDispatch, useSelector } from 'react-redux';
import { userActions } from '../../redux/slices/userSlice';

const Login = () => {

    // classic approach using useState
    const [state, setState] = useState({
        username: "",
        password: "",
    });

    const user = useSelector((state: any) => state.user);
    const dispatch = useDispatch();

    function handleSubmit(event: any){
        event.preventDefault();
        // console.log(state);
        console.log(user);
        dispatch(userActions.setUser(state as any))
    }

    function updateUsername(event: any){
        setState({...state, username: event.target.value});
    }

    function updatePassword(event: any){
        setState({...state, password: event.target.value});
    }
  return (
    <form onSubmit={handleSubmit}>
        <input type="text" placeholder="username" onChange={updateUsername}/>
        <input type="text" placeholder="password" onChange={updatePassword}/>
        <button type="submit"></button>
    </form>
  )
}

export default Login