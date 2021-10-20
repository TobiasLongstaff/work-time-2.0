import React, {useState} from 'react'
import New from './New'
import url from '../../services/settings'
import Cookies from 'universal-cookie';

const cookies = new Cookies();
const NewContainer = () =>
{
    const [ form, setForm ] = useState({fecha: '', tiempo: cookies.get('tiempo'), sistema: ''})
    
    const handleChange = e =>
    {
        setForm(
        {
            ...form,
            [e.target.name]: e.target.value
        })
    }

    const handleSubmit = async e =>
    {
        e.preventDefault();
        try
        {
            let config = 
            {
                method: 'POST',
                headers: 
                {
                    'Accept': 'application/json',
                    'Content-Type': 'application/json'
                },
                body: JSON.stringify(form)
            }
            await fetch(url, config)
        }
        catch (error)
        {
            console.error(error)
        }
    }

    return (
        <New
        form={form}
        onChange={handleChange}
        onSubmit={handleSubmit}
        />
    )
}

export default NewContainer