<script lang="ts">
  import { onMount } from "svelte";
  import { navigate } from "svelte-routing";

  import Navigation from '../components/navigation.svelte'
  import Minutes from '../sections/minutes.svelte'
  import Map from '../sections/map.svelte'
  import RSVP from '../sections/rsvp.svelte'

  import { checkLogin } from '../../util/checkLogin'
  import type { User } from "../../types";

  let user: User;

  onMount(async () => {
    user = await checkLogin();

    !user && navigate('/login', { replace: true })
  })
</script>

<style>
</style>

{#if user}
<Navigation />
<main>
  <Minutes {user} />
  <Map />
  <RSVP />
</main>
{/if}
