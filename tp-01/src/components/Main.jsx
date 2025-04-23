import React from "react";
import "../css/main.css";
import giulianoImg from "../img/giuliano.jpg"; 

const main = (props) => {
  return (
    <>
      <div class="card">
      <img src={giulianoImg} alt="Giuliano" /> 
        <div class="card-content">
          <h2 class="card-title">Nombre: {props.persona.nombre}</h2>
          <h2 class="card-title">Apellido: {props.persona.apellido}</h2>
          <h2 class="card-title">Edad: {props.persona.edad}</h2>
          <h2 class="card-title">Lenguajes: {props.persona.lenguajes[0]}, {props.persona.lenguajes[1]}, {props.persona.lenguajes[2]}, {props.persona.lenguajes[3]}, {props.persona.lenguajes[4]} </h2>
          <h4 class="card-description">Sobre mí: {props.persona.descripcion}</h4>
        </div>
      </div>
    </>
  );
};

export default main;
