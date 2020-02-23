<script>
  export let users;
  let name;
  let email;
  function add() {
    users = [...users, { name, email }];
    name = "";
    email = "";
  }
</script>

{#each users as user}
  <div>
    <a href="/users?id={user.id}">{user.email}</a>
    <span class="ml-2">{user.name}</span>
  </div>
{/each}
<!-- <div>
  <input type="text" bind:value={email} />
  <input type="text" bind:value={name} />
  <button on:click={add}>Dodaj</button>
</div> -->
