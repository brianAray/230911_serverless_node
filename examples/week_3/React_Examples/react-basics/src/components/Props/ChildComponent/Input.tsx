import React from 'react'

function Input(props: any) {


    function changeText(event: any){
        props.setMessage(event.target.value);
    }

  return (
    <>
        <input type="text" onChange={changeText}></input>
    </>
  )
}

export default Input