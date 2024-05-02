import React from "react";
import "./CSS/stilo.css";

function Hola(props){
    return(
        <div>
            <h1 className="jas">
                Hola a todos soy: {props.username}
            </h1>
        </div>
    )
}

export default Hola
