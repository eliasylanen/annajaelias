<script lang="ts">
  import { onMount } from "svelte";
  import { Link, navigate } from "svelte-routing";

  import Minutes from '../sections/minutes.svelte'
  import Map from '../sections/map.svelte'

  import { isLoggedIn } from '../util/checkLogin'
  import { logout } from "../util/logout";

  onMount(() => {
    !isLoggedIn() && navigate('/login', { replace: true })
  })
</script>

<style>
  nav {
    position: fixed;
    top: 0;
    left: 0;
    right: 0;
    display: flex;
  }

  .navigation {
    display: inline-block;
    margin-right: auto;
  }
</style>

<nav>
  <div class="navigation">
    <Link id="minutes" to="#minutes">Minutes</Link>
  </div>
  <button id="logout" on:click={logout}>Logout</button>
</nav>

<main>
  <Minutes />
  <Map />
</main>
