import React from 'react'
import './filas.css'

const Filas = ({ sistema, fecha, tiempo }) =>
(
    <tr>
        <td>{sistema}</td>
        <td>{fecha}</td>
        <td>{tiempo}</td>
        <td className="td-controles">
            <button className="btn-editar editar-empresa"><i className="uil uil-edit-alt"></i></button>
        </td>
        <td className="td-controles">
            <button className="btn-eliminar eliminar-empresa"><i className="uil uil-trash-alt"></i></button>
        </td>
    </tr>
)

export default Filas