<script>
  import src from "$lib/assets/logo.svg";
  import { getContext } from "svelte";
  import { Button } from "./ui/button";
  import { Plus, UserRound } from "lucide-svelte";
  let user = getContext("user");
</script>

<header class="px-5 py-3 flex items-center justify-between m-2">
  <a href="/" class="flex justify-center h-[40px] hover:opacity-90">
    <img {src} alt="Logo" class="w-[40px]" />
    <span class="flex items-center p-2 font-mono font-bold text-lg"
      >QuipCraft</span
    >
  </a>
  <nav>
    {#if $user}
      <Button
        class="font-medium"
        on:click={() => {
          $user = 0;
        }}
      >
        <Plus class="mr-2 w-6 h-6" />
        Create
      </Button>
    {:else}
      <Button
        class="font-medium"
        on:click={() => {
          $user = 1;
        }}
      >
        <UserRound class="mr-2 w-6 h-6" absoluteStrokeWidth />
        Log in
      </Button>
    {/if}
  </nav>
</header>
