<script lang="ts">
  import { onMount } from "svelte";
  import { navigate } from "svelte-routing";

  import Navigation from '../components/navigation.svelte'
  import Minutes from '../sections/minutes.svelte'
  import Map from '../sections/map.svelte'
  import RSVP from '../sections/rsvp.svelte'

  import { isLoggedIn } from '../../util/checkLogin'

  onMount(() => {
    !isLoggedIn() && navigate('/login', { replace: true })
  })
</script>

<style>
</style>

<Navigation />
<main>
  <Minutes />
  <Map />
  <RSVP />
</main>
