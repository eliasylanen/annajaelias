<script lang="ts">
  export let distance: number;
  export let countDown: string;
</script>

<main class="container">
  {#if distance > 0}
    <h1>{countDown}</h1>
  {/if}
</main>
