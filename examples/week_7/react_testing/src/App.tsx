import './App.css';
import LoginContainer from './Login/LoginContainer';
import Login from './Login/LoginForm/LoginForm';
import Button from './exercise_1/Button';
import Input from './exercise_2/Input';
import Form from './exercise_3/Form';
import Counter from './exercise_4/Counter';

function App() {



  return (
    <div className="App">
      {/* <Button label="Click Me" onClick={() => console.log("Hello")}/>
      <Input label="Username" type="text" onChange={(inputValue) => console.log(inputValue)}/>
      <Form onSubmit={(data) => console.log(data)}/>
      <Counter/> */}
      <LoginContainer/>
    </div>
  );
}

export default App;
