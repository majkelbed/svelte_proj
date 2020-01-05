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
  {:then users}
    <table>
      <thead>
        <tr>
          <td>Name</td>
          <td>Email</td>
        </tr>
      </thead>
      <tbody>
        {#each users as { name, email }}
          <tr>
            <td>{name}</td>
            <td>{email}</td>
          </tr>
        {/each}
      </tbody>
    </table>
  {:catch error}
    <p style="color: red">{error.message}</p>
  {/await}
</div>
