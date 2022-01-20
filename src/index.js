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
import AddStudent from "./routes/AddStudent";
import AddPet from "./routes/AddPet";
import AddPositive from "./routes/AddPositive";
import AddNegative from "./routes/AddNegative";
import AddExchange from "./routes/AddExchange";
import EditStudent from "./routes/EditStudent";
import EditBehaviourP from "./routes/EditBehaviourP";
import EditBehaviourN from "./routes/EditBehaviourN";
import EditBehaviourE from "./routes/EditBehaviourE";
import EditClassroom from "./routes/EditClassroom";
import EditPositive from "./routes/EditPositive";
import EditNegative from "./routes/EditNegative";
import EditExchange from "./routes/EditExchange";
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
        <Route path="add" element={<AddStudent />} />
        <Route path="addPositive" element={<AddPositive />} />
        <Route path="addNegative" element={<AddNegative />} />
        <Route path="addExchange" element={<AddExchange />} />
        <Route path="editclassroom" element={<EditClassroom />} />
        <Route path="update/:id" element={<EditStudent />} />
        <Route path="addPet/:id" element={<AddPet />} />
        <Route path="editBehaviourP" element={<EditBehaviourP />} />
        <Route path="editBehaviourN" element={<EditBehaviourN />} />
        <Route path="editBehaviourE" element={<EditBehaviourE />} />
        <Route path="updatePositive/:id" element={<EditPositive />} />
        <Route path="updateNegative/:id" element={<EditNegative />} />
        <Route path="updateExchange/:id" element={<EditExchange />} />
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
