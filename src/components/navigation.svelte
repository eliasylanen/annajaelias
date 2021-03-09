<script lang="ts">
  import { logout } from "../../util/logout";

  let active = false;
</script>

<style lang="scss">
  @import '../styles/mixins';

  @include s {
    .navigation {
      display: none !important;
    }
  }

  @include m {
    .mobileNavigation {
      display: none !important;
    }
  }

  .active {
    overflow: hidden !important;
    transform: translateX(0%) !important;
  }

  nav {
    background-color: $red;
    padding: 1rem;
    z-index: 2;

    ul {
      list-style: none;
      padding: 0;
    }
  }
  .navigation {
    display: flex;
    position: fixed;
    top: 0;
    left: 0;
    right: 0;
    box-shadow: 0px 2px 5px 0px rgba(0,0,0,0.75);

    ul {
      display: inline-block;
      margin: .5rem auto .5rem 0;
      list-style: none;
      padding: 0;
      li {
        display: inline-block;
        padding-right: 1rem;
      }
    }
  }

  .mobileNavigation {
    display: flex;
    flex-direction: column;
    position: fixed;
    top: 0;
    bottom: 0;
    transform: translateX(-100%);
    transition: transform .5s ease;

    .toggle {
      position: absolute;
      top: 0%;
      left: 100%;
      background-color: $red;
      padding: .5rem;
    }

    ul {
      display: block;
      list-style: none;
      padding: 0;
      margin: 0;
      li {
        display: block;
        margin: 2rem .5rem;
      }
    }

    button {
      margin-top: auto;
    }
  }

  .overlay {
    display: block;
    position: fixed;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
    background-color: rgba(0,0,0,0.5);
    transform: translateX(100%);
    z-index: 1;
    transition: transform .5s ease;
  }

</style>

<nav class="navigation">
  <ul>
    <li id="minutes"><a href="#minutes">Päivän kulku</a></li>
    <li id="map"><a href="#map">Lahjalista</a></li>
    <li id="login"><a href="#login">Ilmoittaudu</a></li>
  </ul>
  <button on:click={logout}>Kirjaudu ulos</button>
</nav>

<nav class="mobileNavigation" class:active>
  <div class="toggle" on:click={() => active = !active}>Toggle</div>
  <ul>
    <li id="minutes"><a href="#minutes">Päivän kulku</a></li>
    <li id="map"><a href="#map">Lahjalista</a></li>
    <li id="login"><a href="#login">Ilmoittaudu</a></li>
  </ul>
  <button on:click={logout}>Kirjaudu ulos</button>
</nav>
<div class="overlay" class:active></div>
