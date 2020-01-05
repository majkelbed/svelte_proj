<script>
  import { onMount } from "svelte";
  import { setContext } from "svelte";
  import { writable } from "svelte/store";
  import Price from "./Price.svelte";

  export let prices = [];
  let sum = 0;

  onMount(() => {
    summary();
  });

  function summary() {
    sum = prices.reduce((sum, label) => (sum += label.price), 0);
  }
</script>

{#each prices as { price, currency }}
  <Price on:priceUpdate={summary} bind:price {currency} />
{/each}
<div class="text-danger">Total: {sum}</div>
