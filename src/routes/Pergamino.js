import Header from '../Components/Header/Header';
import "./PergaminoStyles.css";
import pergaminoData from "../data/pergaminoData.json"

export default function Pergamino() {
  var myArray = pergaminoData;
      
      function getRandom(){
        return myArray[Math.floor(Math.random()*myArray.length)];        
      }

      const showPergamino = () => {
        document.getElementById('frasePergamino').innerHTML = getRandom()
      }

      const deletePergamino = () => {
        document.getElementById('frasePergamino').innerHTML = ''
      }
  return (
    <>
      <Header />
     
        <button class="createGroupsButton pergaButton" type="button" onClick={showPergamino}>Obrir pergamí</button>
        <button class="closeButton" type="button" onClick={deletePergamino}>Borrar</button>

        <div class="containerPergamino">
          <img src="https://recursostic.net/wp-content/uploads/2021/03/pergamino.png" class="pergaImg" style={{marginBottom: -75}}/>

          <div class ="containerFraseBonita">
          <div class ="fraseBonita-container">
          <h3 id="frasePergamino"></h3>
          </div>
          <div class ="enter-options">
          </div>
          </div>

          <div class ="containerPergamino">
          <img src="https://recursostic.net/wp-content/uploads/2021/03/pergamino.png" class="pergaImg" style={{marginTop: -75}}/>
          </div>
        </div>
    </>
  );
}