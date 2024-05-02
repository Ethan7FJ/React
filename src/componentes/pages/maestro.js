import React from "react";
/* import Card from "../Card"; */
import Hola from "../saludo"
import huron from "../IMG/huron.jpg";
import gatito from "../IMG/gatito.png";
import koku from "../IMG/koku.jpg";
import rappi from "../IMG/rappi.jpg";
import visco from "../IMG/visco.jpg";
import Iterador from "../iterante"
import Boton from "../boton";


export default class Maestro extends React.Component{
    constructor(props){
        super(props)
        this.state = {
            data:[{
                "id":1,
                "nombre": "Johitan",
                "descip": "Eres un programador junior medio experimentado estudiante del SENA",
                "img": huron
                
            },
            {
                "id":2,
                "nombre":"Juli",
                "descip":"Es un programador semi junior medio experimentado estudiante del sena",
                "img": gatito,
                "color": "#828180"
            },
            {
                "id":3,
                "nombre":"Carlitos",
                "descip":"Es un programador x casi experimentado estudiante del Sena",
                "img": koku
            },
            {
                "id":4,
                "nombre":"Juanito",
                "descip":"Es un programador y casi experimentado estudiante del Sena",
                "img": visco
            },
            {
                "id":5,
                "nombre":"Miguelito",
                "descip":"Es un programador z casi experimentado estudiante del Sena",
                "img": rappi
            }]
        }
    }
    render(){
        return(
            <div>
                <Iterador
                    chao={this.state.data}
                />
                
                <Hola
                    username = "Johitan"
                />
                <Boton/>
                
            </div>
        )
    }
}