<script>
  import {
    getPokemons,
    addPokemon as add,
    removePokemon as remove
  } from "./Model.js";
  import Pokemon from "../Pokemon/Pokemon.svelte";

  let pokemons = [];
  getPokemons().then(p => (pokemons = p));
  let name = "";
  let weight = 0;
  async function addPokemon() {
    await add({ name, weight });
    name = "";
    weight = 0;
    getPokemons().then(p => (pokemons = p));
  }
  async function removePokemon(index) {
    await remove(index);
    getPokemons().then(p => (pokemons = p));
  }
</script>

<div class="py-1">
  {#each pokemons as pokemon, index (pokemon.name)}
    <div class="d-flex align-items-center py-1">
      <button on:click={() => removePokemon(index)} class="btn btn-danger mr-2">
        Usuń
      </button>
      <Pokemon {pokemon} />
    </div>
  {/each}
</div>
<div>
  Name:
  <input bind:value={name} type="text" />
  Weight:
  <input bind:value={weight} type="number" />
  <button on:click={addPokemon}>Add pokemon</button>
</div>
