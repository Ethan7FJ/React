import React from "react";
import Card from "./Card";

export default function Iterador(props){
    return(
        <div>
        {
            props.chao.map((chao)=>{
            return(
                    <Card 
                        nombre = {chao.nombre}
                        descip = {chao.descip}
                        img = {chao.img}
                        color = {chao.color}
                    />    
                )
            })
        }
        </div>
    )
}