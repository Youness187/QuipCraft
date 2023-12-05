<script>
  import { setContext } from "svelte";
  import "../app.pcss";
  import Header from "$lib/components/Header.svelte";
  import { writable } from "svelte/store";
  import Footer from "$lib/components/Footer.svelte";
  export let data;
  const genres = writable(data.post.data);
  setContext("genres", genres);
</script>

<svelte:head>
  <title>Home</title>
</svelte:head>

<main class="w-full max-w-6xl mx-auto">
  <!-- Header           create/login -->
  <Header />

  <main class="w-full gap-2 my-5 flex p-2">
    <slot />
  </main>
  <!-- footer   x.com [.] -->
  <Footer />
</main>
