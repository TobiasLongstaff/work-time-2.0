import React from 'react'
import './new.css'

const New = ({ onChange, onSubmit, form }) =>
{
    return (
        <form onSubmit={onSubmit} className="container-form">
            <h2>Trabajo</h2>
            <input type="text" name="sistema" className="textbox-form" placeholder="Sistema" onChange={onChange} value={form.sistema}/>
            <input type="date" name="fecha" className="textbox-form" onChange={onChange} value={form.fecha}/>
            <button type="submit" className="btn-agregar">Agregar</button>
        </form>
    )
}

export default New
