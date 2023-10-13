import axios from "axios";
import { useState } from "react";
import Confirm from "../Confirm/Confirm";

function Register() {

    const [username, setUsername] = useState('');
    const [password, setPassword] = useState('');
    const [email, setEmail] = useState('');

    const [isConfirming, setIsConfirming] = useState(false);
    const [confirmationCode, setConfirmationCode] = useState(0);

    async function registerUser () {
        try{
            const response = await axios.post('http://localhost:3000/users', {
                username,
                password,
                email
            });
            console.log(response.data);
            setIsConfirming(true);
        }catch(err){
            console.error(err);
        }
    }

    async function confirmUser() {
        try{
            const response = await axios.post('http://localhost:3000/confirm', {
                username,
                confirmationCode
            });
            console.log(response.data);
            setIsConfirming(false);
        }catch(err){
            console.error(err);
        }
    }



    return (
        <>
            {
                !isConfirming ?
                
                    <div>
                        <h2>Register</h2>
                        <input
                            type="text"
                            placeholder="Username"
                            onChange={(e) => setUsername(e.target.value)}
                        />
                        <input
                            type="password"
                            placeholder="Password"
                            onChange={(e) => setPassword(e.target.value)}
                        />
                        <input
                            type="email"
                            placeholder="Email"
                            onChange={(e) => setEmail(e.target.value)}
                        />
                        <button onClick={registerUser}>Register</button>
                    </div>
                    :
                    <Confirm
                        setConfirmationCode={setConfirmationCode}
                        confirmUser={confirmUser}
                    />

            }
        </>
    )
}

export default Register