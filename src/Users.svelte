<script>
  import { getUsers } from "./model.js";
  import { Button, Card } from "sveltestrap";
  import { onMount, tick } from "svelte";
  import { writable } from "svelte/store";
  import User from "./User.svelte";

  let removedUsers = writable([]);
  let users = writable([]);
  onMount(async function() {
    const res = await getUsers();
    $users = await res.json();
  });

  async function removeUser() {
    $removedUsers = [...$removedUsers, $users.pop()];
    $users = $users;
  }
</script>

<Button on:click={removeUser}>Remove</Button>
{#each $users as user}
  <div class="text-primary">{user.name}</div>
{/each}
{#each $removedUsers as user}
  <div class="text-danger">{user.name}</div>
{/each}
