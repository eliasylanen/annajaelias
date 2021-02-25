<script lang="ts">
  import { navigate } from "svelte-routing";
  import { onMount } from "svelte";
  import axios, { AxiosResponse } from 'axios';
  import { isLoggedIn } from '../../util/checkLogin'
  import InputElement from "../components/inputElement.svelte";
  import AsyncLoader from "../components/asyncLoader.svelte";


  onMount(() => {
    isLoggedIn() && navigate('/', { replace: true })
  })

  let key = '';

  let response: Promise<AxiosResponse<any>>

  const onSubmit = (event: Event) => {
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
</style>

<form class="container">
  <InputElement type="text" placeholder="AA000" maxlength="5" bind:value={key} />
  <InputElement type="submit" on:click={onSubmit} value="Login" />
</form>

<AsyncLoader
  successMessage="Kiitos! Lähetämme muistutuksen antamaasi sähköpostiin, kun ilmoittautuminen avataan"
  notFoundMessage="Antamasi koodi ei käy, tarkistathan sen olevan sama kuin kutsussa ja muotoa <code>AA111</code>"
  failureMessage="Hups, jotain meni pieleen. Otathan meihin yhteyttä, jos ongelma jatkuu"
/>
