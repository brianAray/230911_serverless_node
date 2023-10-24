import React, { useState } from 'react'

interface FormProps {
    onSubmit: (data: {username: string, password: string}) => void;
}

const Form: React.FC<FormProps> = ({onSubmit}) => {

    const [username, setUsername] = useState('');
    const [password, setPassword] = useState('');

    const handleSubmit = (event: React.FormEvent) => {
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

export default Form