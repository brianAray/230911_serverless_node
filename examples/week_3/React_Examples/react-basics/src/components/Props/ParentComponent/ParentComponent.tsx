import React, { useState } from 'react'
import Button from '../ChildComponent/Button'
import Input from '../ChildComponent/Input';

function ParentComponent() {

  let [message, setMessage] = useState("hello there");


  return (
    <>
        <Button message="button1" bgColor="red" isRounded="true"/>
        <Button message="button2" bgColor="lightblue" isRounded="false"/>

        <h2>{message}</h2>
        <Input setMessage={setMessage}/>
    </>
  )
}

export default ParentComponent