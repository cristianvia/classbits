import React from 'react'
import './Settings.css'
import Header from '../Components/Header/Header';
import StudentHeader from "../Components/StudentHeader/StudentHeader"
import { Link } from "react-router-dom";


function deleteClassroom() {
    window.localStorage.clear();
    alert("Classe borrada correctament")
    setTimeout(() => window.location.reload(), 500)
}

const Settings = () => {
    return (
        <div>
            <Header />
            <StudentHeader />
            <div className="settings">
                <p>
                    <button className="button-error" onClick={deleteClassroom}>Borrar classe</button>
                </p>
                <p>
                    <Link to="/EditClassroom">
                        <button className="button-secondary">Editar classe</button>
                    </Link>
                </p>
            </div>
        </div>
    )
}

export default Settings
