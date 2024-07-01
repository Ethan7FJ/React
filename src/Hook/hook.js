import { useState, useEffect } from "react";

const useFetch = url=>{
    const [data,setData] = useState([])
    const [loading, setLoading] = useState(true)
    
    useEffect(()=>{
        const cargarComponentes = async()=>{
            try{
                let res = await fetch(url)
                let data = await res.json()
                setData(data)
            }
            catch(error){
                console.error('Error con el fetching data: ', error )
            }
            finally{
                setLoading(false)
            } 
        }
        cargarComponentes()
    },[url])
    return(
        {data,loading}
    )
}

export default useFetch