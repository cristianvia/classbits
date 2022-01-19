import React from 'react'
import './Settings.css'
import Header from '../Components/Header/Header';
import { Link } from "react-router-dom";


function deleteClassroom() {
    if (
        window.confirm("Estàs segur que vols borrar aquest alumne?")
    ) {
        window.localStorage.clear();
        alert("Classe borrada correctament")
        setTimeout(() => window.location.reload(), 500)
    }
}


const Settings = () => {
    return (
        <div>
            <Header />

            <div className="settings">
            <p>Configuració de classe</p>
                <p><Link to="/add">
                    <button className="button-success">Afegir alumnes</button>
                </Link></p>
                <p><Link to="/EditClassroom">
                    <button className="button-secondary">Editar alumnes</button>
                </Link></p>
                <p><button className="button-error" onClick={deleteClassroom}>Borrar classe</button></p>
            </div>
            {/* Rules */}
            <div className="settings">
                <p>Configuració de normes</p>
                <p><Link to="/add">
                    <button className="button-success">Afegir positius</button>
                </Link></p>
                <p><Link to="/add">
                    <button className="button-secondary">Editar positius</button>
                </Link></p>
                <p><Link to="/add">
                    <button className="button-success">Afegir negatius</button>
                </Link></p>
                <p><Link to="/add">
                    <button className="button-secondary">Editar negatius</button>
                </Link></p>
                <p><Link to="/add">
                    <button className="button-success">Afegir bescanvis</button>
                </Link></p>
                <p><Link to="/add">
                    <button className="button-secondary">Editar bescanvis</button>
                </Link></p>
            </div>
        </div>
    )
}

export default Settings
