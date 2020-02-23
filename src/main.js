import App from "./App.svelte";
import Users from "./Users/Users.svelte";

const root = document.querySelector("#svelte-root");
const anchor = document.querySelector("#anchor");
const props = {
  mod: "passed mod"
};

const usersRoot = document.querySelector("#users");

const app = new App({
  target: root,
  anchor,
  props
});

fetch("https://jsonplaceholder.typicode.com/users")
  .then((response) => response.json())
  .then((json) => {
    const props = {
      users: json
    };
    const users = new Users({
      target: usersRoot,
      props
    });
  });

export default app;
