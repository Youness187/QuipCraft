<script>
  import { Button } from "$lib/components/ui/button";
  import * as Card from "$lib/components/ui/card";
  import UserCardL from "./UserCardL.svelte";
  import { getContext } from "svelte";

  let user = { name: "Youness", username: "@dyns.ye", fev: 21, created: 6 };
  let isUser = getContext("user");
  export let sty = "";
</script>

<div class={sty}>
  {#if $isUser}
    <UserCardL />
  {:else}
    <Card.Root>
      <Card.Header>
        <Card.Title>Get started</Card.Title>
        <Card.Description>
          Find the perfect quote for every occasion.
        </Card.Description>
      </Card.Header>
      <div class="p-6 pt-0">
        <a href="/signup"
          ><Button variant="outline" class="w-full">Sign up</Button></a
        >
        <a href="login"><Button class="w-full mt-2">Log in</Button></a>
      </div>
    </Card.Root>
  {/if}
</div>
