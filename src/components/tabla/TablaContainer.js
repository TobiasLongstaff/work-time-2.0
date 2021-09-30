import React from 'react'
import Tabla from './Tabla'
import useFetchGET from '../../hooks/useFetchGET'
import url from '../../services/settings'

const TablaContainer = () =>
{ 
    const { data } = useFetchGET(`${url}`)

    return (
        <Tabla filas={data}/>
    )
}

export default TablaContainer