import React from "react";
/* import Card from "../Card"; */
import Hola from "../saludo"
import Iterador from "../iterante"
import Boton from "../boton";


export default class Maestro extends React.Component{
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
            <div>
                 <Hola
                    username = "Johitan"
                />
                <Iterador
                    chao={this.state.data}
                />
                <Boton/>
            </div>
        )
    }
}