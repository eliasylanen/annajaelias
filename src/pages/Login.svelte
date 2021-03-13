<script lang="ts">
  import { navigate } from "svelte-routing";
  import { onMount } from "svelte";
  import axios, { AxiosResponse } from 'axios';
  import { isLoggedIn } from '../../util/checkLogin'
  import InputElement from "../components/inputElement.svelte";
  import AsyncLoader from "../components/asyncLoader.svelte";
  import { keyPattern } from "../../config";

  onMount(() => {
    isLoggedIn() && navigate('/', { replace: true })
  })

  let key = '';

  $: keyMatchesPattern = key.match(keyPattern);
  $: isDisabled = !key || !keyMatchesPattern;

  let response: Promise<AxiosResponse<any>>

  const handleSubmit = (event: Event) => {
    event.preventDefault();

    response = axios.post('./api/login', { key });

    response.then(({data, status}) => {
      if (status !== 200) {
        return null;
      }

      const {user, token} = data;

      localStorage.setItem('token', token);
      sessionStorage.setItem('user', JSON.stringify(user));

      navigate('/', { replace: true });
    })
  }
</script>

<style lang="scss">
  @import '../styles/mixins';

  main {
    text-align: center;
    align-content: start;
    margin-top: 30vh;
    min-height: auto;
  }
</style>

<main class="container">
  <form>
    <InputElement type="text" placeholder="Koodi muotoa AA000" maxlength="5" bind:value={key} />
    <InputElement type="submit" on:click={handleSubmit} bind:disabled={isDisabled} value="Kirjaudu" />
  </form>

  <AsyncLoader
    {response}
    notFoundMessage="Antamasi koodi ei käy, tarkistathan sen olevan sama kuin kutsussa ja muotoa <code>AA111</code>"
    failureMessage="Hups, jotain meni pieleen. Otathan meihin yhteyttä, jos ongelma jatkuu"
  />
</main>

