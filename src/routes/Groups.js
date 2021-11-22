import Header from '../Components/Header/Header';
import avatarData from "../data/avatarData.json";
import './GroupStyles.css';

export default function Groups() {

  var arrayChibits = [];

  const getArrayChibits = () => {
    //Must ensure everytime it's called starts empty
    arrayChibits = [];
    avatarData.map((data) => {
      arrayChibits.push(data.name);
    })
    //shift() = removes first element of array (the whole class)
    arrayChibits.shift();
    return arrayChibits;
  }

  const createGroups = () => {
    var number = document.getElementById("number").value;
    if (number == 0){
      number = 2
    }
    var name_list = getArrayChibits();
    var group = [];

    for (var i = 0; i < number; i++) {
      group.push([]);
    }

    var size = name_list.length;
    var groupID = 0;
    for (var i = 0; i < size; i++) {
      var rand = Math.floor(Math.random() * name_list.length);

      group[groupID].push(name_list[rand]);
      name_list.splice(rand, 1);

      groupID++;
      if (groupID >= number) {
        groupID = 0;
      }
    }

    var htmlresult = "";

    for (var i = 0; i < group.length; i++) {
      htmlresult += "<div class='avatarGroups'><div style='text-align:center;'><strong> Grupo " + (i + 1) + "</strong></div><ul>";
      for (var j = 0; j < group[i].length; j++) {
        htmlresult += "<li>" + group[i][j] + "</li><br>";
      }
      htmlresult += "</ul></div>";
    }

    document.getElementById("result").innerHTML = htmlresult;
  }

  return (
    <>
      <Header />
      <div style={{ padding: 50 }}>
        <div class="container">
          <div>
          <p><span id="cantidadGrupos">Cantidad de grupos: </span><input id="number" size="2"></input></p>
          <button class="createGroupsButton" onClick={createGroups}> Crear grupos </button>
          </div>
          
          <div id="result"></div>
        </div>
      </div>
    </>
  );
}