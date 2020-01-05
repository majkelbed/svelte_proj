<script>
  import { getUsers } from "./model.js";
  async function prepUsers() {
    const res = await getUsers();
    const users = await res.json();
    return users;
  }
</script>

<div class="user">
  {#await prepUsers()}
    <p>...waiting</p>
  {:then response}
    <p>The number is {response}</p>
  {:catch error}
    <p style="color: red">{error.message}</p>
  {/await}
</div>
