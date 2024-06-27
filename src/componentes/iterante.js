import React from "react";
import Card from "./Card";

const Iterador = ({chao})=>(
    <React.Fragment>
        {
            chao.map((chao)=>{
                    <Card
                        key={chao.id_b}
                        {...chao}
                    />
            })
        }
    </React.Fragment>
)

export default Iterador