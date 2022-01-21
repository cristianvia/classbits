import Header from '../Components/Header/Header';
import './HomeStyles.css';
import { Link } from "react-router-dom";

export default function Home() {
  return (
    <>
      <Header />
      <main>
        <div style={{ padding: 50 }}>
          <div class="row">
            <div class="column">
              <p class="title">Comença l'experiència ClassBits</p>
              <p class="subtitle">Crea el teu <b>ChiBit</b> al teu gust i comença a jugar ara mateix! Recorda: quants més punts aconsegueixis, a més premis podràs optar!</p>
            </div>
            <div class="column" id="chibiClassroom">
              <div class="upAndDown">
                <img src="../../images/chibi_classroom.png" alt="clase classbits" width="500px" />
              </div>
            </div>
          </div>
        </div>
        <div style={{ marginLeft: 50 }}>
          <div class="container">
            <div class="cardDescription">
              <a href="https://charat.me/en/chibi/create/" target="_blank">
                Crea el teu Chibit
                <img src="../../images/chibi_potter.png" alt="chibi potter classbits" width="150" />
              </a>
              <div class="steps">1</div>
            </div>
            <div class="cardDescription">
              <Link to="/settings">
                Configura la classe
                <img src="../../images/chibi_ironman.png" alt="iron man classbits" width="150" />
                <div class="steps">2</div>
              </Link>
            </div>
            <div class="chibi_playing">
              <img src="../../images/chibi_playing.png" alt="chibi playing classbits" height="250" />
            </div>
          </div>
        </div>
        <div class="container cta">
          <div class="center">
            <blockquote>Els jocs i la gamificació condueixen a alts nivells de compromís i motivació de l'alumne. - Karl Kapp -
              </blockquote>
          </div>
        </div>
        <div style={{ padding: 50 }}>
          <div class="row">
            <div class="column" id="chibi_programmer">
              <div class="upAndDown">
                <img src="../../images/chibi_programmer.png" alt="Programador chibi" width="500px" />
              </div>
            </div>
            <div class="column">
              <p class="title">La PRIVACITAT, un dels objectius principals</p>
              <p class="subtitle">Entenem que les dades dels alumnes són molt sensitives i per això aquesta app ha estat específicament dissenyada per garantir la privacitat.</p>
              <p className="subtitle">Cap dada sortirà MAI del teu ordinador, tot es queda guardat a la memòria del navegador web.</p>
            </div>
          </div>
        </div>
        <div style={{ padding: 50 }}>
          <div class="row">
            <div class="column">
              <p class="title">App de gestió tutorial configurable</p>
              <p class="subtitle">Al ClassBits podràs afegir, editar i esborrar alumnes, conductes positives, negatives i bescanvis de punts.</p>
              <p className="subtitle">Tu decideixes quines conductes sumen punts als Chibits i quines en resten...</p>
              <p className="subtitle">Inclús pots escollir com bescanviar els punts positius per premis a la vida real... o dins del classbits aconseguint una Mascota Bits!</p>
            </div>
            <div class="column" id="chibiCustom">
              <div style={{ padding: 50 }}>
                <img src="../../images/custom_classroom.png" alt="afegir mascotes" width="500px" />
              </div>
            </div>
          </div>
        </div>
      </main>
    </>
  );
}
