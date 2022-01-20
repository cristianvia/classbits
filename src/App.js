import React from 'react';
import './App.css';
import Avatar from './Components/Avatar/Avatar';
import Header from './Components/Header/Header';


//Check if localstorage classroom exists, otherwise create it
const checkIfClassroomLsExist = () => {
  var checkLs = JSON.parse(localStorage.getItem("classroom"))
  if (checkLs == null){
    localStorage.setItem("classroom", JSON.stringify([{
      "id": 0,
      "name": "Tota la classe",
      "surname": "",
      "img": "../../images/chibi_classroom.png"
    }]));
  }
}
//Check if localstorage positive exists, otherwise create it
const checkIfPositiveLsExist = () => {
  var checkPositive = JSON.parse(localStorage.getItem("positive"))
  if (checkPositive == null){
    localStorage.setItem("positive", JSON.stringify([
      {
          "id": 1,
          "name": "Endreça i ajuda a endreçar",
          "emoji": "📦",
          "points": 1
      },
      {
          "id": 2,
          "name": "Està per la feina",
          "emoji": "✏️",
          "points": 1
      },
      {
          "id": 3,
          "name": "Fer l'encàrrec molt bé",
          "emoji": "🎩",
          "points": 1
      },
      {
          "id": 4,
          "name": "Participa",
          "emoji": "🙋‍♂️",
          "points": 1
      },
      {
          "id": 5,
          "name": "Pergamí del destí",
          "emoji": "📜",
          "points": 1
      },
      {
          "id": 6,
          "name": "S'esforça molt",
          "emoji": "💪",
          "points": 1
      },
      {
          "id": 7,
          "name": "Treballa en equip",
          "emoji": "🧑‍🤝‍🧑",
          "points": 1
      },
      {
          "id": 8,
          "name": "Treure un excel·lent",
          "emoji": "💯",
          "points": 2
      }
  
  ]));
  }
}

//Check if localstorage negative exists, otherwise create it
const checkIfNegativeLsExist = () => {
  var checkNegative = JSON.parse(localStorage.getItem("negative"))
  if (checkNegative == null){
    localStorage.setItem("negative", JSON.stringify([
    
      {
          "id": 1,
          "name": "Molestar als companys",
          "emoji": "😤",
          "points": 1
      },
      {
          "id": 2,
          "name": "No estar atent",
          "emoji": "🙄",
          "points": 1
      },
      {
          "id": 3,
          "name": "No fer els deures",
          "emoji": "✍️",
          "points": 1
      },
      {
          "id": 4,
          "name": "No fer silenci",
          "emoji": "🤐",
          "points": 1
      },
      {
          "id": 5,
          "name": "Balancejar-se a la cadira",
          "emoji": "🪑",
          "points": 1
      },
      {
          "id": 6,
          "name": "Faltar el respecte a un company",
          "emoji": "🤬",
          "points": 2
      },
      {
          "id": 7,
          "name": "Pegar-se amb un company",
          "emoji": "🤼",
          "points": 4
      },
      {
          "id": 8,
          "name": "No fer cas del mestre/a",
          "emoji": "👨‍🏫",
          "points": 5
      }
  ]));
  }
}

//Check if localstorage positive exists, otherwise create it
const checkIfExchangeLsExist = () => {
  var checkExchange = JSON.parse(localStorage.getItem("exchange"))
  if (checkExchange == null){
    localStorage.setItem("exchange", JSON.stringify([
      {
          "id": 1,
          "name": "Triar una cançó",
          "emoji": "🎶",
          "points": 1
      },
      {
          "id": 2,
          "name": "Corregir a la pissarra",
          "emoji": "📝",
          "points": 1
      },
      {
          "id": 3,
          "name": "Anar al lavabo",
          "emoji": "🚾",
          "points": 1
      },
      {
          "id": 4,
          "name": "Anar el primer a la fila",
          "emoji": "🥇",
          "points": 5
      },
      {
          "id": 5,
          "name": "Canvi de lloc durant un dia",
          "emoji": "🔄",
          "points": 15
      },
      {
          "id": 6,
          "name": "Mirar vídeos mentre esmorzem",
          "emoji": "🎬",
          "points": 10
      },
      {
          "id": 7,
          "name": "Asseure a la cadira del professor",
          "emoji": "💺",
          "points": 30
      },
      {
          "id": 8,
          "name": "Escollir què farem a classe",
          "emoji": "🪄",
          "points": 99
      }  
  ]));
  }
}


checkIfClassroomLsExist();
checkIfPositiveLsExist();
checkIfNegativeLsExist();
checkIfExchangeLsExist();


var classroom = JSON.parse(localStorage.getItem("classroom") || []);

function App(props) {

  return (
    <div className="App">
      <Header />
      <div className="apps">
        <ul>
          {classroom.map((data) => {
            return (
              <div>
                <Avatar
                  id={data.id}
                  name={data.name}
                  surname={data.surname}
                  img={data.img}
                />
              </div>
            );
          })}
        </ul>
      </div>
    </div>
  );
}

export default App;
