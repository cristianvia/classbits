import React, { useEffect } from 'react'
import { useParams } from "react-router-dom";
import "./AddEdit.css";

import Header from '../Components/Header/Header';

var negative = JSON.parse(localStorage.getItem("negative") || []);
var idBehaviour = "";

function UpdateDataToLocalStorage(newBehaviourEdited) {

   negative[idBehaviour].name = newBehaviourEdited.name;
    negative[idBehaviour].emoji = newBehaviourEdited.emoji;
    negative[idBehaviour].points = parseInt(newBehaviourEdited.points);

    // Re-serialize the array back into a string and store it in localStorage
    localStorage.setItem('negative', JSON.stringify(negative));
}


const EditNegative = () => {

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
            <h2 style={{ textAlign: "center" }}>Editar {negative[id].name} {negative[id].surname} </h2>
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

                <label htmlfor="pointsInput">Punts a restar</label>
                <input type="number" id="pointsInput" name="points" />

                <input type="submit" value="Guardar" />
            </form>

        </div>
    )
}

export default EditNegative
