import React from 'react';
import './App.css';
import Avatar from './Components/Avatar/Avatar';
import Header from './Components/Header/Header';


//Check if localstorage classroom exists, otherwise create it
const checkIfLSexists = () => {
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

checkIfLSexists();

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
