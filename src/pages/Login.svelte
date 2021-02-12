<script lang="ts">
  import { navigate } from "svelte-routing";
  import { onMount } from "svelte";
  import { isLoggedIn } from '../util/checkLogin'

  onMount(() => {
    isLoggedIn() && navigate('/', { replace: true })
  })
</script>

<h1>Login</h1>
