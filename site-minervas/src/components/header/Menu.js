import React, { useState, useEffect } from "react"
import { HashLink as Link } from "react-router-hash-link"
import relatorio from "../../assets/Relatório_2023-Mulheres_nas_Graduações_deTI_UFRJ.pdf";
import "./Menu.scss"

function Menu() {
  const [isAboutOpen, setAboutOpen] = useState(false);
  const [isActionsOpen, setActionsOpen] = useState(false);
  const [isMobileOpen, setMobileOpen] = useState(false);

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
    <nav className="navbar">
      {/* menu mobile */}
      <button
        className="menu-toggle"
        onClick={() => setMobileOpen(!isMobileOpen)}
      >
        {isMobileOpen ? "✕" : "☰"}
      </button>

      {/* menu principal */}
      <div className={`button-group ${isMobileOpen ? "open" : ""}`}>
        <Link to ="/#home" smooth className="botao-navbar" onClick={() => setMobileOpen(false)}>
          Home
        </Link>

        <div className="dropdown-container">
        <button smooth to="/sobre#sobre" className="botao-navbar" onClick={toggleAbout}>
          Sobre {isAboutOpen ? '▴' : '▾'}
          </button>

          {isAboutOpen && (
          <div className= "dropdown">
              <Link smooth to="/sobre#sobre" className="dropdown-item">Sobre o Programa</Link>
            <Link smooth 
                to="/sobre#projetos"
              scroll={el => {
                const yOffset = -100;
                const y = el.getBoundingClientRect().top + window.pageYOffset + yOffset;
                window.scrollTo({ top: y, behavior: 'smooth' });
              }}
              className="dropdown-item">
                Projetos Integrados
              </Link>
            <Link smooth 
                to="/sobre#motivacao"
              scroll={el => {
                const yOffset = -100;
                const y = el.getBoundingClientRect().top + window.pageYOffset + yOffset;
                window.scrollTo({ top: y, behavior: 'smooth' });
              }}
              className="dropdown-item">
                O que nos Move
              </Link>
            <Link smooth 
                to="/sobre#equipe"
              scroll={el => {
                const yOffset = -100;
                const y = el.getBoundingClientRect().top + window.pageYOffset + yOffset;
                window.scrollTo({ top: y, behavior: 'smooth' });
              }}
              className="dropdown-item">
                Nossa Equipe
              </Link>
            </div>
          )}
        </div>

        <div className="dropdown-container">
          <button className="botao-navbar" onClick={toggleActions}>
          Ações {isActionsOpen ? '▴' : '▾'}
          </button>

          {isActionsOpen && (
          <div className= "dropdown">
            <Link smooth to={relatorio} target="_blank" className="dropdown-item">Levantamentos</Link>
            <Link smooth 
                to="/acoes#palestras"
              scroll={el => {
                const yOffset = -100;
                const y = el.getBoundingClientRect().top + window.pageYOffset + yOffset;
                window.scrollTo({ top: y, behavior: 'smooth' });
              }}
              className="dropdown-item">
                Palestras e Cursos
              </Link>
            <Link smooth 
                to="/acoes#Materials"
              scroll={el => {
                const yOffset = -150;
                const y = el.getBoundingClientRect().top + window.pageYOffset + yOffset;
                window.scrollTo({ top: y, behavior: 'smooth' });
              }}
              className="dropdown-item">
                Materiais
              </Link>
            </div>
          )}
        </div>

        <Link
          to="/#footer"
          smooth
          className="botao-navbar"
          scroll={(el) => scrollWithOffset(el, 108)}
          onClick={() => setMobileOpen(false)}
        >
          Contato
        </Link>

      </div>
    </nav>
  )
}

export default Menu
