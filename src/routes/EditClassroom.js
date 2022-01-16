import React from 'react'
import { Link } from "react-router-dom";
import "./EditClassroom.css";

import Header from '../Components/Header/Header';
import StudentHeader from "../Components/StudentHeader/StudentHeader"


const EditClassroom = () => {
    var classroom = JSON.parse(localStorage.getItem("classroom") || []);

    return (
        <>
        <Header />
        <StudentHeader />
        <div style={{marginTop: "100px"}}>
            <table className="styled-table">
                <thead>
                    <tr>
                        <th style={{textAlign: "center"}}>No.</th>
                        <th style={{textAlign: "center"}}>Nom</th>
                        <th style={{textAlign: "center"}} >Cognom</th>
                        <th style={{textAlign: "center"}} >Acció</th>
                    </tr>
                </thead>
                <tbody>
                    {Object.keys(classroom).map((id, index) => {
                        return (
                            <tr key={id}>
                                <th  scope="row">{index + 1}</th>
                                <td>{classroom[id].name}</td>
                                <td>{classroom[id].surname}</td>
                                <td>
                                    <Link to={`/update/${id}`}>
                                        <button className='btn btn-edit'>Editar
                                        </button>
                                    </Link>
                                </td>
                            </tr>
                        )
                    })}
                </tbody>
            </table>
        </div>
        </>

    )
}

export default EditClassroom
