<script>
  import { Button } from "$lib/components/ui/button";
  import * as Card from "$lib/components/ui/card";
  import { apiData, drinkNames } from "./file.js";
  import jq from "jquery";
  import { getContext, onMount } from "svelte";
  let imgBj;
</script>

<Card.Root class={`bg-[url('${0}')]`}>
  <Card.Header>
    <Card.Title></Card.Title>
    <Card.Description>Card Description</Card.Description>
  </Card.Header>
  <Card.Content>
    <p>Card Content</p>
  </Card.Content>
  <Card.Footer>
    <p>Card Footer</p>
  </Card.Footer>
</Card.Root>
