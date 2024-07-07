import React from "react";

import "./styles/global.css";
import "./styles/pages/landing.css";
import logoimg from "./images/Logo.svg";

function App() {
  return (
    <div id="page-landing">
      <div className="content-wrapper">
        <img src={logoimg} alt="Happy" />

        <main>
          <h1>Leve felicidade para o Mundo</h1>
          <p>Visite orfanatos e mude a vida de muitas crianças.</p>
        </main>

        <div className="location">
          <strong>Belém</strong>
          <span>PA</span>
        </div>

        <a href="" className="enter-app"></a>
      </div>
    </div>
  );
}

export default App;
