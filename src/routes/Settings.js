import React from 'react'
import './Settings.css'
import Header from '../Components/Header/Header';
import StudentHeader from "../Components/StudentHeader/StudentHeader"

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
                <button className="button-error" onClick={deleteClassroom}>Borrar classe</button>
            </div>
        </div>
    )
}

export default Settings
