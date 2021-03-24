<script lang="ts">
</script>

<style lang="scss">
  @import "../styles/mixins.scss";

  .map {
    position: relative;
    display: flex;
    height: 60vmax;
    justify-content: center;
    align-items: center;

    h1 {
      border: none;
      text-align: initial;

      @include l {
        border-bottom: 4px solid #D73838;
      }
    }

    @include s {
      height: 40vmax;
    }

    #mapImg {
      z-index: -1;
      background: url("/assets/map.svg") rgba(250, 250, 250, .8) center / cover no-repeat;
      position: absolute;
      top: 0;
      left: 0;
      bottom: 0;
      right: 0;
      background-blend-mode: overlay;
    }
  }

  .presentList {
    max-width: 85vw;
    margin: 2rem auto;
  }
</style>

<section class="map">
  <div id="mapImg"></div>
    <h1>Lahjalista</h1>
</section>
<section class="presentList">
  <p>
    Koska yhteisen elämän edellytykset olemme jo pitkäli ehtineet hankkia, haluaisimme saada teidät osallistumaan häämatkamme suunnitteluun ja toteutukseen. Olemme suunnitelleet roadtripin Ruotsin ja Tanskan kautta Saksan Hampuriin ja takaisin, ja nyt toivommekin teiltä ajatuksia ja ideoita, mitä meidän kannattaa reissullamme tehdä.
  </p>
  <p>
    Mahdolliset muistamiset toivomme elämysten muodossa: Tiedätkö reitin varrelta loistavan ravintolan jossa käydä? Löysitkö Googlesta mielenkiintoisen kohteen joka olisi käymisen arvoinen? Kerro siitä meille! Alta löydät matkasuunnitelmamme ja valikoiman esimerkkivaihtoehtoja, jotka ovat myös valittavissa.
  </p>
  <p>
    Muistamiset toivomme osoitettavan tilillemme:
  </p>
  <h4>
    Anna Hakala ja Elias Ylänen<br />
    FI37 1146 3501 0714 73<br />
  </h4>
  <p>
    Viestikenttään mitä toivotte meidän tekevän.
  </p>
</section>

