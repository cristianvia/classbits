import React, { useEffect } from 'react'
import { useParams } from "react-router-dom";
import "./AddEdit.css";

import Header from '../Components/Header/Header';

var positive = JSON.parse(localStorage.getItem("positive") || []);
var idBehaviour = "";

function UpdateDataToLocalStorage(newBehaviourEdited) {

   positive[idBehaviour].name = newBehaviourEdited.name;
    positive[idBehaviour].emoji = newBehaviourEdited.emoji;
    positive[idBehaviour].points = parseInt(newBehaviourEdited.points);

    // Re-serialize the array back into a string and store it in localStorage
    localStorage.setItem('positive', JSON.stringify(positive));
}


const EditPositive = () => {

    const { id } = useParams();
    idBehaviour = id;
    console.log(id)

    useEffect(() => {

        const formElement = document.getElementById("addStudentForm");

        const handleForm = async (event) => {
            event.preventDefault();

            const formData = new FormData(formElement);

            let data = {
                id: id,
                name: formData.get("name"),
                emoji: formData.get("emoji"),
                points: formData.get("points"),
            };

            UpdateDataToLocalStorage(data);
            alert("Conducta modificada correctament")
            setTimeout(() => window.location.reload(), 500)
        };

        formElement.addEventListener("submit", handleForm);

    }, []);


    return (
        <div>
            <Header />
            <h2 style={{ textAlign: "center" }}>Editar {positive[id].name} {positive[id].surname} </h2>
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

                <label htmlfor="nameInput">Conducta positiva</label>
                <input type="text" id="nameInput" name="name" />

                <label htmlfor="surnameInput">Emoji</label>
                <input type="text" id="surnameInput" name="emoji" />

                <label htmlfor="pointsInput">Punts</label>
                <input type="number" id="pointsInput" name="points" />

                <input type="submit" value="Guardar" />
            </form>

        </div>
    )
}

export default EditPositive
