import React, { useState, useEffect } from "react" 
import { HashLink as Link } from "react-router-hash-link"

import "./Menu.scss"

function Menu({ menuOpen }) {

  const [isAboutOpen, setAboutOpen] = useState(false);
  const [isActionsOpen, setActionsOpen] = useState(false);

  const toggleAbout = (e) => {
    e.preventDefault();
    setAboutOpen(!isAboutOpen);
    setActionsOpen(false);  // para impedir que abram dois dropdowns ao mesmo tempo, fecha o do "ações"
  };

  


  const toggleActions = (e) => {
    e.preventDefault();
    setActionsOpen(!isActionsOpen);
    setAboutOpen(false);  // para impedir que abram dois dropdowns ao mesmo tempo, fecha o do "sobre"
  };

  

  const scrollWithOffset = (el, offset) => {
    const elementPosition = el.offsetTop - offset;
    window.scroll({
      top: elementPosition,
      left: 0,
      behavior: "smooth"
    });
  }

  useEffect(() => {
    const closeDropdownsOnOutsideClick = (e) => {   // Verifica se o clique foi fora dos dropdowns
      if (!e.target.closest(".dropdown") && !e.target.closest(".botao-navbar")) {
        setAboutOpen(false);
        setActionsOpen(false);
      }
    };

    // Adiciona o listener de clique
    document.addEventListener("click", closeDropdownsOnOutsideClick);

    // Remove o listener ao desmontar o componente
    return () => {
      document.removeEventListener("click", closeDropdownsOnOutsideClick);
    };
  }, []);



  return (
    <div className={`button-group ${menuOpen ? "open" : ""}`}>
      <Link to ="/home" smooth className="botao-navbar">
        Home
      </Link>
      
      <div className="dropdown-container">
        <button className="botao-navbar" onClick={toggleAbout}>
          Sobre {isAboutOpen ? '▴' : '▾'}
        </button>

        {isAboutOpen && (
          <div className= "dropdown">
            <Link smooth to="/about" className="dropdown-item">Sobre o Programa</Link>
            <Link smooth to="/about" className="dropdown-item">Projetos Integrados</Link>
            <Link smooth to="/about" className="dropdown-item">O que nos Move</Link>
            <Link smooth to="/about" className="dropdown-item" style={{borderRadius: "0 0 10px 10px"}}>Nossa Equipe</Link>
          </div>
        )}
      </div>

      <div className="dropdown-container">
        <button className="botao-navbar" onClick={toggleActions}>
          Ações {isActionsOpen ? '▴' : '▾'}
        </button>

        {isActionsOpen && (
          <div className= "dropdown">
            <Link smooth to="/actions" className="dropdown-item">Levantamentos</Link>
            <Link smooth to="/actions" className="dropdown-item">Palestras e Cursos</Link>
            <Link smooth to="/actions" className="dropdown-item" style={{borderRadius: "0 0 10px 10px"}}>Materiais</Link>
          </div>
        )}
      </div>
      

      <Link to="/home" smooth className="botao-navbar" scroll={el => scrollWithOffset(el, 108)}>
        Contato
      </Link>

    </div>
  )
}

export default Menu
