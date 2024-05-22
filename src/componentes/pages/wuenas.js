import React from "react";
import "../CSS/stilo.css";

export default class Wuenas extends React.Component{
    state={}
    handleChange=e=>{
        this.setState({[e.target.name]:e.target.value})
    }
    handleSubmit=e=>{
        e.preventDefault()
        console.log(this.state)
    }
    render(){
        return(
            <div>
                <form onSubmit={this.handleSubmit}>
                    <div>
                        <label>Nombre:</label>
                        <input type="text" name="nombre" placeholder="Nombre aqui!!" onChange={this.handleChange} value={this.state.nombre}/>
                    </div>
                    <div>
                        <label>Descripcion:</label>
                        <input type="text" name="descrip" placeholder="Descipcion aqui!!" onChange={this.handleChange} value={this.state.descrip}/>
                    </div>
                    <div>
                        <label>Url de la imagen:</label>
                        <input type="url" name="urlIMG" placeholder="Imagen aqui!!" onChange={this.handleChange} value={this.state.urlIMG}/>
                    </div>
                    <button type="submit">Enviar</button>
                </form>
            </div>
        )
    }

}