<script>
  import UserCard from "$lib/components/userCard.svelte";
  import QouteCard from "$lib/components/qouteCard.svelte";
</script>

<div class="col-span-1 flex-col">
  <UserCard class="mb-2 " />
  <div>
    <h2 class="text-xl font-semibold p-2 my-2">Random</h2>
    <QouteCard />
  </div>
</div>

<div class="col-span-3 max-[900px]:col-span-1">
  <QouteCard />
</div>
