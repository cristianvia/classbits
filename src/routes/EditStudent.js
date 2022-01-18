import React from 'react'
import { useParams } from "react-router-dom";
import "./AddEdit.css";

import Header from '../Components/Header/Header';
import StudentHeader from "../Components/StudentHeader/StudentHeader"
import imageCompression from 'browser-image-compression';

const EditStudent = () => {

    const {id} = useParams();
    console.log(id)

    return (
        <div>
            <Header />
            <StudentHeader />
            <h2 style={{ textAlign: "center" }}>Editar alumne</h2>
            <form id="addStudentForm"
                style={{
                    margin: "auto",
                    padding: "15px",
                    maxWidth: "400px",
                    alignContent: "center"
                }}>
                <label hidden htmlFor="id">Id</label>
                <input
                    type="hidden"
                    id="id"
                    name="id"
                    placeholder="Id" />

                <label htmlFor="nameInput">Nom</label>
                <input type="text" id="nameInput" name="name" />

                <label htmlFor="surnameInput">Cognom</label>
                <input type="text" id="surnameInput" name="surname" />

                <label htmlFor="pictureInput">Imatge</label>
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
