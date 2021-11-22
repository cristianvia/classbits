import React from 'react';
import './App.css';
import Avatar from './Components/Avatar/Avatar';
import Header from './Components/Header/Header';

import avatarData from "./data/avatarData.json";


function App(props) {

  return (
    <div className="App">
      <Header />
      <div className="apps">
        <ul>
          {avatarData.map((data) => {
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
