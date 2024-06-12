import React from "react";
import Card from "./Card";

const Iterador = ({chao})=>(
    <div>
        {
            chao.map((chao)=>{
                return(
                    <Card
                        key={chao.id_b}
                        title = {chao.title}
                        descripcion = {chao.descripcion}
                        img = {chao.img}
                    />
                )
            })
        }
    </div>
)

export default Iterador