<script lang="ts">
</script>

<style lang="scss">
  @import "../styles/mixins.scss";

  section {
    position: relative;
    #map {
      @include tablet {
        position: static;
        background: url("/assets/map.svg") center / cover no-repeat;
        width: 100vw;
        padding-top: 80%;

      }
      @include desktop {
        background: url("/assets/map.svg") rgba(250, 250, 250, .9) center / cover no-repeat;
        position: absolute;
        top: 0;
        left: 0;
        bottom: 0;
        right: 0;
        z-index: 0;
        background-blend-mode: overlay;
      }
    }
    .container {
      z-index: 1;
    }
  }
</style>

<section>
  <div id="map"></div>
  <div class="container">
    <p>
      How do you make a round circle with a square knife? That's your challenge for the day. Fluff it up a little and hypnotize it. In your imagination you can go anywhere you want. If you've been in Alaska less than a year you're a Cheechako. You can create beautiful things - but you have to see them in your mind first.
    </p>
    <p>
      We don't have to be concerned about it. We just have to let it fall where it will. See there how easy that is. We'll put a happy little sky in here. We'll put all the little clouds in and let them dance around and have fun. Here we're limited by the time we have. Brown is such a nice color.
    </p>
  </div>
</section>
