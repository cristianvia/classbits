import React, { useState, useEffect } from 'react';
import { useHistory, useParams } from "react-router-dom";
import "./AddEdit.css";

import Header from '../Components/Header/Header';
import StudentHeader from "../Components/StudentHeader/StudentHeader"

const initialState = {
    name: "",
    surname: "",
    img: "",
}

const handleInputChange = () => { };

const handleSubmit = () => { };

const AddEdit = () => {
    const [state, setState] = useState(initialState);
    const [data, setData] = useState({});

    const { name, surname, img } = state;
    return (
        <div>
            <Header />
            <StudentHeader />
            <h2>Afegir alumne:</h2>
            <form style={{
                margin: "auto",
                padding: "15px",
                maxWidth: "400px",
                alignContent: "center"
            }}
                onSubmit={handleSubmit}>
                <label htmlFor="name">Nom</label>
                <input
                    type="text"
                    id="name"
                    placeHolder="Alumne"
                    value={name}
                    onChange={handleInputChange} />

                <label htmlFor="surname">Cognom</label>
                <input
                    type="text"
                    id="surname"
                    placeHolder="Cognom"
                    value={surname}
                    onChange={handleInputChange} />

                <label htmlFor="img">ChiBit</label>
                <input
                    type="text"
                    id="img"
                    placeHolder="Imatge"
                    value={img}
                    onChange={handleInputChange} />

                <input type="submit" value="Guardar" />
            </form>
        </div>
    )
}

export default AddEdit;