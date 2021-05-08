<script lang="ts">
  export let evening = false;
</script>

<style lang="scss">
  @import "../styles/mixins.scss";
  .rsvp {
    text-align: center;
    width: $width;
    max-width: $maxWidth;
    margin: 7rem auto;

    .linkButton {
      @include redFrame;
      max-width: 25rem;
      font-size: 2rem;
      font-weight: 700;
      text-decoration: none;
      display: block;
      margin: auto;
    }
  }
</style>

<section class="rsvp">
  <a
    href={!evening ? "https://forms.gle/TbfPiiNNnXsZAuce6" : "https://forms.gle/LYYNvk7HSNjigZ9S9"}
    target="_blank"
    class="button linkButton"
  >
    Ilmoittaudu klikkaamalla tästä
  </a>
  <h3>Ilmoittauduthan viimeistään 30.6. mennessä</h3>
</section>
