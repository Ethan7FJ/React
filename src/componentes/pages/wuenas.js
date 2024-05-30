import React from "react";
import "../CSS/stilo.css";
import Formulario from "../formulario";
import Card from "../Card";

export default class Wuenas extends React.Component{
    state={
        formu:{
            nombre:'',
            descip:'',
            img:''
        }
    }

    handleChange=e=>{
        this.setState({
            formu:{
                ...this.state.formu,
                [e.target.name]:e.target.value
            }
        })
    }
    
   render(){
    return(<div>
        <Card
            {...this.state.formu}
        />
        <Formulario
            onChange = {this.handleChange}
            formu={this.state.formu}
        />
    </div>)
   }

}