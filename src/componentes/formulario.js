import React from "react";

export default class Formulario extends React.Component{

    render(){
        const {onChange,formu,onSubmit} = this.props
        return(
            <div>
                <form onSubmit={onSubmit}>
                    <div>
                        <label>Nombre:</label>
                        <input type="text" name="title" placeholder="Nombre aqui!!" onChange={onChange} value={formu.title}/>
                    </div>
                    <div>
                        <label>Descripcion:</label>
                        <input type="text" name="descripcion" placeholder="Descipcion aqui!!" onChange={onChange} value={formu.descripcion}/>
                    </div>
                    <div>
                        <label>Url de la imagen:</label>
                        <input type="text" name="img" placeholder="Imagen aqui!!" onChange={onChange} value={formu.img}/>
                    </div>
                    <button type="submit">Enviar</button>
                </form>
            </div>
        )
    }
}