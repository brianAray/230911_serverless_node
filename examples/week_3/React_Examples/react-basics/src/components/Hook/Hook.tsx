import React, { useEffect, useState } from 'react'
import { Pokemon } from './Pokemon';

/**
 * 
 * What is a Hook?
 * 
 *  - Extra methods added to functional components to provide the same functionality as class components
 * 
 * Hooks we will be using
 *  - useState()
 *      - allows to create state variables
 *
 * What is state?
 *  - Variables that are directly tied to this component
 * 
 * 
 * Why is this important?
 *  - If you do not set a variable to be a state variable, then React will not know to re-render the component when that variable changes
 *  - We need to tie the varaible to the component, as this is not done by default
 *  - Doing this will mean that if the variable changes, then it will trigger a render
 */

function Hook() {

    // let [visibility, setVisibility] = useState(false);
    // let [counter, setCounter] = useState(0);

    let [state, setState] = useState({
        visibility: false,
        counter: 0
    })

    let [pokemon, setPokemon] = useState<Pokemon>({} as Pokemon);

    useEffect(() => {
        // console.log("useEffect Triggered");
        async function getDitto(){
            let response = await fetch('https://pokeapi.co/api/v2/pokemon/ditto');
            let responseBody = await response.json();

            console.log(responseBody);
            setPokemon(responseBody);
        }

        getDitto();
    }, []);

    // let isVisibile = true;

    // let counter = 0;

    function toggleButton(){
        console.log("Toggle function triggered");
        // isVisibile = !isVisibile;
        setState({...state, visibility: !state.visibility});
    }

    function increment(){
        // setCounter(counter + 1);
        setState({...state, counter: state.counter + 1});
    }
    function decrement(){
        // setCounter(counter - 1);
        setState({...state, counter: state.counter - 1});
    }

    return (
    <>
        <button onClick={toggleButton}>Toggle</button>

        {
            state.visibility ? <h2>Am I visible?</h2> : <></>
        }

        <button onClick={increment}>Increment</button>
        <button onClick={decrement}>Decrement</button>

        <h2>{state.counter}</h2>

        {
            pokemon.abilities ? pokemon.abilities.map((obj, index) => {
                return (
                    <h3 key={index}>{obj.ability.name}</h3>
                )
            }): <></>
        }
    </>
  )
}

export default Hook