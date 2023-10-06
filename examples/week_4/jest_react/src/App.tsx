import React from 'react';
import logo from './logo.svg';
import './App.css';
import Greeting from './Components/Greeting/Greeting';
import Async from './Components/Async/Async';

function App() {
  return (
    <div className="App">
      <Greeting/>
      <Async/>
    </div>
  );
}

export default App;
