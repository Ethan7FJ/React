import React,{useState,useEffect} from "react";
/* import Card from "../Card"; */
import DibujarM from "../dibujarM";

const Maestro =()=>{
    const [data,setData] = useState([])
    useEffect(()=>{
        const cargarComponentes = async()=>{
            let res = await fetch('http://localhost:8000/api/info')
            let data = await res.json()
            setData(data)
        }
        cargarComponentes()
    },[])
    return(
        <DibujarM
            data = {data}
        />
    )
} 

export default Maestro

/* export default class Maestro extends React.Component{
        state = {
            data:[

            ]
        }
        async componentDidMount(){
            await this.cargarComponentes()
        }

        cargarComponentes = async()=>{
            let res = await fetch('http://localhost:8000/api/info')
            let data = await res.json()
            this.setState({
                data
            })
        }

    render(){
        return(
            <DibujarM
                data = {this.state.data}
            />
        )
    }
} */