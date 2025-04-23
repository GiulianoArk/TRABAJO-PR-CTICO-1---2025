import React from 'react'
import "../css/header.css"
const header = (props) => {
  return (
    <header className='header'>
      
      <h1>Portfolio de {props.persona.nombre} {props.persona.apellido}</h1>
      
    
    </header>
  )
}

export default header