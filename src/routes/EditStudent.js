import React from 'react'
import { Navigate, useHistory, useNavigate, useParams } from "react-router-dom";
import "./AddEdit.css";

import Header from '../Components/Header/Header';
import StudentHeader from "../Components/StudentHeader/StudentHeader"
import imageCompression from 'browser-image-compression';

const EditStudent = () => {
    return (
        <div>
            <Header />
            <StudentHeader />
            <h2 style={{ textAlign: "center" }}>Afegir alumne</h2>
            <form id="addStudentForm"
                style={{
                    margin: "auto",
                    padding: "15px",
                    maxWidth: "400px",
                    alignContent: "center"
                }}>
                <label hidden for="id">Id</label>
                <input
                    type="hidden"
                    id="id"
                    name="id"
                    placeholder="Id" />

                <label for="nameInput">Nom</label>
                <input type="text" id="nameInput" name="name" />

                <label for="surnameInput">Cognom</label>
                <input type="text" id="surnameInput" name="surname" />

                <label for="pictureInput">Imatge</label>
                <input type="file" id="pictureInput" name="img" 
                multiple 
                accept="image/*"
                // onChange={event => handleImageUpload(event)}
                />

                <input type="submit" value="Guardar" />
            </form>

        </div>
    )
}

export default EditStudent
