import React, { useEffect } from 'react'
import { useParams } from "react-router-dom";
import "./AddEdit.css";

import Header from '../Components/Header/Header';


var classroom = JSON.parse(localStorage.getItem("classroom") || []);
var pets = JSON.parse(localStorage.getItem("pets") || []);
var idStudent = "";

function UpdateDataToLocalStorage(newClassroomEdited) {

    classroom[idStudent].name = newClassroomEdited.name;
    classroom[idStudent].surname = newClassroomEdited.surname;
    classroom[idStudent].img = newClassroomEdited.img;
    classroom[idStudent].pet = newClassroomEdited.pet;

    // Re-serialize the array back into a string and store it in localStorage
    localStorage.setItem('classroom', JSON.stringify(classroom));
}

const AddPet = () => {

    const { id } = useParams();
    idStudent = id;

    useEffect(() => {

        const formElement = document.getElementById("addStudentForm");

        const handleForm = async (event) => {
            event.preventDefault();

            const formData = new FormData(formElement);

            let data = {
                id: id,
                name: formData.get("name"),
                surname: formData.get("surname"),
                img: formData.get("img"),
                pet: ((formData.get("pet") == "Treure mascota") ? "" : pets.find( petImg => petImg.name === formData.get("pet")).img)
            };

            UpdateDataToLocalStorage(data);
            alert("Mascota afegida correctament")
            setTimeout(() => window.location.reload(), 500)
        };

        formElement.addEventListener("submit", handleForm);

    }, []);


    return (
        <div>
            <Header />
            <h2 style={{ textAlign: "center" }}>Editar {classroom[id].name} {classroom[id].surname} </h2>
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
                <input type="text" id="nameInput" name="name" value={classroom[id].name} />

                <label htmlFor="surnameInput">Cognom</label>
                <input type="text" id="surnameInput" name="surname" value={classroom[id].surname} />

                <label htmlFor="pictureInput" hidden>Imatge</label>
                <input type="hidden" id="pictureInput" name="img" value={classroom[id].img}
                    multiple
                    accept="image/*"
                />

                <label htmlFor="petInput">Mascota</label>
                <input id="petInput" name="pet" list="pets" placeholder="Clica'm"/>

                <datalist id="pets"> 
                <option>Treure mascota</option>
                <option>Pikachu</option>
                <option>Squirtle</option>
                <option>Bulbasaur</option> 
                <option>Charmander</option>
                <option>Doggy</option>
                <option>Foxy</option>
                <option>Corets</option>
                <option>Thirsty</option>
                <option>Catty</option>
                <option>Lapras</option>
               </datalist>


                <input type="submit" value="Guardar" />
            </form>

        </div>
    )
}

export default AddPet
