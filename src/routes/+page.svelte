<script>
  import QouteCard from "$lib/components/qouteCard.svelte";
  import Genres from "$lib/components/genres.svelte";
  import { Button } from "$lib/components/ui/button";
  import { ArrowRight, ArrowLeft } from "lucide-svelte";
  import { page } from "$app/stores";
  import { browser } from "$app/environment";
  import { goto } from "$app/navigation";

  export let data;
  const queryHandler = (head, value) => {
    if (head && browser) {
      const searchParams = new URLSearchParams($page.url.searchParams);
      searchParams.set(head, value);
      goto(`?${searchParams.toString()}`);
    }
  };
</script>

<div class="flex-1 h-fit">
  <Genres />
  <div class="w-full h-full flex-wrap flex gap-2 justify-center">
    {#if data.post.data.length}
      {#each data.post.data as _quote (_quote._id)}
        <QouteCard {_quote} />
      {/each}
    {:else}
      <QouteCard />
    {/if}
  </div>
  <div class="py-5 flex justify-between items-center px-5">
    <div>
      <p class="text-sm font-medium leading-none">
        {data.post.pagination.currentPage} of {data.post.pagination.totalPages} Pages
      </p>
    </div>
    <div>
      {#if data.post.pagination.currentPage - 1}
        <Button
          on:click={queryHandler("page", data.post.pagination.currentPage - 1)}
          variant="outline"
          size="icon"><ArrowLeft /></Button
        >
      {:else}
        <Button variant="outline" disabled size="icon"><ArrowLeft /></Button>
      {/if}
      {#if data.post.pagination.nextPage}
        <Button
          on:click={queryHandler("page", data.post.pagination.nextPage)}
          variant="outline"
          size="icon"><ArrowRight /></Button
        >
      {:else}
        <Button variant="outline" disabled size="icon"><ArrowRight /></Button>
      {/if}
    </div>
  </div>
</div>
