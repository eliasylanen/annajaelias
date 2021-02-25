<script lang="ts">
  import InputElement from '../components/inputElement.svelte';
  import { logout } from "../../util/logout";

</script>

<style lang="scss">
  @import '../styles/mixins';

  nav {
    position: fixed;
    top: 0;
    left: 0;
    right: 0;
    display: flex;
    z-index: 2;
    padding: 1rem;
    background-color: $red;
    box-shadow: 0px 2px 5px 0px rgba(0,0,0,0.75);

    .navigation {
      display: inline-block;
      margin-right: auto;

      a {
        margin-right: .75rem;
      }
    }
  }

</style>

<nav>
  <div class="navigation">
    <a id="minutes" href="#minutes">Päivän kulku</a>
    <a id="map" href="#map">Lahjalista</a>
    <a id="login" href="#login">Ilmoittaudu</a>
  </div>
  <InputElement type="button" on:click={logout} value="Logout" />
</nav>
