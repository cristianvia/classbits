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
              <Link to="/howto">
                Configura la classe
                <img src="../../images/chibi_ironman.png" alt="iron man classbits" width="150" />
                <div class="steps">2</div>
              </Link>
            </div>
            <div class="chibi_playing">
            <img src="../../images/chibi_playing.png" alt="chibi playing classbits" height="250"/>
            </div>
          </div>  
        </div>
        <div class="container cta">
            <div class="center">
              <blockquote>Els jocs i la gamificació condueixen a alts nivells de compromís i motivació de l'alumne. - Karl Kapp -
              </blockquote>
          </div>
          </div>
      </main>
    </>
  );
}
