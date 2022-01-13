import React, { useState, useEffect } from 'react';
import { Navigate, useHistory, useNavigate, useParams } from "react-router-dom";
import "./AddEdit.css";

import Header from '../Components/Header/Header';
import StudentHeader from "../Components/StudentHeader/StudentHeader"

//get last id from array
let arrayClassroom = JSON.parse(localStorage.getItem("classroom"))
const countId = arrayClassroom.filter(item => item.id).length;

const initialState = {
    id: countId+1,
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
    const [state, setState] = useState(initialState);
    const [data, setData] = useState({});
    const [imgState, setImgState] = useState("");

    

    const { id, name, surname, img } = state;

    const handleInputChange = (e) => {
        const { name, value } = e.target;
        setState({ ...state, [name]: value });
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        if (!name || !surname || !img) {
            console.log("Algun input está vacío")
        } else {
            SaveDataToLocalStorage(state)
            alert("Usuari afegit correctament")
            setTimeout(() => window.location.reload(), 500)
        }
    };

    useEffect(() => {
        // Check for the File API support.
if (window.File && window.FileReader && window.FileList && window.Blob) {
    document.getElementById('img').addEventListener('change', handleFileSelect, false);
  } else {
    alert('The File APIs are not fully supported in this browser.');
  }
  
  function handleFileSelect(evt) {
    var f = evt.target.files[0]; // FileList object
    var reader = new FileReader();
    // Closure to capture the file information.
    reader.onload = (function(theFile) {
      return function(e) {
        var binaryData = e.target.result;
        //Converting Binary Data to base 64
        var base64String = window.btoa(binaryData);
        //showing file converted to base64
        document.getElementById('base64').value = base64String;
        setImgState(base64String);
        alert('File converted to base64 successfuly!\nCheck in Textarea');
      };
    })(f);
    // Read in the image file as a data URL.
    reader.readAsBinaryString(f);
  }
    }, []);

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
                <label hidden htmlFor="id">Id</label>
                <input
                    type="hidden"
                    id="id"
                    name="id"
                    placeholder="Id"
                    value={id}
                    onChange={handleInputChange} />

                <label htmlFor="name">Nom</label>
                <input
                    type="text"
                    id="name"
                    name="name"
                    placeholder="Alumne"
                    value={name}
                    onChange={handleInputChange} />

                <label htmlFor="surname">Cognom</label>
                <input
                    type="text"
                    id="surname"
                    name="surname"
                    placeholder="Cognom"
                    value={surname}
                    onChange={handleInputChange} />

                <label htmlFor="img">ChiBit</label>
                <input
                    type="file"
                    id="img"
                    name="img"
                    placeholder="Imatge"
                    value={img}
                    onChange={handleInputChange} />

                <input type="submit" value="Guardar" />
            </form>
            <textarea id="base64" rows="5"></textarea>
        </div>
    )
}

export default AddEdit;