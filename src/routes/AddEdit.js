import React, { useState, useEffect } from 'react';
import { Navigate, useHistory, useNavigate, useParams } from "react-router-dom";
import "./AddEdit.css";

import Header from '../Components/Header/Header';
import StudentHeader from "../Components/StudentHeader/StudentHeader"

//get last id from array
let arrayClassroom = JSON.parse(localStorage.getItem("classroom"))
const countId = arrayClassroom.filter(item => item.id).length;

const initialState = {
    id: countId + 1,
    name: "",
    surname: "",
    img: "",
};


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


const AddEdit = () => {


    useEffect(() => {
        // demo purposes only
        const codeElem = document.getElementById("code");
        // /demo purposes only

        const fileInput = document.getElementById("pictureInput");

        // This is for storing the base64 strings
        let myFiles = {};
        // if you expect files by default, make this disabled
        // we will wait until the last file being processed
        let isFilesReady = true;

        fileInput.addEventListener("change", async (event) => {
            // clean up earliest items
            myFiles = {};
            // set state of files to false until each of them is processed
            isFilesReady = false;

            // this is to get the input name attribute, in our case it will yield as "img"
            // I'm doing this because I want you to use this code dynamically
            // so if you change the input name, the result also going to effect
            const inputKey = fileInput.getAttribute("name");
            var files = event.srcElement.files;

            const filePromises = Object.entries(files).map((item) => {
                return new Promise((resolve, reject) => {
                    const [index, file] = item;
                    const reader = new FileReader();
                    reader.readAsBinaryString(file);

                    reader.onload = function (event) {
                        // if it's multiple upload field then set the object key as img[0], img[1]
                        // otherwise just use img
                        const fileKey = `${inputKey}${
                            files.length > 1 ? `[${index}]` : ""
                            }`;
                        // Convert Base64 to data URI
                        // Assign it to your object
                        myFiles[fileKey] = `data:${file.type};base64,${btoa(
                            event.target.result
                        )}`;

                        resolve();
                    };
                    reader.onerror = function () {
                        console.log("can't read the file");
                        reject();
                    };
                });
            });

            Promise.all(filePromises)
                .then(() => {
                    console.log("ready to submit");
                    isFilesReady = true;

                    // demo purposes only
                    codeElem.textContent = JSON.stringify(myFiles, undefined, 2);
                    // /demo purposes only
                })
                .catch((error) => {
                    console.log(error);
                    console.log("something wrong happened");
                });
        });

        const formElement = document.getElementById("addStudentForm");

        const handleForm = async (event) => {
            event.preventDefault();

            if (!isFilesReady) {
                console.log("files still getting processed");
                return;
            }

            const formData = new FormData(formElement);

            let data = {
                id: countId + 1,
                name: formData.get("name"),
                surname: formData.get("surname"),
                img: codeElem.textContent = JSON.stringify(myFiles, undefined, 2)
            };

            Object.entries(myFiles).map((item) => {
                const [key, file] = item;
                // append the file to data object
                data[key] = file;
            });

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
                <input type="file" id="pictureInput" name="img" multiple />

                <input type="submit" value="Guardar" />
            </form>
            <div className="warningRegister">
            ⚠️ ATENCIÓ! ⚠️ Un cop creat el personatge, no es podrà modificar cap dada, assegura't que està tot bé!
                </div>
        </div>
    )
}

export default AddEdit;