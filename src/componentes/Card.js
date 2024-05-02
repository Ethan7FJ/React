import React from "react";
/* import img from "../componentes/IMG/huron.jpg"; */
import "./CSS/stilo.css";


class Card extends React.Component{
    /* constructor(props){
        super(props)
        this.state = {
            magine: 'https://cdn.pixabay.com/photo/2020/11/15/18/31/cat-5746771_1280.png'
        }
    }

    componentDidMount(){
        setTimeout(()=>{
            this.setState({
                magine: img
            })
        },3000)
    } */
    render(){

        const {nombre,descip,img,color} = this.props;

        return(<div className="todo">
            
            <div className="contenido" style={{background:`${color}`}}>
                <div className="font">
                    <h1>Hola {nombre}</h1>
                    <p>{descip}</p>
                </div>
                <div>
                    <img src={img} className="logo" alt=""/>
                </div>
            </div>

        </div>) 
    }

}

export default Card