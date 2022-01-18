import React, { useState, useEffect } from 'react';
import { Navigate, useHistory, useNavigate, useParams } from "react-router-dom";
import "./AddEdit.css";

import Header from '../Components/Header/Header';
import StudentHeader from "../Components/StudentHeader/StudentHeader"
import imageCompression from 'browser-image-compression';

//get last id from array
let arrayClassroom = JSON.parse(localStorage.getItem("classroom"))
const countId = arrayClassroom.filter(item => item.id).length;

const initialState = {
    id: countId + 1,
    name: "",
    surname: "",
    img: "",
};

var imageCompressed = "";
var finalImageCompressed = "";


function SaveDataToLocalStorage(dataFromState) {
    var a = [];
    // Parse the serialized data back into an aray of objects
    a = JSON.parse(localStorage.getItem('classroom')) || [];
    // Push the new data (whether it be an object or anything else) onto the array
    a.push(dataFromState);
    // Alert the array value
    // Re-serialize the array back into a string and store it in localStorage
    localStorage.setItem('classroom', JSON.stringify(a));
}

function setImageCompressed(e){
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

const AddStudent = () => {

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
                id: countId + 1,
                name: formData.get("name"),
                surname: formData.get("surname"),
                img: finalImageCompressed
            };


            SaveDataToLocalStorage(data);
            alert("Usuari afegit correctament")
            setTimeout(() => window.location.reload(), 500)
        };

        formElement.addEventListener("submit", handleForm);

    }, []);



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
                <label hidden htmlfor="id">Id</label>
                <input
                    type="hidden"
                    id="id"
                    name="id"
                    placeholder="Id" />

                <label htmlfor="nameInput">Nom</label>
                <input type="text" id="nameInput" name="name" />

                <label htmlfor="surnameInput">Cognom</label>
                <input type="text" id="surnameInput" name="surname" />

                <label htmlfor="pictureInput">Imatge</label>
                <input type="file" id="pictureInput" name="img" 
                multiple 
                accept="image/*"
                onChange={event => handleImageUpload(event)}/>

                <input type="submit" value="Guardar" />
            </form>

            <div className="warningRegister">
                ⚠️ ATENCIÓ! ⚠️ Un cop creat el personatge, no es podrà modificar cap dada, assegura't que està tot bé!
                </div>
        </div>
    )
}

export default AddStudent;