import React from "react";
import "./CSS/stilo.css";

const Hola = ({username})=>(
    <div>
        <h1 className="jas">
            Hola a todos soy: {username}
        </h1>
    </div>
)

export default Hola
