import React from 'react';
import './App.css';
import Avatar from './Components/Avatar/Avatar';

import { avatarData } from "./data";

function App(props) {

  return (
    <div className="App">
      <div class="apps">
        <ul>
            {avatarData.map((data) => {
              return (
                <div>
                  <Avatar
                    id={data.id}
                    name={data.name}
                    img={data.img}
                    points={data.id}
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
