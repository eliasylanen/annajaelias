<script lang="ts">
  import { navigate } from "svelte-routing";
  import { onMount } from "svelte";
  import axios, { AxiosResponse } from 'axios';
  import { isLoggedIn } from '../../util/checkLogin'
  import InputElement from "../components/inputElement.svelte";
  import { keyPattern } from "../../config";
  import AsyncLoader from '../components/asyncLoader.svelte';

  onMount(() => {
    isLoggedIn() && navigate('/', { replace: true })
  })

  let name = '';
  let email = '';
  let key = '';

  let failureMessage = 'Hups, jotain meni pieleen. Otathan meihin yhteyttä, jos ongelma jatkuu';

  $: keyMatchesPattern = key.match(keyPattern);
  $: isDisabled = !name || !email || !key || !keyMatchesPattern;

  let response: Promise<AxiosResponse<{ token: string }>>

  const handleSubmit = (event: Event) => {
    event.preventDefault();

    response = axios.post('./api/register', { name, email, key });

    response
      .then(({data, status}) => {
        if (status === 200) {
          const { token } = data;

          localStorage.setItem('token', token);

          navigate('/', { replace: true });
        }
      })
      .catch(({message}: Error) => {
        if (message.includes('403')) {
          failureMessage = 'Annetulla sähköpostiosoitteella on jo rekisteröidytty'
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
    <InputElement type="Name" placeholder="Nimi" bind:value={name} />
    <InputElement type="email" placeholder="Sähköposti" bind:value={email} />
    <InputElement type="password" pattern={keyPattern} maxlength={5} placeholder="Koodi muotoa AA111" bind:value={key} />
    <InputElement type="submit" on:click={handleSubmit} bind:disabled={isDisabled} value="Rekisteröidy" />
  </form>

  <AsyncLoader
    {response}
    notFoundMessage="Antamasi koodi ei käy, tarkistathan sen olevan sama kuin kutsussa ja muotoa <code>AA111</code>"
    {failureMessage}
  />
</main>

