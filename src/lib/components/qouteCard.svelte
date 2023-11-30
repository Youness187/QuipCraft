<script>
  import { Button } from "$lib/components/ui/button";
  import * as Card from "$lib/components/ui/card";
  import { Share, Heart } from "lucide-svelte";
  export let _quote = {
    quote:
      "Affection is responsible for nine-tenths of whatever solid and durable happiness there is in our lives.",
    author: "C. S. Lewis",
    category: "happiness",
  };
</script>

<div class="col-span-1 w-full h-full">
  <Card.Root class="w-full h-full">
    <Card.Header>
      <Card.Title>{_quote.category}</Card.Title>
    </Card.Header>
    <Card.Content>
      <p class="italic indent-4">
        {_quote.quote}
      </p>
    </Card.Content>
    <Card.Footer class="flex justify-between">
      <p class="align-bottom text-sm text-gray-400">
        {_quote.author}
      </p>
      <div>
        <Button variant="ghost" class="p-2">
          <Share class="w-4 h-4" />
        </Button>
        <Button variant="ghost" class="p-2">
          <Heart class="w-4 h-4" />
        </Button>
      </div>
    </Card.Footer>
  </Card.Root>
</div>
