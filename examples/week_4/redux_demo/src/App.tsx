import React from 'react';
import './App.css';
import Login from './Components/Login/Login';
import { useSelector } from 'react-redux';

function App() {
  const user = useSelector((state: any) => state.user)
  return (
    <div className="App">
        {user.username}
        <Login/>
    </div>
  );
}

export default App;
