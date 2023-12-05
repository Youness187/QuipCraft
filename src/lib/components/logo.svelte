<script>
  import src from "$lib/assets/logo.svg";
  export let className = false;
</script>

<a
  href="/"
  class={className
    ? "flex justify-center h-[40px] hover:opacity-60 opacity-50"
    : "flex justify-center h-[40px] hover:opacity-90"}
>
  <img {src} alt="Logo" class="w-[40px]" />
  <span class="flex items-center p-2 font-mono font-bold text-lg"
    >QuipCraft</span
  >
</a>
