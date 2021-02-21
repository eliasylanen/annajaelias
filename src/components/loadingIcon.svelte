<style lang="scss">
  @import '../styles/mixins';

  .loading {
    display: inline-block;
    animation: spin 1500ms linear infinite;
    border-radius: 22.5px;
    height: 5rem;
    margin: 0 auto;
    width: 5rem;

    path {
      stroke-dasharray: 165;
      stroke-dashoffset: 1000;
      animation: dash 11000ms linear infinite;
      fill: none;
      stroke: $red;
    }
  }

  @keyframes dash {
    to {
      stroke-dashoffset: 0;
    }
  }

  @keyframes spin {
    to {
      transform: rotate(360deg);
    }
  }
</style>

<div class="loading">
  <svg version="1.1" id="Layer_1"
    xmlns="http://www.w3.org/2000/svg"
    xmlns:xlink="http://www.w3.org/1999/xlink" x="0px" y="0px" width="5rem" height="5rem" viewBox="0 0 66 66" xml:space="preserve">
    <g>
      <path class="circle" stroke-width="4" stroke-miterlimit="10" d="M33,60C18.1,60,6,47.9,6,33S18.1,6,33,6s27,12.1,27,27S47.9,60,33,60z"/>
    </g>
  </svg>
</div>
