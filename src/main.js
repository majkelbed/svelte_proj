import App from "./App.svelte";

const target = document.querySelector("#svelte-root");
const target2 = document.querySelector("#svelte-root2");

const app = new App({
  target,
  props: {
    name: "michal"
  }
});
const app2 = new App({
  target: target2,
  props: {
    name: "michal"
  }
});

export default app;
