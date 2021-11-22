import Header from '../Components/Header/Header';
import avatarData from "../data/avatarData.json";
import './GroupStyles.css';

export default function Groups() {

  function shuffle(array) {
    let currentIndex = array.length, randomIndex;

    // While there remain elements to shuffle...
    while (currentIndex != 0) {

      // Pick a remaining element...
      randomIndex = Math.floor(Math.random() * currentIndex);
      currentIndex--;

      // And swap it with the current element.
      [array[currentIndex], array[randomIndex]] = [
        array[randomIndex], array[currentIndex]];
    }

    return array;
  }

  var arrayChibits = [];
  var stringChibits = "";

  const getArrayChibits = () => {
    avatarData.map((data) => {
      arrayChibits.push(data.name);
    })
    //shift() = removes first element of array (the whole class)
    arrayChibits.shift();
    shuffle(arrayChibits);
    var iterator = arrayChibits.values();

    for (let arrChib of iterator) {
      stringChibits = stringChibits.concat(arrChib, ",")
    }
    //substring removes last element of the string, the last unwilled ","
    stringChibits = stringChibits.substring(0, stringChibits.length - 1);
    console.log(stringChibits);
  }



  getArrayChibits();
  console.log(arrayChibits);



  return (
    <>
      <Header />
      <div style={{ padding: 50 }}>
        <div class="container">
          <p><span id="cantidadGrupos">Cantidad de grupos: </span><input id="number"></input></p>
          <button class="createGroupsButton" onclick="go()"> Crear grupos </button>
        </div>
      </div>
    </>
  );
}