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
  <main
    class="w-full gap-2 h-screen my-10 grid grid-cols-4 max-[900px]:grid-cols-2 max-[500px]:grid-cols-1 p-2"
  >
    <slot />
  </main>
  <!-- footer   x.com [.] -->
</main>
