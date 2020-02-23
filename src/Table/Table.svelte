<script>
  import { onMount } from "svelte";
  import { getItems } from "./Model.js";
  import { Pagination, PaginationItem, PaginationLink } from "sveltestrap";

  export let items;
  export let columns;
  let page = 1;
  async function next() {
    items = await getItems(items.next);
    page++;
  }
  async function prev() {
    items = await getItems(items.previous);
    page--;
  }
  async function first() {
    items = await getItems();
    page = 1;
  }
</script>

<table class="m-2">
  <thead>
    {#each columns as column}
      <th class="p-2 border border-dark">{column}</th>
    {/each}
  </thead>
  <tbody>
    {#await items then items}
      {#each items.results as item}
        <tr>
          {#each columns as column}
            <td class="p-2 border">{item[column]}</td>
          {/each}
        </tr>
      {/each}
    {/await}
  </tbody>
</table>
<div>

  <Pagination ariaLabel="Page navigation example">
    <PaginationItem disabled={page === 1}>
      <PaginationLink first on:click={first} href="#" />
    </PaginationItem>
    <PaginationItem disabled={page === 1}>
      <PaginationLink previous on:click={prev} href="#" />
    </PaginationItem>
    {#if page >= 2}
      <PaginationItem>
        <PaginationLink href="#" on:click={prev}>{page - 1}</PaginationLink>
      </PaginationItem>
    {/if}
    <PaginationItem active>
      <PaginationLink href="#">{page}</PaginationLink>
    </PaginationItem>
    <PaginationItem>
      <PaginationLink href="#" on:click={next}>{page + 1}</PaginationLink>
    </PaginationItem>
    <PaginationItem>
      <PaginationLink next href="#" on:click={next} />
    </PaginationItem>
  </Pagination>

</div>
