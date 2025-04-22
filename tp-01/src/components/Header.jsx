import React from 'react'

const header = (props) => {
  return (
    <div>
        <h1>Portfolio de {props.persona.nombre} {props.persona.apellido}</h1>
    </div>
  )
}

export default header