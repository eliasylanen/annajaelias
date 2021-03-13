<script lang="ts">
</script>

<style lang="scss">
  @import "../styles/mixins.scss";

  .minutes {
    grid-template-columns: repeat(2, auto);
    align-items: center;

    #left {
      margin-right: 4rem;

      img {
        width: 10rem;
      }
    }

    @include m {
      img {
        width: 50%;
      }
    }

    @include s {
      grid-template-columns: auto;

      #left {
        margin: 0;
        text-align: center;

        img {
          width: 60%;
        }
      }
    }
  }
</style>

<section class="container minutes">
  <div id="left">
    <img src="/assets/minutes.svg" alt="ohjelma">
  </div>
  <div id="right">
    <p>
      How do you make a round circle with a square knife? That's your challenge for the day. Fluff it up a little and hypnotize it. In your imagination you can go anywhere you want. If you've been in Alaska less than a year you're a Cheechako. You can create beautiful things - but you have to see them in your mind first.
    </p>
  </div>
</section>
