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

  let email = '';
  let key = '';

  $: keyMatchesPattern = key.match(keyPattern);
  $: isDisabled = !key || !keyMatchesPattern || !email;

  let response: Promise<AxiosResponse<{ token: string }>>

  const handleSubmit = (event: Event) => {
    event.preventDefault();

    response = axios.post('./api/register', { email, key });

    response.then(({data, status}) => {
      if (status === 200) {
        const { token } = data;

        localStorage.setItem('token', token);

        navigate('/', { replace: true });
      }
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
    <InputElement type="email" placeholder="Sähköposti" maxlength="5" bind:value={key} />
    <InputElement type="text" placeholder="Koodi muotoa AA000" maxlength="5" bind:value={key} />
    <InputElement type="submit" on:click={handleSubmit} bind:disabled={isDisabled} value="Rekisteröidy" />
  </form>

  <AsyncLoader
    {response}
    notFoundMessage="Antamasi koodi ei käy, tarkistathan sen olevan sama kuin kutsussa ja muotoa <code>AA111</code>"
    failureMessage="Hups, jotain meni pieleen. Otathan meihin yhteyttä, jos ongelma jatkuu"
  />
</main>

