import { useState, useEffect } from 'react'

const useFetchGET = (url) =>
{
    const [data, setData] = useState([])

    useEffect(() => 
    {
        const fetchResource = async () => 
        {
            try
            {
                let res = await fetch(url)
                let data = await res.json()
                setData(data)
            }
            catch(error)
            {
                console.error(error)
            }
        }
        fetchResource()

    }, [url])

    return {data}
    
}

export default useFetchGET