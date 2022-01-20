import React, { useState, useEffect } from 'react';
import { Navigate, useHistory, useNavigate, useParams } from "react-router-dom";
import "./AddEdit.css";

import Header from '../Components/Header/Header';

let arrayClassroom = JSON.parse(localStorage.getItem("negative") || []);
//get last object of the array
const lastItem = arrayClassroom[arrayClassroom.length -1]
const countId = lastItem.id;


function SaveDataToLocalStorage(dataFromState) {
    var a = [];
    // Parse the serialized data back into an aray of objects
    a = JSON.parse(localStorage.getItem('negative')) || [];
    // Push the new data (whether it be an object or anything else) onto the array
    a.push(dataFromState);
    // Alert the array value
    // Re-serialize the array back into a string and store it in localStorage
    localStorage.setItem('negative', JSON.stringify(a));
}


const AddNegative = () => {


    useEffect(() => {

        const formElement = document.getElementById("addStudentForm");

        const handleForm = async (event) => {
            event.preventDefault();

            const formData = new FormData(formElement);

            let data = {
                id: countId + 1,
                name: formData.get("name"),
                emoji: formData.get("emoji"),
                points: parseInt(formData.get("points")),
            };


            SaveDataToLocalStorage(data);
            alert("Negatiu afegit correctament")
            setTimeout(() => window.location.reload(), 500)
        };

        formElement.addEventListener("submit", handleForm);

    }, []);



    return (
        <div>
            <Header />
            <h2 style={{ textAlign: "center" }}>Afegir punts negatius</h2>
            <form id="addStudentForm"
                style={{
                    margin: "auto",
                    padding: "15px",
                    maxWidth: "400px",
                    alignContent: "center"
                }}>
                <label hidden htmlfor="id">Id</label>
                <input
                    type="hidden"
                    id="id"
                    name="id"
                    placeholder="Id" />

                <label htmlfor="nameInput">Conducta negativa</label>
                <input type="text" id="nameInput" name="name" />

                <label htmlfor="surnameInput">Emoji</label>
                <input type="text" id="surnameInput" name="emoji" />

                <label htmlfor="pictureInput">Punts</label>
                <input type="number" id="pictureInput" name="points" />

                <input type="submit" value="Guardar" />
            </form>
        </div>
    )
}

export default AddNegative;