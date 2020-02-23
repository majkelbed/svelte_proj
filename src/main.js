import App from "./App.svelte";
import Users from "./Users/Users.svelte";
import User from "./User/User.svelte";

const url = new URL(window.location);
const path = window.location.pathname;

switch (path) {
  case "/users":
    let id = url.searchParams.get("id");
    const usersRoot = document.querySelector("#users");
    if (!id) {
      fetch(`https://jsonplaceholder.typicode.com/users`)
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
    } else {
      fetch(`https://jsonplaceholder.typicode.com/users/${id}`)
        .then((response) => response.json())
        .then((json) => {
          console.log(json);
          const props = {
            user: json
          };
          const user = new User({
            target: usersRoot,
            props
          });
        });
    }

    break;
  default:
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
    break;
}

export default app;
