import React from 'react'
import '../css/main.css'
const main = (props) => {
  return (
    <>
    <div className="card">
        <h2>Nombre: {props.persona.nombre}</h2>
        <h2>Apellido: {props.persona.apellido}</h2>
        <h2>Correo: {props.persona.email}</h2>
        <h3>{props.persona.descripcion}</h3>
        <img src={props.image} alt={props.title} />
    </div>
    </>
  )
}

export default main
