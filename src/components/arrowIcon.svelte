<script lang="ts">
  export let active: boolean;
</script>

<style lang="scss">
  .arrow {
    width: 2rem;
    transition: transform .5s;
  }

  .active {
    transform: rotateZ(.5turn);
  }
</style>

<svg version="1.1" id="Capa_1"
  xmlns="http://www.w3.org/2000/svg"
  xmlns:xlink="http://www.w3.org/1999/xlink" viewBox="0 0 50 50" class="arrow" class:active>
  <g stroke="#000" stroke-width="7">
    <path d="M15,3
        L35,27.2" />
    <path d="M35,22.8
        L15,47" />
  </g>
</svg>

