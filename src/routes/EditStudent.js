import React, { useEffect } from 'react'
import { useParams } from "react-router-dom";
import "./AddEdit.css";

import Header from '../Components/Header/Header';
import StudentHeader from "../Components/StudentHeader/StudentHeader"
import imageCompression from 'browser-image-compression';

var imageCompressed = "";
var finalImageCompressed = "";
var classroom = JSON.parse(localStorage.getItem("classroom") || []);
var idStudent = "";

function UpdateDataToLocalStorage(newClassroomEdited) {
    
    classroom[idStudent].name = newClassroomEdited.name;
    classroom[idStudent].surname = newClassroomEdited.surname;
    classroom[idStudent].img = newClassroomEdited.img;

    // Re-serialize the array back into a string and store it in localStorage
    localStorage.setItem('classroom', JSON.stringify(classroom));
}

function setImageCompressed(e) {
    imageCompressed = e;
    console.log("setImageCompressed", e)
}

//the compressed image is returned in blob format, needs to be saved as base64
const blobToBase64 = blob => {
    const reader = new FileReader();
    reader.readAsDataURL(blob);
    return new Promise(resolve => {
        reader.onloadend = () => {
            resolve(reader.result);
        };
    });
};

const EditStudent = () => {

    const { id } = useParams();
    idStudent = id;
    console.log(id)

    async function handleImageUpload(event) {

        const imageFile = event.target.files[0];
        console.log('originalFile instanceof Blob', imageFile instanceof Blob); // true
        console.log(`originalFile size ${imageFile.size / 1024 / 1024} MB`);

        const options = {
            maxSizeMB: 1,
            maxWidthOrHeight: 500,
            useWebWorker: true
        }
        try {
            const compressedFile = await imageCompression(imageFile, options);
            console.log('compressedFile instanceof Blob', compressedFile instanceof Blob); // true
            console.log(`compressedFile size ${compressedFile.size / 1024 / 1024} MB`); // smaller than maxSizeMB

            await setImageCompressed(compressedFile);

            blobToBase64(imageCompressed).then(res => {
                //final image compressed and converted into base64
                finalImageCompressed = res;
            });
        } catch (error) {
            console.log(error);
        }

    }

    useEffect(() => {

        const formElement = document.getElementById("addStudentForm");

        const handleForm = async (event) => {
            event.preventDefault();

            const formData = new FormData(formElement);

            let data = {
                id: id,
                name: formData.get("name"),
                surname: formData.get("surname"),
                img: finalImageCompressed
            };

            UpdateDataToLocalStorage(data);
            alert("Usuari afegit correctament")
            setTimeout(() => window.location.reload(), 500)
        };

        formElement.addEventListener("submit", handleForm);

    }, []);


    return (
        <div>
            <Header />
            <StudentHeader />
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
                <input type="text" id="nameInput" name="name" />

                <label htmlFor="surnameInput">Cognom</label>
                <input type="text" id="surnameInput" name="surname" />

                <label htmlFor="pictureInput">Imatge</label>
                <input type="file" id="pictureInput" name="img"
                    multiple
                    accept="image/*"
                    onChange={event => handleImageUpload(event)}
                />

                <input type="submit" value="Guardar" />
            </form>

        </div>
    )
}

export default EditStudent
