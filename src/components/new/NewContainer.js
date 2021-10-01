import React, {useState} from 'react'
import New from './New'
import url from '../../services/settings'

const NewContainer = () =>
{
    const [ form, setForm ] = useState({fecha: '', tiempo: '', sistema: ''})
    
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
            let res = await fetch(url, config)
            console.log(JSON.stringify(form))
            console.log(res.json())
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