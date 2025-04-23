import React from "react";
import "../css/main.css";
import giulianoImg from "../img/giuliano.jpg";

const main = (props) => {
  return (
    <>
      <div className="contenedorCard">
        <div class="card">
          <img src={giulianoImg} alt="Giuliano" />
          <div class="card-content">
            <h2>Nombre: {props.persona.nombre}</h2>
            <h2>Apellido: {props.persona.apellido}</h2>
            <h2>Edad: {props.persona.edad}</h2>
            <h2>
              Lenguajes: {props.persona.lenguajes[0]} -{" "}
              {props.persona.lenguajes[1]} - {props.persona.lenguajes[2]} -{" "}
              {props.persona.lenguajes[3]} - {props.persona.lenguajes[4]}
            </h2>
            <h2>Correo: {props.persona.email}</h2>
            <h2>Teléfono: {props.persona.telefono}</h2>
            <h4 className="sobreMi">Sobre mí: {props.persona.descripcion}</h4>
          </div>
          

        </div>
        <div chass="contenedorBtnProyectos">
            <a
              href="https://www.google.com/url?sa=t&source=web&rct=j&opi=89978449&url=https://www.youtube.com/watch%3Fv%3DdQw4w9WgXcQ&ved=2ahUKEwjB-vSQ5e6MAxUXF7kGHa2JCPsQ78AJegQICRAB&usg=AOvVaw0aHtehaphMhOCAkCydRLZU"
              target="blank"
            >
              <button className="btnProyectos">MIS PROYECTOS</button>
            </a>
          </div>
      </div>
    </>
  );
};

export default main;
