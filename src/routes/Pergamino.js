import Header from '../Components/Header/Header';
import "./PergaminoStyles.css";
import pergaminoData from "../data/pergaminoData.json"

export default function Pergamino() {
  var myArray = pergaminoData;
     function outPutOptions(arr) {
       var output = '';
       var length = arr.length;
       for (var x = 0; x < length; x++) {
         if(length - 1 === x) {
                 output += arr[x] + '';
            } else {
              output += arr[x] + ', ';
            }
       }
       return output;
     }
      
      function getRandom(){
        return myArray[Math.floor(Math.random()*myArray.length)];        
      }

      const showPergamino = () => {
        document.getElementById('fraseBonita').innerHTML = getRandom()
      }

      const deletePergamino = () => {
        document.getElementById('fraseBonita').innerHTML = ''
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
          <h3 id="fraseBonita"></h3>
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