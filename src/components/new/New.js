import React from 'react'
import './new.css'

const New = ({form, onChange, onSubmit}) =>
{
    return (
        <form onSubmit={onSubmit} className="container-form">
            <h2>Trabajo</h2>
            <input type="text" name="sistema" className="textbox-form" placeholder="Sistema" onChange={onChange}/>
            <input type="date" name="fecha" className="textbox-form" onChange={onChange}/>
            <button type="submit" className="btn-agregar">Agregar</button>
        </form>
    )
}

export default New
