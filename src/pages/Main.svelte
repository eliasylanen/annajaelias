<script lang="ts">
  import { Link, navigate } from "svelte-routing";
  import Section from '../components/Section.svelte'
  import { logout } from "../util/logout";

  import { isLoggedIn } from '../util/checkLogin'
  import { onMount } from "svelte";

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

<Section>
  <h1>Hello World</h1>
</Section>
