import React from "react";

export default class Formulario extends React.Component{
    
    handleSubmit=e=>{
        e.preventDefault()
        console.log(this.formu)
    }
    render(){
        const {onChange,formu} = this.props
        return(
            <div>
                <form onSubmit={this.handleSubmit}>
                    <div>
                        <label>Nombre:</label>
                        <input type="text" name="nombre" placeholder="Nombre aqui!!" onChange={onChange} value={formu.nombre}/>
                    </div>
                    <div>
                        <label>Descripcion:</label>
                        <input type="text" name="descip" placeholder="Descipcion aqui!!" onChange={onChange} value={formu.descip}/>
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