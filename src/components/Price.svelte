<script>
  import { writable } from "svelte/store";
  import { createEventDispatcher } from 'svelte';

const dispatch = createEventDispatcher();
  export let price = 0.0;
  export let currency = "PLN";

  function increment() {
    price++;
    dispatch('priceUpdate');
  }
</script>

<div class="text-primary">
  {price} {currency}
  <button on:click={increment}>+1</button>
</div>
