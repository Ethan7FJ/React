import React from "react";
import Card from "./Card";

const Iterador = ({chao})=>(
    <div>
        {
            chao.map((chao)=>{
                return(
                    <Card
                        key={chao.id}
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

export default Iterador