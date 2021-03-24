<script lang="ts">
  import { navigate } from "svelte-routing";
  import { onMount } from "svelte";
  import axios, { AxiosResponse } from 'axios';
  import { checkLogin } from '../../util/checkLogin'
  import InputElement from "../components/inputElement.svelte";
  import AsyncLoader from "../components/asyncLoader.svelte";
  import { keyPattern } from "../../config";
import type { User } from "../../types";

  onMount(async () => {
    (await checkLogin()) && navigate('/', { replace: true })
  })

  let key = '';

  $: keyMatchesPattern = key.match(keyPattern);
  $: isDisabled = !key || !keyMatchesPattern;

  let response: Promise<AxiosResponse<{ token: string, user: User }>>

  const handleSubmit = (event: Event) => {
    event.preventDefault();

    response = axios.post('./api/login', { key });

    response.then(({data, status}) => {
      if (status === 200) {
        const { token, user } = data;

        localStorage.setItem('token', token);
        sessionStorage.setItem('user', JSON.stringify(user));

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

    a {
      color: $red;
    }
  }
</style>

<main class="container">
  <form>
    <InputElement type="text" placeholder="Koodi muotoa AA000" maxlength="5" bind:value={key} />
    <InputElement type="submit" on:click={handleSubmit} bind:disabled={isDisabled} value="Kirjaudu" />
  </form>

  <p>
    Jos sinulla ei ole koodia, rekisteröidy
    <a href="/register">
      tästä
    </a>
  </p>

  <AsyncLoader
    {response}
    notFoundMessage="Antamasi koodi ei käy, tarkistathan sen olevan sama kuin kutsussa ja muotoa <code>AA111</code>"
    failureMessage="Hups, jotain meni pieleen. Otathan meihin yhteyttä, jos ongelma jatkuu"
  />
</main>

