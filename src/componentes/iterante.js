import React from "react";
import Card from "./Card";

const Iterador = ({chao})=>(
    <React.Fragment>
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
    </React.Fragment>
)

export default Iterador