import React from 'react'
import './ListDemo.css'

function ListDemo() {

    type Person = {
        name: string;
        age: number;
    };

    let peoples: Person[] = [
        {
            name: "Mike",
            age: 34
        },
        {
            name: "Jim",
            age: 33
        },
        {
            name: "Jane",
            age: 66
        },
        {
            name: "Michelle",
            age: 76
        },
    ]

  return (
    <div>
        {
            /*
                To display each item in an array to the DOM, we use the map function
                The map function transforms each item in an array
            */
           peoples.map((obj, index) => {
                return (
                    <div className='name-div' key={index}>
                        <h1>{obj.name}</h1>
                        <h3>{obj.age}</h3>
                        <button>Click me</button>
                    </div>
                );
           })
        }
    </div>
  )
}

export default ListDemo