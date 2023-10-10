import React, { useState } from 'react'
import Output from './Output/Output';

function Greeting() {

    let [changedText, setChangedText] = useState(false);

    function changeTextHandler(){
        setChangedText(!changedText);
    }

  return (
    <div>
        <h2>Hello World</h2>
        {changedText && <Output text="I have been changed"/>}
        {!changedText && <Output text="Nice to meet you"/>}
        <button onClick={changeTextHandler}>Change Text</button>
    </div>
  )
}

export default Greeting