import React from "react";
import "./CSS/stilo.css";

const Card = ({title,descripcion,img})=>(
    <div className="todo">
            
            <div className="contenido">
                <div className="font">
                    <h1>Hola {title}</h1>
                    <p>{descripcion}</p>
                </div>
                <div>
                    <img src={img} className="logo" alt=""/>
                </div>
            </div>

        </div>
)

/* class Card extends React.Component{
    render(){
 
        const {title,descripcion,img} = this.props;

        return(<div className="todo">
            
            <div className="contenido">
                <div className="font">
                    <h1>Hola {title}</h1>
                    <p>{descripcion}</p>
                </div>
                <div>
                    <img src={img} className="logo" alt=""/>
                </div>
            </div>

        </div>) 
    }

} */

export default Card