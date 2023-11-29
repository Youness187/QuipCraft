<script>
  import { setContext } from "svelte";
  import "../app.pcss";
  import Header from "$lib/components/Header.svelte";
  import { writable } from "svelte/store";
  const user = writable();
  user.set(0);
  setContext("user", user);
</script>

<main class="w-full max-w-6xl mx-auto">
  <!-- Header           create/login -->
  <Header />
  <slot />
  <!-- footer   x.com [.] -->
</main>
