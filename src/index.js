import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter, Routes, Route } from "react-router-dom";
import './index.css';
import App from './App';
import Home from './routes/Home';
import Tools from './routes/Tools';
import Groups from './routes/Groups';
import Pergamino from './routes/Pergamino';
import RandomUser from './routes/RandomUser';
import SoundMeter from "./routes/SoundMeter"
import Chronometer from "./routes/Chronometer"
import DailySentence from './routes/DailySentence';
import reportWebVitals from './reportWebVitals';
import AddEdit from "./routes/AddEdit";
import Settings from "./routes/Settings";

ReactDOM.render(
  <React.StrictMode>
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="game" element={<App />} />
        <Route path="tools" element={<Tools />} />
        <Route path="groups" element={<Groups />} />
        <Route path="pergamino" element={<Pergamino />} />
        <Route path="randomUser" element={<RandomUser />} />
        <Route path="soundMeter" element={<SoundMeter />} />
        <Route path="chronometer" element={<Chronometer />} />
        <Route path="dailySentence" element={<DailySentence />} />
        <Route path="add" element={<AddEdit />} />
        <Route path="settings" element={<Settings />} />
      </Routes>
    </BrowserRouter>
  </React.StrictMode>,
  document.getElementById('root')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
