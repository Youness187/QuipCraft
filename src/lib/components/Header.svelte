<script>
  import { Button } from "./ui/button";
  import Logo from "./logo.svelte";
</script>

<header class="px-5 py-3 flex items-center justify-between m-2">
  <Logo />
  <nav>
    <a href="/"><Button variant="link" class="font-medium mr-1">Home</Button></a
    >
    <a href="/about"
      ><Button variant="link" class="font-medium">About</Button></a
    >
  </nav>
</header>
