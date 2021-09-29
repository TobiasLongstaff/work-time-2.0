import React from 'react'
import Cronometro from '../components/cronometro/Cronometro'

function App() {
    return (
        <div className="container">
            <nav>
                <h2>Work Time v2.0</h2>
            </nav>
            <div className="container-pagina">
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
                            <tr>
                                <td>Google</td>
                                <td>9518</td>
                                <td>01:32:50</td>
                                <td className="td-controles">
                                    <button className="btn-editar editar-empresa"><i className="uil uil-edit-alt"></i></button>
                                </td>
                                <td className="td-controles">
                                    <button className="btn-eliminar eliminar-empresa"><i className="uil uil-trash-alt"></i></button>
                                </td>
                            </tr>
                            <tr>
                                <td>Google</td>
                                <td>9518</td>
                                <td>01:32:50</td>
                                <td className="td-controles">
                                    <button className="btn-editar editar-empresa"><i className="uil uil-edit-alt"></i></button>
                                </td>
                                <td className="td-controles">
                                    <button className="btn-eliminar eliminar-empresa"><i className="uil uil-trash-alt"></i></button>
                                </td>
                            </tr>
                        </tbody>
                    </table>
                </div>
                <Cronometro/>
            </div>
        </div>
    );
}

export default App;
