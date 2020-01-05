<script>
  import Sum from "./components/Sum.svelte";
  import Users from "./Users.svelte";
  import Data from "./model.js";
  export let name;

  import { writable } from "svelte/store";

  // let prices = writable([
  //   { price: 2.57, currency: "PLN" },
  //   { price: 23.57, currency: "PLN" },
  //   { price: 21.57, currency: "PLN" },
  //   { price: 123.57, currency: "PLN" },
  //   { price: 623.57, currency: "PLN" },
  //   { price: 2.57, currency: "PLN" },
  //   { price: 4234.57, currency: "PLN" },
  //   { price: 213.57, currency: "PLN" },
  //   { price: 12.57, currency: "PLN" }
  // ]);
  let prices = [
    { price: 2.57, currency: "PLN" },
    { price: 23.57, currency: "PLN" },
    { price: 21.57, currency: "PLN" },
    { price: 123.57, currency: "PLN" },
    { price: 623.57, currency: "PLN" },
    { price: 2.57, currency: "PLN" },
    { price: 4234.57, currency: "PLN" },
    { price: 213.57, currency: "PLN" },
    { price: 12.57, currency: "PLN" }
  ];
</script>

<style>
  main {
    text-align: center;
    padding: 1em;
    max-width: 240px;
    margin: 0 auto;
  }

  h1 {
    color: #ff3e00;
    text-transform: uppercase;
    font-size: 4em;
    font-weight: 100;
  }

  @media (min-width: 640px) {
    main {
      max-width: none;
    }
  }
</style>

<svelte:head>
  <link
    rel="stylesheet"
    href="https://stackpath.bootstrapcdn.com/bootstrap/4.3.1/css/bootstrap.min.css" />
</svelte:head>
<main>
  <Sum {prices} />
</main>
