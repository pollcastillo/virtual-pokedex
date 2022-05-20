const nextPokemon = document.getElementById('next');
const prevPokemon = document.getElementById('prev');
const $DOM = document.getElementById('BODY');

let pokeIndex = 1;

const pokemon = {
  $pic: document.getElementById('pokemon'),
  $name: document.getElementById('name'),
  $exp: document.getElementById('exp'),
  $weight: document.getElementById('weight'),
  $number: document.getElementById('number'),
  $abilities: document.getElementById('abilities'),
}

const renderPokemon = (image, name, exp, weight, number, abilities, type) => {
  pokemon.$pic.setAttribute('src', image);
  pokemon.$name.innerHTML = name;
  pokemon.$exp.innerHTML = exp;
  pokemon.$weight.innerHTML = weight;
  pokemon.$number.innerHTML = number;
  
  abilities.forEach(ability => {
    const p = document.createElement('spam');
    p.innerHTML = JSON.stringify(ability.ability.name);
    pokemon.$abilities.appendChild(p);
  });

  console.log(type)
  
  if (type == "grass") {
    console.log("is grass");
    $DOM.setAttribute('style', 'background: #57CC99');
  } else if (type == "fire") {
    $DOM.setAttribute('style', 'background: #F93943');
  } else if (type == "water") {
    $DOM.setAttribute('style', 'background: #59A5D8');
  } else if (type == "bug") {
    $DOM.setAttribute('style', 'background: #D9B26F');
  } else if (type == "normal") {
    $DOM.setAttribute('style', 'background: #404447');
  } else if (type == "poison") {
    $DOM.setAttribute('style', 'background: #533A7B');
  } else if (type == "electric") {
    $DOM.setAttribute('style', 'background: #F4C95D');
  } else if (type == "ground") {
    $DOM.setAttribute('style', 'background: #523A34');
  } else if (type == "fairy") {
    $DOM.setAttribute('style', 'background: #FF4F79');
  } else if (type == "fighting") {
    $DOM.setAttribute('style', 'background: #1C2B1E');
  } else if (type == "psychic") {
    $DOM.setAttribute('style', 'background: #9DACFF');
  } else if (type == "rock") {
    $DOM.setAttribute('style', 'background: #373E40');
  } else if (type == "ghost") {
    $DOM.setAttribute('style', 'background: #161616');
  } else if (type == "ice") {
    $DOM.setAttribute('style', 'background: #C3CCFF')
  }
}

nextPokemon.addEventListener('click', (ev) => {
  ev.preventDefault;
  if (pokeIndex >= 200) {
    pokeIndex = 1;
  } else if (pokeIndex < 200) {
    pokeIndex++;
  }

  console.log(pokeIndex);
  localStorage.setItem('pokeIndex', pokeIndex);

  location.reload();
});

prevPokemon.addEventListener('click', (ev) => {
  ev.preventDefault;
  if (pokeIndex > 1) {
    pokeIndex--;
  } else if (pokeIndex == 1) {
    pokeIndex = 200;
  }

  console.log(pokeIndex);
  localStorage.setItem('pokeIndex', pokeIndex);

  location.reload()
});

let localStorageData = localStorage.getItem('pokeIndex');
pokeIndex = localStorageData;

function getData () {
  fetch(`https://pokeapi.co/api/v2/pokemon/${pokeIndex}`)
    .then(res => res.json())
    .then(pokemon => {
      renderPokemon(pokemon.sprites.front_default, pokemon.name, pokemon.base_experience, pokemon.weight, pokemon.id, pokemon.abilities, pokemon.types[0].type.name);
    });
}

getData();