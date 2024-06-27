import React from "react";
/* import Card from "../Card"; */
import DibujarM from "../dibujarM";
import useFetch from "../../Hook/hook";
import url from "../../config";

const Maestro =()=>{
    
    const {data} = useFetch(`${url}/info`)

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