import React from "react"
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faInstagram, faYoutube, faMedium, faLinkedin } from '@fortawesome/free-brands-svg-icons';

import verticalLine from "../../assets/vertical-line.svg"
import logoMeninasDigitais from "../../assets/logo-meninas-digitais.png"
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
          Minerv@s Digitais UFRJ © 2024 - Todos os direitos reservados
        </div>
        <div className="social-icons">
          <a href="https://www.instagram.com/minervasdigitaisufrj/" target="_blank" rel="noopener noreferrer">
            <FontAwesomeIcon icon={faInstagram} style={{color: "#FFFFFF"}} size={window.innerWidth>="970" ? "2xl" : "lg"} />
          </a> 
          <a href="https://www.youtube.com/@minervasdigitais2893" target="_blank" rel="noopener noreferrer">
            <FontAwesomeIcon icon={faYoutube} style={{color: "#FFFFFF"}} size={window.innerWidth>="970" ? "2xl" : "lg"} />
          </a>
          <a href="https://medium.com/minervas-digitais-ufrj" target="_blank" rel="noopener noreferrer">
            <FontAwesomeIcon icon={faMedium} style={{color: "#FFFFFF"}} size={window.innerWidth>="970" ? "2xl" : "lg"} />
          </a>
          <a href="https://www.linkedin.com/in/minervas-digitais-ufrj/" target="_blank" rel="noopener noreferrer">
            <FontAwesomeIcon icon={faLinkedin} style={{color: "#FFFFFF"}} size={window.innerWidth>="970" ? "2xl" : "lg"} />
          </a>
        </div>
      </div>
      <img src={verticalLine} className="vertical-line" alt="vertical-line" />
      <div className="right-side">
        <div className="top-logos">
          <div>
            <a href="https://meninas.sbc.org.br/" target="_blank" rel="noopener noreferrer" style={{ textDecoration: "none" }}>
            <img className="logoMeninasDigitais" src={logoMeninasDigitais} alt="Logo do projeto parceiro Meninas Digitais" />
            <div className="project-text">Projeto Parceiro</div>
            </a>
          </div>
          <a href="https://www.dcc.ufrj.br/" target="_blank" rel="noopener noreferrer">
          <img className="logoIC" src={logoIC} alt="Logo do Instituto de Computação da UFRJ (IC)" />
          </a>
        </div>
        <div className="bottom-logo">
          <a href="https://www.sbc.org.br/" target="_blank" rel="noopener noreferrer">
          <img className="logoSBC" src={logoSBC} alt="Logo da Sociedade Brasileira de Computação (SBC)" />
          </a>
        </div>
      </div>
    </div>
  )
}

export default Footer
