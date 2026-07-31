import React from "react"
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faInstagram, faYoutube, faMedium, faLinkedin } from '@fortawesome/free-brands-svg-icons';

// Removi o import do verticalLine pois usaremos a div .divider
import logoMeninasDigitais from "../../assets/new-meninasdigitais-logo.png"
import logoIC from "../../assets/logo-ic.png"
import logoSBC from "../../assets/logo-sbc.png"

import "./Footer.scss"

function Footer() {
  return (
    <div className="footer" id="footer">
      <div className="left-side">
        <button className="contact-button" onClick={() => window.location.href = "mailto:contato@minervasdigitais.ufrj.br"}>
          Contato
        </button>
        <div className="copyright">
          Minerv@s Digitais UFRJ © 2026 - Todos os direitos reservados
        </div>
        <div className="social-icons">
          <a href="https://www.instagram.com/minervasdigitaisufrj/" target="_blank" rel="noopener noreferrer">
            <FontAwesomeIcon icon={faInstagram} style={{color: "#FFFFFF"}} size={window.innerWidth >= 970 ? "2xl" : "lg"} />
          </a> 
          <a href="https://www.youtube.com/@minervasdigitais2893" target="_blank" rel="noopener noreferrer">
            <FontAwesomeIcon icon={faYoutube} style={{color: "#FFFFFF"}} size={window.innerWidth >= 970 ? "2xl" : "lg"} />
          </a>
          <a href="https://medium.com/minervas-digitais-ufrj" target="_blank" rel="noopener noreferrer">
            <FontAwesomeIcon icon={faMedium} style={{color: "#FFFFFF"}} size={window.innerWidth >= 970 ? "2xl" : "lg"} />
          </a>
          <a href="https://www.linkedin.com/in/minervas-digitais-ufrj/" target="_blank" rel="noopener noreferrer">
            <FontAwesomeIcon icon={faLinkedin} style={{color: "#FFFFFF"}} size={window.innerWidth >= 970 ? "2xl" : "lg"} />
          </a>
        </div>
      </div>

      {/* Trocado a img pela div que configuramos no SCSS */}
      <div className="divider"></div>
      
      <div className="right-side">
        {/* Nova div para agrupar as duas logos de cima */}
        <div className="top-logos-row">
          <a href="https://meninas.sbc.org.br/" target="_blank" rel="noopener noreferrer" className="class-MeninasDigitais" style={{ textDecoration: "none" }}>
            <img className="logoMeninasDigitais" src={logoMeninasDigitais} alt="Logo Meninas Digitais" />
            <div className="project-text">Projeto Parceiro</div>
          </a>

          <a href="https://www.dcc.ufrj.br/" target="_blank" rel="noopener noreferrer" className="class-IC">
            <img className="logoIC" src={logoIC} alt="Logo IC UFRJ" />
          </a>
        </div>

        {/* Logo da SBC sozinha embaixo */}
        <a href="https://www.sbc.org.br/" target="_blank" rel="noopener noreferrer" className="class-SBC">
          <img className="logoSBC" src={logoSBC} alt="Logo SBC" />
        </a>
      </div>
    </div>
  )
}

export default Footer;