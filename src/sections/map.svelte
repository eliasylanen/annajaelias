<script lang="ts">
  import axios, { AxiosResponse } from "axios";
  import type { PresentData } from "../../types";
  import AsyncLoader from "../components/asyncLoader.svelte";

  const token = localStorage.getItem('token')
  const response = axios.post('./api/gifts', { token }) as Promise<AxiosResponse<{presentData: PresentData[]}>>;
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
      text-align: initial;
      border-bottom: 4px solid #D73838;
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

  .info {
    max-width: 60rem;
    width: 85vw;
    margin: 2rem auto;
  }

  .loading {
    text-align: center;
  }

  .presentList {
    max-width: 60rem;
    width: 85vw;
    margin: 1rem auto;

    @include s { columns: 1; }
    @include m { columns: 2; }
    @include l { columns: 3; }

    .country {
      break-inside: avoid;
      margin: 0 1rem;

      @include s { margin: 0; }

      h3 {
        margin: .5rem 0;
      }

      ul {
        list-style-type: none;
        padding-left: .5rem;
        position: relative;

        aside {
          position: absolute;
          top: 0;
          left: 0;
          width: .25rem;
          border-radius: 1rem;
        }

        #goal {
          // background-color: rgba(10, 10, 10, .2);
          height: 100%;
          background-color: $red;
          transition: height 1s 4s;
        }

        // #gauge {
        //   background-color: $red;
        // }

        li {
          margin: .75rem;
        }
      }
    }
  }
</style>

<section class="map">
  <div id="mapImg"></div>
    <h1>Lahjalista</h1>
</section>
<section class="info">
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
<section class="presentList">
  {#await response}
    <div class="loading">
      <AsyncLoader {response} />
    </div>
  {:then {data: {presentData}}}
    {#each presentData as {id, key, data, totalPrice, totalPaid} (id)}
      <div class="country">
        <h3>{key.replace('_', ' ')}</h3>
        <ul>
          <aside id="goal"></aside>
          <!-- <aside id="gauge" style={`height: ${totalPaid / totalPrice * 100}%;`}></aside> -->
          {#each data as {itemFin, priceShown}}
            <li>
              {itemFin}<br />
              <i>
                {priceShown ? `${priceShown}€` : 'Vapaavalintainen summa'}
              </i>
            </li>
          {/each}
        </ul>
    </div>
    {/each}
  {/await}
</section>

