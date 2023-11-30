<script>
  import { Button } from "$lib/components/ui/button";
  import * as Card from "$lib/components/ui/card";
  import * as Avatar from "$lib/components/ui/avatar";
  import { Label } from "$lib/components/ui/label";
  import { Heart, Library } from "lucide-svelte";
  import { getContext } from "svelte";

  let user = { name: "Youness", username: "@dyns.ye", fev: 21, created: 6 };
  let isUser = getContext("user");
  export let sty = "";
</script>

<div class={sty}>
  {#if $isUser}
    <Card.Root>
      <Card.Header class="flex-row items-center">
        <Avatar.Root id="avatar" class="m-2">
          <Avatar.Fallback>YE</Avatar.Fallback>
        </Avatar.Root>
        <div>
          <Label for="avatar" class="text-base font-bold">{user.name}</Label>
          <Card.Description class="text-xs">{user.username}</Card.Description>
        </div>
      </Card.Header>
      <Card.Content class="flex justify-evenly m-0 p-0 pb-3">
        <Label class="text-xs text-muted-foreground">
          <span class="font-bold">favorite:</span>
          {user.fev}
        </Label>
        <Label class="text-xs text-muted-foreground">
          <span class="font-bold">Created:</span>
          {user.created}
        </Label>
      </Card.Content>
      <div class="p-6 pt-0">
        <Button variant="outline" class="w-full">
          <Heart absoluteStrokeWidth class="mr-2" />
          favorite
        </Button>
        <Button class="w-full mt-2">
          <Library absoluteStrokeWidth class="mr-2" />
          My qoutes
        </Button>
      </div>
    </Card.Root>
  {:else}
    <Card.Root>
      <Card.Header>
        <Card.Title>Get started</Card.Title>
        <Card.Description>
          Find the perfect quote for every occasion.
        </Card.Description>
      </Card.Header>
      <div class="p-6 pt-0">
        <Button variant="outline" class="w-full">Sign up</Button>
        <Button class="w-full mt-2">Log in</Button>
      </div>
    </Card.Root>
  {/if}
</div>
