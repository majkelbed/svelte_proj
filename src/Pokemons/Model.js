export async function getPokemons() {
  let pokemons = JSON.parse(localStorage.getItem("pokemons"));
  if (pokemons === null) {
    pokemons = await fetchPokemons();
    setPokemons(pokemons);
  }
  return pokemons;
}

async function setPokemons(pokemons) {
  localStorage.setItem("pokemons", JSON.stringify(pokemons));
}

async function fetchPokemons(
  URL = "https://pokeapi.co/api/v2/pokemon",
  limit = 10
) {
  const res = await fetch(`${URL}?limit=${limit}`);
  const pokemons = await res.json();
  return pokemons.results;
}

export async function addPokemon(pokemon) {
  const pokemons = await getPokemons();
  setPokemons([...pokemons, pokemon]);
}

export async function removePokemon(id) {
  const pokemons = await getPokemons();
  const removed = pokemons.splice(id, 1);
  console.log(removed, id);
  console.log(pokemons);
  setPokemons([...pokemons]);
  return removed;
}
