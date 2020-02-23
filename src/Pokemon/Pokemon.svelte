<script>
  import { getDetails } from "./Model.js";
  export let pokemon;
  const details = getDetails(pokemon);
</script>

{#await details then info}
  <!-- {#each Object.entries(info) as [key, value]}
    {console.log(key, '?', value)}
    <div>{value}</div>
  {/each} -->
  <div class="card w-100">
    <div class="card-header">
      <h5 class="card-title">{info.name}</h5>
    </div>
    <div class="card-body">
      <span>weight: {info.weight}</span>
    </div>
  </div>
{/await}
