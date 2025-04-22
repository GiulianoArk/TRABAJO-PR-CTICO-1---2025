import React from 'react'

const main = (props) => {
  return (
    <>
    <div>
        <h2>Hola soy {props.persona.nombre} {props.persona.apellido}</h2>
        <p>Tengo {props.persona.edad} años</p>
        <p>Mi email es {props.persona.email}</p>
        <p>{props.persona.descripcion}</p>
    </div>
    </>
  )
}

export default main
