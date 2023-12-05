<script>
  import { Search } from "lucide-svelte";
  import * as Select from "$lib/components/ui/select";
  import { Input } from "$lib/components/ui/input";
  import { Button } from "$lib/components/ui/button";
  import { Toggle } from "$lib/components/ui/toggle";
  import { getContext } from "svelte";
  import { goto } from "$app/navigation";
  import { browser } from "$app/environment";
  import { page } from "$app/stores";
  const data = getContext("genres");

  let isOn = false;
  let searchQuery = "";
  let val = { value: "All" };
  $: queryHandler("genre", val.value);

  const queryHandler = (head, value) => {
    if (head && browser) {
      const searchParams = new URLSearchParams($page.url.searchParams);
      searchParams.delete("page");
      if (head == "genre" && value == "All") {
        searchParams.delete(head);
      } else {
        searchParams.set(head, value);
      }
      goto(`?${searchParams.toString()}`);
    }
  };
</script>

<div class="flex gap-2 justify-between my-5 max-sm:flex-col-reverse">
  <div class="flex items-center space-x-3">
    <p class="text-sm text-muted-foreground">Genres</p>
    <Select.Root preventScroll={false} bind:selected={val}>
      <Select.Trigger class="w-[180px]">
        <Select.Value name="genre" placeholder="All" />
      </Select.Trigger>
      <Select.Content class="max-h-[400px] overflow-y-auto">
        <Select.Group>
          <Select.Label>Genres</Select.Label>
          <Select.Item value="All" label="All">All</Select.Item>
          {#each $data as fruit (fruit)}
            <Select.Item value={fruit} label={fruit}>{fruit}</Select.Item>
          {/each}
        </Select.Group>
      </Select.Content>
      <Select.Input name="favoriteFruit" />
    </Select.Root>
  </div>
  <div class="flex w-full items-center space-x-1 sm:max-w-sm max-sm:w-full">
    <Toggle aria-label="author" bind:pressed={isOn} variant="outline"
      >Author</Toggle
    >
    <Input
      type="search"
      class="max-sm:flex-1"
      name={isOn ? "author" : "query"}
      placeholder="Search {isOn ? 'author' : ''}"
      bind:value={searchQuery}
    />
    <Button
      on:click={queryHandler(isOn ? "author" : "query", searchQuery)}
      variant="secondary"
    >
      <Search />
    </Button>
  </div>
</div>
