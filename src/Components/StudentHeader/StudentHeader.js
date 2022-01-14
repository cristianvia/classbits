import React from 'react'
import "./styles.css";
import { Link } from "react-router-dom";


const StudentHeader = () => {
    return (
        <div className="headerSH">
            <div className="navSH">
                <div>
                    <Link to="/add">Afegir alumne</Link>&nbsp;&nbsp;&nbsp;&nbsp;
                    <Link to="/settings">Configuració</Link>
                    {/* <Link to="/view/:id">Veure</Link> */}
                </div>
            </div>
        </div>
    )
}

export default StudentHeader