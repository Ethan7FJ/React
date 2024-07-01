import React from "react";
import Card from "./Card";

const Iterador = ({chao})=>{
    console.log(chao)
    return(
        <React.Fragment>
            {chao ? (
                chao.length > 0 ? (
                    chao.map((chao) => (
                        <Card
                            key={chao.id_b}
                            {...chao}
                        />
                    ))
                ) : (
                    <p> No hay datos disponibles</p>
            )

        ) : (
            <p>Cargando...</p>
           )}

        </React.Fragment>
    );
};
export default Iterador