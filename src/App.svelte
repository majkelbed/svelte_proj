<script>
  import Pokemons from "./Pokemons/Pokemons.svelte";
  export let mod;
</script>

<svelte:head>
  <link
    rel="stylesheet"
    href="https://stackpath.bootstrapcdn.com/bootstrap/4.3.1/css/bootstrap.min.css" />
</svelte:head>
<Pokemons />
<h1>Hello Svelte! {mod}</h1>
