import React from 'react'

function EventsDemo() {

    function clickEventTriggered(){
        console.log("Click event triggered");
    }

    function hoverEventTriggered(){
        console.log("Hover event triggered");
    }

    function inputChanged(event: React.ChangeEvent<HTMLInputElement>){
        console.log("Input changed!");
        console.log(event.target.value);
    }

  return (
    <>
        {/* To write JavaScript in JSX, it has to be within {} */}
        <button onClick={clickEventTriggered}>Click Event</button>
        <button onMouseOver={hoverEventTriggered}>Hover Event</button>
        <input type="text" placeholder="Username" onChange={inputChanged}/>
    </>
  )
}

export default EventsDemo