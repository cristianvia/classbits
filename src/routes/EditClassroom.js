import React from 'react'
import Link from 'react-router-dom'


const EditClassroom = () => {
    var classroom = JSON.parse(localStorage.getItem("classroom") || []);

    return (
        <div>
            <table className="styled-table">
                <thead>
                    <tr>
                        <th>Nom</th>
                        <th>Cognom</th>
                    </tr>
                </thead>
                <tbody>
                    {Object.keys(classroom).map((id, index) => {
                        return (
                            <tr key={id}>
                                <th scope="row">{index + 1}</th>
                                <td>{data[id].name}</td>
                                <td>{data[id].surname}</td>
                                <td>
                                    <Link to={`/update/${id}`}>
                                        <button>Editar
                                        </button>
                                    </Link>
                                </td>
                            </tr>
                        )
                    })}
                </tbody>
            </table>
        </div>
    )
}

export default EditClassroom
