import React from "react";
import "./Header.css";
import "../../Fonts/stylesheet.css";
import "../../Fonts/ProximaNovaRg.otf";
import Navbar from "../Navbar/Navbar";

export default function Header() {
  
  return (
    <header className="header" id="home">
      <Navbar />

      <div className="overlay text-white text-center">
        <div id="container-main">
          <h1 id="titulo">LUZ DIVINA</h1>

          <p id="frase">
          Somos un equipo de profesionales altamente capacitados que ofrece servicios 
          de lectura de tarot por teléfono. Con una amplia experiencia en el campo de la 
          videncia y una reputación sólida, somos una referencia confiable para aquellos 
          que buscan orientación y claridad en su vida.
          </p>

        </div>
      </div>
    </header>
  );
}
