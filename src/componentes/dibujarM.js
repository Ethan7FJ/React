import React from "react";
import Hola from "../componentes/saludo"
import Iterador from "../componentes/iterante"
import Boton from "../componentes/boton";

const DibujarM = ({data,loading})=>{
   return(
    <React.Fragment>
    <Hola
       username = "Johitan"
    />
    <Iterador
       chao={data}
    />
    <Boton/>
</React.Fragment>
    
)
}

export default DibujarM