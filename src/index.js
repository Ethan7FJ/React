import React from "react";
import ReactDOM from "react-dom/client";
import Card from "./componentes/Card";


const root = ReactDOM.createRoot(
  document.getElementById('root')
)

root.render(<Card

  nombre= "Johitan"
  edad = "19"
  color = "63545F"

/>)



/* const user = {
  nombre : 'johan',
  apellido: 'Fetecua',
  edad: 19,
  avatar:'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQNG7BjVu8_Xq0YWZSvz1DRlYm9V9VmNE-OaN05uXG4bQ&s'
}

function datouser(){
  return user.nombre +""+ user.apellido +""+ user.edad
}

const element = (
<div>
  <h1>hola,{datouser(user.nombre)}</h1>
  <img src={user.avatar}/>
</div>
) */