import App from "./App.svelte";

const root = document.querySelector("#svelte-root");
const anchor = document.querySelector("#anchor");
const props = {
  mod: "passed mod"
};

const app = new App({
  target: root,
  anchor,
  props
});
export default app;
