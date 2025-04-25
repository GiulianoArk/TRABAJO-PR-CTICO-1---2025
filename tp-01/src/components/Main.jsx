import React from "react";
import "../css/main.css";

import giulianoImg from "../img/giuliano.jpg";
import JeremiasImg from "../img/Jermias.jpg";
import PabloImg from "../img/Pablo.jpg";
import messiImg from "../img/Messi.jpg";
import AlonsoImg from "../img/Fernando-Alonso.jpg";




const main = (props) => {
  return (
   <main> 
   <>
      <div className="contenedorCard">
        <div class="card">
          <img src={giulianoImg} alt="Giuliano" />
          <div >
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
       
      </div>
      <div class="contenedorBtnProyectos">
            <a
              href="https://www.google.com/url?sa=t&source=web&rct=j&opi=89978449&url=https://www.youtube.com/watch%3Fv%3DdQw4w9WgXcQ&ved=2ahUKEwjB-vSQ5e6MAxUXF7kGHa2JCPsQ78AJegQICRAB&usg=AOvVaw0aHtehaphMhOCAkCydRLZU"
              target="blank"
            >
              <button class="btnProyectos">MIS PROYECTOS</button>
            </a>
          
         
          </div>

          <h3>CLIENTES SATISFECHOS</h3>

          <div className="contenedorClientes">
        <div class="cardCliente">
          <img src={JeremiasImg} alt="Giuliano" />
          <div >
            <h2>Jeremías Alvarez</h2>
            <h4 className="sobreMi">"Me cambió la vida, gracias a su fantástico trabajo pude tener una buena página para mi negocio y sacar adelante a mi familia."</h4>
          </div>
    
        </div>

        <div class="cardCliente">
          <img src={PabloImg} alt="Pablo" />
          <div >
            <h2>Ronnie Coleman</h2>
            <h4 className="sobreMi">"Excelente servicio, hizo la página web de mi gimnasio y quedó todo bien, sin problemas."</h4>
          </div>
    
        </div>

        <div class="cardCliente">
          <img src={messiImg} alt="Messi" />
          <div >
            <h2>Lionel Messi</h2>
            <h4 className="sobreMi">"Tipaso, hizo un muy buen trabajo 10/10."</h4>
          </div>
    
        </div>

        <div class="cardCliente">
          <img src={AlonsoImg} alt="Giuliano" />
          <div >
            <h2>Fernando Alonso</h2>
            <h4 className="sobreMi">"Muy buen servicio."</h4>
          </div>
    
        </div>
       
      </div>
        
    </>

    </main>
  );
};

export default main;
