<script lang="ts">
  import type { User } from "../../types";

  export let user: User;

  $: day = user?.day ?? false;
  $: sweden = user?.sweden ?? false;

  $: console.log({user})
</script>

<style lang="scss">
  @import "../styles/mixins.scss";

  .minutes {
    grid-template-columns: repeat(2, auto);
    align-items: center;

    #photos {
      grid-column: 1 / span 2;

      ul {
        list-style-type: none;
        padding: 0;

        li {
          margin: 1rem 0;

          a {
            font-size: 20px;
            color: black;
            padding: 0 .3rem;

            &:visited {
              color: black;
            }
          }
        }
      }
    }
    #left {
      margin-right: 4rem;

      img {
        width: 10rem;
      }
    }

    #right {
      text-align: justify;

      #remote {
        font-weight: bold;
      }

      h1 {
        text-align: initial;

        @include s {
          text-align: center;
        }
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

      #right {
        text-align: center;
      }
    }
  }
</style>

{#if user}
  <section class="container minutes">
    <div id="photos">
      <h1>Valokuvat</h1>
      <p>
        Juhlapäivän kuvat on nyt julkaistu, ja ne ovat katsottavissa allaolevissa Google Photos -albumeissa. Kaikki kuvat © Olli Suominen, Dreamlike Visuals.
      </p>
      <ul>
        <li>
          <a target="_blank" rel="noferrer" href="https://photos.app.goo.gl/QLrAVH1Fwz9QY97g7"> Kirkko </a>
        </li>
        {#if day}
          <li>
            <a target="_blank" rel="noferrer" href="https://photos.app.goo.gl/sFMGAzmBJEGutWEM7"> Päiväjuhla </a>
          </li>
        {/if}
        <li>
          <a target="_blank" rel="noferrer" href="https://photos.app.goo.gl/p5VXwVsfnpNSPUvx5"> Iltajuhla </a>
        </li>
        <li>
          <a target="_blank" rel="noferrer" href="https://photos.app.goo.gl/Mc8nr122ka6NdiR26"> Potretit </a>
        </li>
      </ul>
    </div>
    <div id="left">
      <img src="/assets/minutes.svg" alt="ohjelma">
    </div>
    <div id="right">
      <div>
        <h1>Hääparin päivä</h1>
        <p>
          Päivämme alkaa avioliiton siunauksella Aitolahden uudessa kirkossa, sillä meidät vihitään virallisesti maistraatissa ennen juhlapäivää. Siunaksella myös kirkko toivottaa onnea avioliitollemme, vaikka Elias paperilla pakana onkin. Siunauksen jälkeen siirrymme perheen kesken ravintola Haraldiin häävastaanotolle.
        </p>
        <p>
          Ruotsissa asuvat sukulaiset on myös kutsuttu yhteen, jotta saamme myös kaukaisemmat sukulaiset mukaan tärkeään päiväämme. Striimatun siunauksen jälkeen tarjolla on ruokaa ja juomaa, sekä etäyhteys Haraldissa pidettävälle häävastaanotolle.
        </p>
        <p>
          Illemmalla järjestämme Futuricen toimistolla suuren iltajuhlan, johon toivotamme tervetulleiksi kaikki sukulaiset ja ystävät.
        </p>
        <p>
          PS: Koska tykkäämme kakusta, sitä on luonnollisesti tarjolla juhlan jokaisessa versiossa.
        </p>
      </div>

      <h1>Tervetuloa juhlimaan kanssamme</h1>
      {#if day}
      <div>
        <p>
          Avioliittomme siunataan klo 12 Aitolahden uudessa kirkossa, Jenseninkatu 4, 33610 Tampere.
        </p>
        <p>
          Siunauksen jälkeen siirrymme ravintola Haraldiin, Hämeenkatu 23, 33200 Tampere. Voit saapua ravintolalle omalla kyydillä, mutta ilman autoa kulkeville on tarjolla taksikyyti ravintolalle. Ilmoitathan kyytitarpeesta ilmoittautumislomakkeessa.
        </p>
        <p>
          Haraldissa tarjoillaan runsas hääateria, sekä perinteistä hääohjelmaa sisältäen puheita ja tietenkin hääkakun. Oletettavissa oleva kesto on noin klo 13-16.
        </p>
        <p>
          Olette myös halutessanne tervetulleet klo 18 alkavaan iltajuhlaan Futuricen toimistolle, osoitteeseen Kelloportinkatu 1 D, 33100 Tampere. Iltajuhlaan on kutsuttu laajempi joukko ystäviä ja sukulaisia, ja ohjelmassa on vapaamuotoisempaa hääohjelmaa sekä seurustelua.
        </p>
        <p>
          Ilmoittautuminen tapahtuu sivuston alaosassa olevasta linkistä, jonka takaa löytyy lomake ilmoittautumisen lähettämiseen.
        </p>
      </div>
      {:else if sweden}
      <div>
        <p>
          Tilaisuus järjestetään Eevan ja Pärin luona, Stolp-Ekeby 18, 18695 Vallentuna. Juhlat alkavat avioliittomme striimatulla siunauksella klo 11 Ruotsin aikaa.
        </p>
        <p>
          Hääjuhla alkaa noin klo 12 Ruotsin aikaa, jolloin saamme muodostettua etäyhteyden ravintola Haraldista. Tarjolla on hääateria, sekä perinteiseen tyyliin puheita, kakkua ja ohjelmaa. Oletettavissa oleva kesto on noin klo 12-15.
        </p>
        <p>
          Ilmoittauduthan sivuston alaosan linkistä.
        </p>
      </div>
      {:else}
      <div>
        <p>
          Tervetuloa juhlimaan seilaamistamme avioliiton satamaan (yök mikä fraasi). Aloitamme juhlinnan lyhyellä seremonialla, jonka jälkeen luvassa on ruokaa, juomaa, ohjelmaa, musiikkia sekä tietenkin hääkakku.
        </p>
        <p>
          Iltajuhla alkaa klo 18 alkaen Futuricen toimistolla, Kelloportinkatu 1 D, 33100 Tampere. Olethan ajoissa paikalla!
        </p>
      </div>
      {/if}
      <p>
        Pukukoodina juhlinnalle on "näytä nätiltä :)"
      </p>
      <p>
        Lämpimästi tervetuloa!
      </p>
    </div>
  </section>
{/if}
