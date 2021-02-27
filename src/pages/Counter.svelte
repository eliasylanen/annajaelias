<script lang="ts">
  import axios, { AxiosResponse } from "axios";
  import { keyPattern } from "../../config";

  import InputElement from '../components/inputElement.svelte';
  import AsyncLoader from "../components/asyncLoader.svelte";

  export let distance: number;
  export let countDown: string;


  let key = '';
  let email= '';

  let response: Promise<AxiosResponse>;

  const pattern = keyPattern;

  $: keyMatchesPattern = key.match(pattern);
  $: isDisabled = !keyMatchesPattern || !email;

  const handleSubmit = (event: Event) => {
    event.preventDefault();
    response = axios.post('./api/subscribe', {
      key,
      email
    })
  }
</script>

<style lang="scss">
  @import '../styles/mixins';
  main {
    text-align: center;
    align-content: start;
    margin-top: 3rem;
    min-height: auto;

    img {
      width: 7.5rem;
      display: block;
      margin: 2rem auto;
    }

    h1, p {
      margin: auto;
    }

    h1 {
      font-size: 2rem;
    }
    p {
      font-size: 1.5rem;
    }
  }
</style>

<main class="container">
  {#if distance > 0}
    <img src="/assets/logo.png" alt="Logo">
    <p>
      Anna sähköpostiosoitteesi ja kutsun mukana tullut koodi saadaksesi muistutuksen, kun ilmoittautuminen aukeaa
    </p>
    <h1>
      {countDown} <br />
    </h1>
    <p>kuluttua</p>

    <form>
      <fieldset>
        <InputElement type="text" placeholder="Koodi muotoa AA111" {pattern} maxlength={5} bind:value={key} />
        <InputElement type="email" placeholder="Sähköposti" bind:value={email} />
      </fieldset>
      <InputElement type="submit" on:click={handleSubmit} value="Lähetä" bind:disabled={isDisabled} />
    </form>
    <AsyncLoader
      {response}
      successMessage="Kiitos! Lähetämme muistutuksen antamaasi sähköpostiin, kun ilmoittautuminen avataan"
      notFoundMessage="Antamasi koodi ei käy, tarkistathan sen olevan sama kuin kutsussa ja muotoa <code>AA111</code>"
      failureMessage="Hups, jotain meni pieleen. Otathan meihin yhteyttä, jos ongelma jatkuu"
    />
  {/if}
</main>
