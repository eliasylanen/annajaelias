<script lang="ts">
  import { navigate } from "svelte-routing";
  import { onMount } from "svelte";
  import axios from 'axios';
  import { isLoggedIn } from '../../util/checkLogin'
  import LoadingIcon from "../components/loadingIcon.svelte";

  onMount(() => {
    isLoggedIn() && navigate('/', { replace: true })
  })

  let code = '';
  let loading = false;
  let error = '';

  const onSubmit = async (event: Event) => {
    event.preventDefault();

    loading = true;

    const { data, status } = await axios.post('./api/login', {
      key: code,
    })

    loading = false;

    if (status !== 200) {
      return error = 'Invalid key'
    }

    const {user, token} = data;

    localStorage.setItem('token', token);
    sessionStorage.setItem('user', JSON.stringify(user));

    navigate('/', { replace: true });
  }
</script>

<style lang="scss">
  @import '../styles/mixins';
  input {
    display: block;
    margin-bottom: 1rem;
  }
</style>

<form class="container">
  {#if loading}
    <LoadingIcon />
  {/if}

  <input type="text" placeholder="Code" maxlength="5" bind:value={code} />
  <input type="submit" on:click={onSubmit} value="Login" />
</form>
