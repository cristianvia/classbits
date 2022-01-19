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
    localStorage.setItem("positive", JSON.stringify([{
      "id": 0,
      "name": "Estar atent",
      "emoji": "📦",
      "points": 1
    }]));
  }
}
checkIfClassroomLsExist();
checkIfPositiveLsExist();


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
