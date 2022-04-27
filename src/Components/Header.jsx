import React from "react";
import ES from "../Assets/EstudiosSociales.svg";

const Header = () => {
  return (
    <>
      <h1>QUIZ!</h1>
      <h2>CIENCIAS</h2>
      <div className="spinnerContainer">
        <div className="loadingContainer">
          <div className="loader1"></div>
          <div className="loader2"></div>
        </div>
      </div>
      <h5>Cargando preguntas...</h5>
      <p>¿Estas preparado?</p>
      <p>
        Vamos a sacarnos un <span>100</span> 😉
      </p>
      <img src={ES} className="imgES" alt="logo" />
    </>
  );
};

export default Header;
