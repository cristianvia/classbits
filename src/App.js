import React, { useState, useEffect } from 'react';
import './App.css';
import Avatar from './Components/Avatar/Avatar';

import { avatarData } from "./data";

function App(props) {

  return (
    <div className="App">
      <div class="apps">
        <ul>
          <div>
            {avatarData.map((data) => {
              return (
                  <Avatar
                    id={data.id}
                    name={data.name}
                    img={data.img}
                    points="42"
                  />
              );
            })}
          </div>
        </ul>
      </div>
    </div>
  );
}

export default App;
