import React from "react";
import "./CSS/stilo.css";

const Hola = ({username})=>(
    <React.Fragment>
        <h1 className="jas">
            Hola a todos soy: {username}
        </h1>
    </React.Fragment>
)

export default Hola
