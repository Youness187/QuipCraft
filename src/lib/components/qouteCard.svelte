<script>
  import { Button } from "$lib/components/ui/button";
  import * as Card from "$lib/components/ui/card";
  import { Copy, CheckCircle2 } from "lucide-svelte";
  import { Badge } from "$lib/components/ui/badge";

  let cp = false;
  export let _quote = {
    quoteGenre: "Not Found",
    quoteText: "Let me alone, and go in search of someone else.",
    quoteAuthor: "Ali ibn Abi Talib",
  };
</script>

<div
  class="flex-1 md-[680px]:max-w-[375px] max-h-[375px] flex md:justify-center items-center"
>
  <Card.Root
    class="min-w-[320px] w-full h-full flex flex-col justify-between hover:bg-stone-900/30 "
  >
    <Card.Header>
      <div>
        <Badge variant="outline">{_quote.quoteGenre}</Badge>
      </div>
    </Card.Header>
    <Card.Content>
      <blockquote class="italic indent-3">
        {_quote.quoteText}
      </blockquote>
    </Card.Content>
    <Card.Footer class="flex justify-between">
      <div>
        <Button
          variant="ghost"
          class="p-2"
          on:click={() => {
            cp = true;
            let q = _quote.quoteText;
            navigator.clipboard.writeText(q);
            let time = setTimeout(() => {
              cp = false;
              clearTimeout(time);
            }, 500);
          }}
        >
          {#if cp}
            <CheckCircle2 class="w-4 h-4" />
          {:else}
            <Copy class="w-4 h-4" />
          {/if}
        </Button>
      </div>
      <p class="align-bottom text-sm text-gray-400">
        {_quote.quoteAuthor}
      </p>
    </Card.Footer>
  </Card.Root>
</div>
