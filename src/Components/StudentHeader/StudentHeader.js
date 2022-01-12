import React from 'react'
import "./styles.css";
import { Link } from "react-router-dom";


const StudentHeader = () => {
    return (
        <header>
            <nav>
                <div>
                    <Link to="/add">Afegir alumne</Link>
                    <Link to="/update/:id">Actualitzar alumne</Link>
                    {/* <Link to="/view/:id">Veure</Link> */}
                </div>
            </nav>
        </header>
    )
}

export default StudentHeader