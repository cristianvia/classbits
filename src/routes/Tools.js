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
            <img src="../../images/tools/frase_diaria.png" alt="Frase diaria" class="toolsCircle" />
            <figcaption class="textCaption">Frase diària</figcaption>
          </div>
          <div>
          <Link to="/pergamino">
          <img src="../../images/tools/pergamino.png" alt="Frase diaria" class="toolsCircle" />
          </Link>
           <figcaption class="textCaption">Pergamí del destí</figcaption>
          </div>
        </div>
      </div>
    </>
  );
}