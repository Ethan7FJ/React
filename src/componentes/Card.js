import React from "react";
import huron from "./IMG/huron.jpg";
import "./CSS/stilo.css";


class Card extends React.Component{
    render(){

        const {nombre,edad,color} = this.props;

        return(
        <div className="contenido back">
            <div className="font">
                <h1 style={{color:`${color}`}}>Hola {nombre} y tu edad es {edad}</h1>
            </div>
            <div >
                <img src={huron} className="logo" alt=""/>
            </div>
        </div>
        ) 
    }

}

export default Card