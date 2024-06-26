import React from "react";
import Formulario from "../componentes/formulario";
import Card from "../componentes/Card";

const Dibujar = ({formu,onChange,onSubmit})=>
(<React.Fragment>
        <Card
            {...formu}
        />
        <Formulario
            onSubmit= {onSubmit}
            onChange = {onChange}
            formu={formu}
        />
    </React.Fragment>)

export default Dibujar