import React from 'react'
import './tabla.css'
import Filas from '../filas-tabla/Filas'

const Tabla = ({ filas }) => 
(
    <div className="container-tabla">
        <table className="tabla">
            <thead>
                <tr>
                    <th><h1>Sistema</h1></th>
                    <th><h1>Fecha</h1></th>
                    <th><h1>Tiempo</h1></th>
                    <th colSpan="2"><h1>Controles</h1></th>
                </tr>
            </thead>
            <tbody>
                { filas.map((fila) => 
                (
                    <Filas 
                        key ={fila.id} 
                        {...fila}
                    />
                ))}
            </tbody>
        </table>
    </div>
)

export default Tabla
