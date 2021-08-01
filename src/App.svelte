<script lang="ts">
  import { Router, Route } from "svelte-routing";
  import Login from "./pages/Login.svelte";
  import Register from "./pages/Register.svelte";
  import Main from "./pages/Main.svelte";
  import Counter from "./pages/Counter.svelte";
  import { releaseDay } from '../config';

  export const url = '';

  let showCounterOnInitialDraw = true
  let now: number;

  $: distance = releaseDay - now;

  $: days = Math.floor(distance / (1000 * 60 * 60 * 24));
  $: hours = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
  $: minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
  $: seconds = Math.floor((distance % (1000 * 60)) / 1000);

  $: countDown = `${days}d ${hours}h ${minutes}m ${seconds}s`;


  setInterval(() => {
    showCounterOnInitialDraw = false;
    now = Date.now()
  }, 1000);
</script>

{#if !isNaN(releaseDay) && distance > 0 || showCounterOnInitialDraw}
  <Counter {distance} {countDown} />
{:else}
  <Router {url}>
    <Route path="/" component={Main} />
    <Route path="login" component={Login} />
    <Route path="register" component={Register} />
  </Router>
{/if}


