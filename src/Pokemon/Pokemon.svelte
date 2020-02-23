<script>
  import { fade } from "svelte/transition";
  import { getDetails } from "./Model.js";
  export let pokemon;
  const details = getDetails(pokemon);
  const fadeOut = false;
</script>

{#await details then info}
  <div out:fade class="card w-100" in:fade>
    <div class="card-header">
      <h5 class="card-title">{info.name}</h5>
    </div>
    <div class="card-body">
      <span>weight: {info.weight}</span>
    </div>
  </div>
{/await}
