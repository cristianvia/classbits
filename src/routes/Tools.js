import Header from '../Components/Header/Header';
import "./ToolsStyles.css";
import { Link } from "react-router-dom";


export default function Tools() {
  return (
    <>
      <Header />
      <div style={{ padding: 50 }}>
        <div class="container toolsContainer">
          <div>
            <img src="../../images/tools/semaforo.png" alt="Medidor de ruido" class="toolsCircle" />
            <figcaption class="textCaption">Medidor de soroll</figcaption>
          </div>
          <div>
            <Link to="/dailySentence">
              <img src="../../images/tools/frase_diaria.png" alt="Frase diaria" class="toolsCircle" />
              <figcaption class="textCaption">Frase diària</figcaption>
            </Link>
          </div>
          <div>
            <Link to="/pergamino">
              <img src="../../images/tools/pergamino.png" alt="Frase diaria" class="toolsCircle" />
            </Link>
            <figcaption class="textCaption">Pergamí del destí</figcaption>
          </div>
          <div>
            <Link to="/groups">
              <img src="../../images/tools/groups.png" alt="Generador de grups" class="toolsCircle" />
            </Link>
            <figcaption class="textCaption">Generador de grups</figcaption>
          </div>
          <div>
            <Link to="/randomUser">
              <img src="../../images/tools/random.png" alt="Usuari aleatori" class="toolsCircle" />
            </Link>
            <figcaption class="textCaption">Usuari aleatori</figcaption>
          </div>
        </div>
      </div>
    </>
  );
}