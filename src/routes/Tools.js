import Header from '../Components/Header/Header';
import { Link } from "react-router-dom";


export default function Tools() {
    return (
      <>
      <Header />
      <div style={{ padding: 50 }}>
          <div class="container">
            <div class="cardDescription">
                Medidor de soroll
            </div>
            <div class="cardDescription">
                Frase diària
            </div>
            <div class="cardDescription">
            <Link to="/pergamino">Pergamí del destí</Link>
            </div>
          </div>
        </div>
      </>
    );
  }