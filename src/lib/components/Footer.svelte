<script>
  import Logo from "./logo.svelte";
  import { Separator } from "$lib/components/ui/separator";
</script>

<footer
  class="mb-14 mt-10 flex justify-center items-center gap-10 flex-wrap px-3"
>
  <div class="flex justify-start items-center gap-10">
    <div>
      <Logo className={true} />
    </div>
    <Separator orientation="vertical" class="h-10 w-[2px]" />
    <div class="flex flex-col h-full">
      <a
        class="text-sm py-1 text-white/75 font-medium leading-none hover:text-white"
        href="https://x.com/ye1870"
        target="_blank">x.com</a
      >
      <a
        class="text-sm py-1 text-white/75 font-medium leading-none hover:text-white"
        href="https://github.com/Youness187"
        target="_blank">github.com</a
      >
    </div>
  </div>
  <!-- <Alert.Root class="max-w-sm">
    <Alert.Description class="p-5">
      <blockquote class="italic">
        The best way to know God is to love many things.
      </blockquote>
      <p class="align-bottom text-sm text-gray-400 pt-3">Vincent Van Gogh</p>
    </Alert.Description>
  </Alert.Root> -->
</footer>
