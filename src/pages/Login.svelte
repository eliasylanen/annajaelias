<script lang="ts">
  import { navigate } from "svelte-routing";
  import { onMount } from "svelte";
  import { isLoggedIn } from '../util/checkLogin'

  onMount(() => {
    isLoggedIn() && navigate('/', { replace: true })
  })

  let code = ''
</script>

<style lang="scss">
  @import '../styles/mixins';

  section {
    text-align: center;
  }

  input {
    display: block;
    margin-bottom: 1rem;
  }

  button {
    margin: 2rem;
  }

</style>

<section class="container">
      <input type="text" placeholder="Code" maxlength="5" bind:value={code} />
  <button type="submit">Login</button>
</section>
