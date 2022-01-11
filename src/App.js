import React from 'react';
import './App.css';
import Avatar from './Components/Avatar/Avatar';
import Header from './Components/Header/Header';
import StudentHeader from "./Components/StudentHeader/StudentHeader"

import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

import avatarData from "./data/avatarData.json";


function App(props) {

  return (
    <div className="App">
      <Header />
      <StudentHeader />
      <div className="apps">
        <ToastContainer position="top-center"></ToastContainer>
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
