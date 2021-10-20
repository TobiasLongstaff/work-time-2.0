import React from 'react'
import './filas.css'
import url from '../../services/settings'
import Swal from 'sweetalert2'

const Filas = ({ id, sistema, fecha, tiempo }) =>
{
    const handelEliminar = async () =>
    {
        console.log(id)
        Swal.fire(
        {
            title: 'Are you sure?',
            text: "You won't be able to revert this!",
            icon: 'warning',
            showCancelButton: true,
            confirmButtonColor: '#3085d6',
            cancelButtonColor: '#d33',
            confirmButtonText: 'Yes, delete it!'
        }).then((result) => 
        {
            if(result.isConfirmed) 
            {
                try
                {
                    let config = 
                    {
                        method: 'DELETE',
                        headers: 
                        {
                            'Accept': 'application/json',
                            'Content-Type': 'application/json'
                        }
                    }
                    let res = fetch(url+'?id='+id, config)
                    console.log(res.json)
                    Swal.fire(
                        'Deleted!',
                        'Your file has been deleted.',
                        'success'
                    )
                }
                catch (error)
                {
                    console.error(error)
                }
            }
        })
    }

    const handelEditar = () =>
    {
        // return(
        //    <New from={form}/> 
        // )
    }

    return(
        <tr>
            <td>{sistema}</td>
            <td>{fecha}</td>
            <td>{tiempo}</td>
            <td className="td-controles">
                <button onClick={handelEditar} className="btn-editar editar-empresa"><i className="uil uil-edit-alt"></i></button>
            </td>
            <td className="td-controles">
                <button onClick={handelEliminar} className="btn-eliminar eliminar-empresa"><i className="uil uil-trash-alt"></i></button>
            </td>
        </tr>
    )
}

export default Filas