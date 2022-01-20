import React from 'react'
import { Link } from "react-router-dom";
import "./EditClassroom.css";

import Header from '../Components/Header/Header';


const EditBehaviourE = () => {
    var exchange = JSON.parse(localStorage.getItem("exchange") || []);

    const onDeleteExchange = (id) => {
        if (
            window.confirm("Estàs segur que vols borrar aquesta conducta?")
        ) {
            //delete the array of the selected id
            exchange.splice(id,1)
            // Re-serialize the array back into a string and store it in localStorage
            localStorage.setItem('exchange', JSON.stringify(exchange));
            //Remove item from localstorage so it doesn't recover old data from deleted item
            localStorage.removeItem(id);
        }
        setTimeout(() => window.location.reload(), 500)
    };

    return (
        <>
            <Header />
            <div style={{ marginTop: "50px" }}>
            <h2 className="editTitle">Bescanvis</h2>
                <table className="styled-table">
                    <thead>
                        <tr>
                            <th style={{ textAlign: "center" }}>No.</th>
                            <th style={{ textAlign: "center" }}>Bescanvi</th>
                            <th style={{ textAlign: "center" }} >Emoji</th>
                            <th style={{ textAlign: "center" }} >Punts</th>
                            <th style={{ textAlign: "center" }} >Accions</th>
                        </tr>
                    </thead>
                    <tbody>
                        {Object.keys(exchange).map((id, index) => {
                            return (
                                <tr key={id}>
                                    <th scope="row">{index + 1}</th>
                                    <td>{exchange[id].name}</td>
                                    <td>{exchange[id].emoji}</td>
                                    <td>{exchange[id].points}</td>
                                    <td>
                                        <Link to={`/updateExchange/${id}`}>
                                            <button className='btn btn-edit'>Editar</button>
                                        </Link>
                                        <button className='btn btn-delete'
                                            onClick={() => onDeleteExchange(id)}>Borrar</button>
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

export default EditBehaviourE
