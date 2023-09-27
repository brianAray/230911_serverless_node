const searchContainer = document.querySelector("#search_container");
const pokemonContainer = document.querySelector("#pokemon_container");

const pokemonId = document.querySelector('#id');
const pokemonName = document.querySelector("#name");
const pokemonImage = document.querySelector("#sprite");

const searchBox = document.querySelector("#search_box");
const submitButton = document.querySelector("#submit");

submitButton.addEventListener("click", asyncFetchCall);

function fetchCall(){

    let pokeId = searchBox.value;

    fetch(`https://pokeapi.co/api/v2/pokemon/${pokeId}`)
        .then((response) => response.json())
        .then((data) => {
            // call function to render
            renderHTML(data);
        })
        .catch((err) => {
            console.error(err);
        })
}

async function asyncFetchCall(){
    let pokeId = searchBox.value;
    let url = `https://pokeapi.co/api/v2/pokemon/${pokeId}`;
    try{
        let response = await fetch(url, {
            method: "GET"
        });
        let data = await response.json();
        renderHTML(data);
    }catch(err){
        console.error(err);
    }
}

async function postData() {
    try{
        const dataToSend = {key: 'value'};
        const response = await fetch('url', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(dataToSend)
        });

        if (!response.ok){
            throw new Error('Network response was not OK');
        }

        const data = await response.json();
        console.log(data);
    }catch(err){
        console.error(err);
    }
}

function renderHTML(receivedPokemon){
    pokemonId.innerText = receivedPokemon.id;
    pokemonName.innerText = receivedPokemon.name;
    pokemonImage.src = receivedPokemon.sprites.front_default;
}
