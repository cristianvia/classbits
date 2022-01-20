import React from 'react'
import './Settings.css'
import Header from '../Components/Header/Header';
import { Link } from "react-router-dom";


function deleteClassroom() {
    if (
        window.confirm("Estàs segur que vols borrar aquesta classe?")
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
            <div className="centerDivs">
                <h2>Configuració de classe</h2>
                <div className="settings">
                    <p><Link to="/add">
                        <button className="button-success">Afegir alumnes</button>
                    </Link></p>
                    <p><Link to="/EditClassroom">
                        <button className="button-secondary">Editar alumnes</button>
                    </Link></p>
                    <p><button className="button-error" onClick={deleteClassroom}>Borrar classe</button></p>
                </div>
                {/* Rules */}
                <h2>Configuració de normes</h2>

                <div className="settings">
                    <p><Link to="/addPositive">
                        <button className="button-success">Afegir positius</button>
                    </Link></p>

                    <p><Link to="/addNegative">
                        <button className="button-success">Afegir negatius</button>
                    </Link></p>
                    <p><Link to="/add">
                        <button className="button-success">Afegir bescanvis</button>
                    </Link></p>
                </div>
                <div className="settings">
                    <p><Link to="/editBehaviourP">
                        <button className="button-secondary">Editar positius</button>
                    </Link></p>
                    <p><Link to="/add">
                        <button className="button-secondary">Editar negatius</button>
                    </Link></p>

                    <p><Link to="/add">
                        <button className="button-secondary">Editar bescanvis</button>
                    </Link></p>
                </div>
            </div>
        </div>
    )
}

export default Settings
