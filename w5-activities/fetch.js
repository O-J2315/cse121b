// fetch.js
const url = "https://pokeapi.co/api/v2/pokemon/ditto";
const urlList = "https://pokeapi.co/api/v2/pokemon";

let results = null;
async function getPokemon(url) {
  const response = await fetch(url);
  //check to see if the fetch was successful
  if (response.ok) {
    // the API will send us JSON...but we have to convert the response before we can use it
    // .json() also returns a promise...so we await it as well.
    const data = await response.json();
    doStuff(data);
  }
}
function doStuff(data) {
  results = data;
  console.log("first: ", results);
  let outputElement = document.querySelector("#output");
  const html = `<h1>${results.name}</h1>
                <img src = '${results.sprites.front_default}' alt = 'Image of ${results.name}'>`;
  outputElement.innerHTML = html;
}

async function getPokemonList(urlList) {
    let response = await fetch(urlList);
    if (response.ok) {
        const data = await response.json();
        doStuffList(data);
    }
}


function doStuffList(data) {
    console.log(data);
    const outputElementList = document.querySelector("#outputList");
    const pokeList = data.results;
    pokeList.forEach((pokemon) => {
        const html = `<li>${pokemon.name}</li>`;
        outputElementList.innerHTML += html;
    });

}

getPokemon(url);
console.log("second: ", results);

getPokemonList(urlList);