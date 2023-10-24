import React, { useState } from 'react'
import Display from '../Display/Display';

interface LoginProps {
    onSubmit: (data: {username: string, password: string}) => void;
}

const LoginForm: React.FC<LoginProps> = ({onSubmit}) => {

    const [username, setUsername] = useState('');
    const [password, setPassword] = useState('');

    function handleSubmit(event: React.FormEvent){
        event.preventDefault();
        onSubmit({username, password});
    }
  return (
    <form onSubmit={handleSubmit}>
        <label>
            Username:
            <input type="text" value={username} onChange={(e) => setUsername(e.target.value)}/>
        </label>
        <label>
            Password:
            <input type="password" value={password} onChange={(e) => setPassword(e.target.value)}/>
        </label>
        <button type="submit">Submit</button>
    </form>

  )
}

export default LoginForm