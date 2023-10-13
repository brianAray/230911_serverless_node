import axios from "axios";
import { useState } from "react"
import Homepage from "../Homepage/Homepage";

function Login() {

    const [username, setUsername] = useState('');
    const [password, setPassword] = useState('');

    const [isLoggedIn, setIsLoggedIn] = useState(false);
    const [userData, setUserData] = useState<any>({});


    async function loginUser() {
        try{
            const response = await axios.post('http://localhost:3000/login', {
                username,
                password
            });
            console.log(response.data);
            setUserData(response.data);
            setIsLoggedIn(true);
        }catch(err){
            console.error(err);
        }
    }

  return (
    <>
        {
            !isLoggedIn ?
                
                <>
                    <h2>Login</h2>
                    <input
                        type="text"
                        placeholder='Username'
                        onChange={(e) => setUsername(e.target.value)}
                    />
                    <input
                        type="password"
                        placeholder='Password'
                        onChange={(e) => setPassword(e.target.value)}
                    />
                    <button onClick={loginUser}>Login</button>
                </>
                :
                <Homepage userData={userData}/>
        }
    </>
  )
}

export default Login