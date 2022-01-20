import React from 'react'
import { Link } from "react-router-dom";
import "./EditClassroom.css";

import Header from '../Components/Header/Header';


const EditBehaviourN = () => {
    var negative = JSON.parse(localStorage.getItem("negative") || []);

    const onDeleteNegative = (id) => {
        if (
            window.confirm("Estàs segur que vols borrar aquesta conducta?")
        ) {
            //delete the array of the selected id
            negative.splice(id,1)
            // Re-serialize the array back into a string and store it in localStorage
            localStorage.setItem('negative', JSON.stringify(negative));
        }
        setTimeout(() => window.location.reload(), 500)
    };

    return (
        <>
            <Header />
            <div style={{ marginTop: "50px" }}>
            <h2 className="editTitle">Negatius</h2>
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
                        {Object.keys(negative).map((id, index) => {
                            return (
                                <tr key={id}>
                                    <th scope="row">{index + 1}</th>
                                    <td>{negative[id].name}</td>
                                    <td>{negative[id].emoji}</td>
                                    <td>{negative[id].points}</td>
                                    <td>
                                        <Link to={`/updateNegative/${id}`}>
                                            <button className='btn btn-edit'>Editar</button>
                                        </Link>
                                        <button className='btn btn-delete'
                                            onClick={() => onDeleteNegative(id)}>Borrar</button>
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

export default EditBehaviourN
