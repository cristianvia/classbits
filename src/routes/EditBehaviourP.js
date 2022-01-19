import React from 'react'
import { Link } from "react-router-dom";
import "./EditClassroom.css";

import Header from '../Components/Header/Header';


const EditBehaviourP = () => {
    var positive = JSON.parse(localStorage.getItem("positive") || []);

    const onDeletePositive = (id) => {
        if (
            window.confirm("Estàs segur que vols borrar aquesta conducta?")
        ) {
            //delete the array of the selected id
            positive.splice(id,1)
            // Re-serialize the array back into a string and store it in localStorage
            localStorage.setItem('positive', JSON.stringify(positive));
            //Remove item from localstorage so it doesn't recover old data from deleted item
            localStorage.removeItem(id);
        }
        setTimeout(() => window.location.reload(), 500)
    };

    return (
        <>
            <Header />
            <div style={{ marginTop: "50px" }}>
                <h2 className="editTitle">Positius</h2>
                <table className="styled-table">
                    <thead>
                        <tr>
                            <th style={{ textAlign: "center" }}>No.</th>
                            <th style={{ textAlign: "center" }}>Conducta</th>
                            <th style={{ textAlign: "center" }} >Emoji</th>
                            <th style={{ textAlign: "center" }} >Punts</th>
                            <th style={{ textAlign: "center" }} >Accions</th>
                        </tr>
                    </thead>
                    <tbody>
                        {Object.keys(positive).map((id, index) => {
                            return (
                                <tr key={id}>
                                    <th scope="row">{index + 1}</th>
                                    <td>{positive[id].name}</td>
                                    <td>{positive[id].emoji}</td>
                                    <td>{positive[id].points}</td>
                                    <td>
                                        <Link to={`/updatePositive/${id}`}>
                                            <button className='btn btn-edit'>Editar</button>
                                        </Link>
                                        <button className='btn btn-delete'
                                            onClick={() => onDeletePositive(id)}>Borrar</button>
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

export default EditBehaviourP
