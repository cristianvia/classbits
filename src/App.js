import React from 'react';
import './App.css';
import Avatar from './Components/Avatar/Avatar';
import Header from './Components/Header/Header';


//Check if localstorage classroom exists, otherwise create it
const checkIfClassroomLsExist = () => {
  var checkLs = JSON.parse(localStorage.getItem("classroom"))
  if (checkLs == null) {
    localStorage.setItem("classroom", JSON.stringify([{
      "id": 0,
      "name": "Tota la classe",
      "surname": "",
      "img": "../../images/chibi_classroom.png",
      "pet": ""
    }]));
    //Add the first time securityChecks
    localStorage.setItem("securityCheck1", null);
    localStorage.setItem("securityCheck2", null);
  }
}
//Check if localstorage positive exists, otherwise create it
const checkIfPositiveLsExist = () => {
  var checkPositive = JSON.parse(localStorage.getItem("positive"))
  if (checkPositive == null) {
    localStorage.setItem("positive", JSON.stringify([
      {
        "id": 1,
        "name": "Ser honest",
        "emoji": "⚖️",
        "points": 1
    },
    {
        "id": 2,
        "name": "Treure notable alt",
        "emoji": "⬆️",
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
        "name": "Ajuda als companys",
        "emoji": "🧑‍🤝‍🧑",
        "points": 1
    },
    {
        "id": 8,
        "name": "Treure un excel·lent",
        "emoji": "💯",
        "points": 3
    }

    ]));
  }
}

//Check if localstorage negative exists, otherwise create it
const checkIfNegativeLsExist = () => {
  var checkNegative = JSON.parse(localStorage.getItem("negative"))
  if (checkNegative == null) {
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
        "name": "No portar el material",
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
  if (checkExchange == null) {
    localStorage.setItem("exchange", JSON.stringify([
      {
        "id": 1,
        "name": "Triar una cançó",
        "emoji": "🎶",
        "points": 1
    },
    {
        "id": 2,
        "name": "Canvi de nick",
        "emoji": "📝",
        "points": 5
    },
    {
        "id": 3,
        "name": "Invocar el pergamí del destí",
        "emoji": "📜",
        "points": 5
    },
    {
        "id": 4,
        "name": "Canvi de chibit",
        "emoji": "🎭",
        "points": 5
    },
    {
        "id": 5,
        "name": "Canvi de lloc durant una setmana",
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
        "name": "Aconseguir una mascota Bits",
        "emoji": "🐶",
        "points": 50
    },
    {
        "id": 8,
        "name": "Escollir què farem a classe",
        "emoji": "💡",
        "points": 99
    }
    ]));
  }
}

//Check if localstorage classroom exists, otherwise create it
const checkIfPetsLsExist = () => {
  var checkPetLs = JSON.parse(localStorage.getItem("pets"))
  if (checkPetLs == null) {
    localStorage.setItem("pets", JSON.stringify([
      {
        "id": 1,
        "name": "Pikachu",
        "img": "../../images/pets/chibi_pikachu.png",
      },
      {
        "id": 2,
        "name": "Bulbasaur",
        "img": "../../images/pets/chibi_bulbasaur.png",
      },
      {
        "id": 3,
        "name": "Squirtle",
        "img": "../../images/pets/chibi_squirtle.png",
      },
      {
        "id": 4,
        "name": "Charmander",
        "img": "../../images/pets/chibi_charmander.png",
      },
      {
        "id": 5,
        "name": "Doggy",
        "img": "../../images/pets/chibi_dog.png",
      },
      {
        "id": 6,
        "name": "Foxy",
        "img": "../../images/pets/chibi_fox.png",
      },
      {
        "id": 7,
        "name": "Corets",
        "img": "../../images/pets/chibi_loving_dog.png",
      },
      {
        "id": 8,
        "name": "Thirsty",
        "img": "../../images/pets/chibi_thirsty.png",
      },
      {
        "id": 9,
        "name": "Catty",
        "img": "../../images/pets/chibi_cat.png",
      },
      {
        "id": 10,
        "name": "Lapras",
        "img": "../../images/pets/chibi_lapras.png",
      },
      {
        "id": 11,
        "name": "Dino",
        "img": "../../images/pets/chibi_dino.png",
      },
      {
        "id": 10,
        "name": "Unicorn",
        "img": "../../images/pets/chibi_unicorn.png",
      }

    ]));
  }
}


checkIfClassroomLsExist();
checkIfPetsLsExist();
checkIfPositiveLsExist();
checkIfNegativeLsExist();
checkIfExchangeLsExist();


var classroom = JSON.parse(localStorage.getItem("classroom") || []);

//Add pet points each week

const addPointsPetHolder = () => {
  //Check if date is Friday (number 5 = friday)
  //It will return true only if it is friday
  function isFriday(date = new Date()) {
    return date.getDay() === 5;
  }
  const todayDate = new Date();

  //Get the 2 security checks
  //securityCheck1 is true when is friday
  //securityCheck2 is true when it is not friday

  var securityCheck1 = localStorage.getItem("securityCheck1");
  var securityCheck2 = localStorage.getItem("securityCheck2");
  //If not friday, activate secCheck2
  if (isFriday(todayDate) == false) {
    localStorage.setItem("securityCheck2", true);
  }
  //If friday, activate secCheck1
  if (isFriday(todayDate)) {
    localStorage.setItem("securityCheck1", true);
  }
  //If we get both secChecks true, it means 7 days has passed and we can add points
  if (securityCheck1 == "true" && securityCheck2 == "true") {
    //ADD 7 POINTS
    console.log("both security checks are true")
    classroom.forEach(petHolder => {
      if (petHolder.pet != "") {
        var idPetHolder = petHolder.id;
        var currentPoints = localStorage.getItem(idPetHolder);
        var addedPoints = parseInt(currentPoints) + 7;
        localStorage.setItem(idPetHolder, addedPoints)
      }
      localStorage.setItem("securityCheck2", false);
      localStorage.setItem("securityCheck1", false);
    })
  }

}

addPointsPetHolder();

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
                  pet={data.pet}
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
