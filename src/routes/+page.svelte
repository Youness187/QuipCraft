<script>
  import UserCard from "$lib/components/userCard.svelte";
  import QouteCard from "$lib/components/qouteCard.svelte";
  import { getContext } from "svelte";
  let user = getContext("user");
  const quoteData = [
    {
      quote:
        "If one is desperate for love, I suggest looking at one's friends and family and see if love is all around. If not, get a new set of friends, a new family.",
      author: "Jasmine Guy",
      category: "love",
    },
    {
      quote:
        "The tree of knowledge is not the tree of life! And yet can we cast out of our spirits all the good or evil poured into them by so many learned generations? Ignorance cannot be learned.",
      author: "Gerard De Nerval",
      category: "knowledge",
    },
    {
      quote:
        "The moral flabbiness born of the exclusive worship of the Bitch-Goddess success. That - with the squalid cash interpretation put on the word success - is our national disease.",
      author: "James, William",
      category: "success",
    },
    {
      quote:
        "Boxing is the only sport you can get your brain shook, your money took and your name in the undertaker book.",
      author: "Joe Frazier",
      category: "money",
    },
    {
      quote:
        "If you must be mad, be it not for the things of the world. Be mad with the love of God.",
      author: "Ramakrishna",
      category: "god",
    },
  ];
</script>

<div class="col-span-1 flex-col">
  <UserCard class="mb-2 " />
  <div>
    {#if $user}
      <h2 class="text-xl font-semibold p-2 my-2">My Quotes</h2>
    {:else}
      <h2 class="text-xl font-semibold p-2 my-2">Random</h2>
    {/if}
    <QouteCard
      _quote={{
        quote:
          "Success usually comes to those who are too busy to be looking for it.",
        author: "Thoreau",
        category: "success",
      }}
    />
  </div>
</div>
<div class="col-span-3 max-[900px]:col-span-1">
  <div class="w-full h-full grid grid-cols-2 grid-rows-3 gap-2">
    {#each quoteData as _quote}
      <QouteCard {_quote} />
    {/each}
  </div>
</div>
