import React, { useState, useEffect } from "react";
import { useNavigate, useLocation } from "react-router-dom";
import relatorio from "../../assets/Relatório_2023-Mulheres_nas_Graduações_deTI_UFRJ.pdf";
import "./Menu.scss";

function Menu() {
  const [isAboutOpen, setAboutOpen] = useState(false);
  const [isActionsOpen, setActionsOpen] = useState(false);
  const [isMobileOpen, setMobileOpen] = useState(false);

  const navigate = useNavigate();
  const location = useLocation();

  const toggleAbout = (e) => {
    e.preventDefault();
    
    setAboutOpen(!isAboutOpen);
    setActionsOpen(false);
  };

  const toggleActions = (e) => {
    e.preventDefault();
     
    setActionsOpen(!isActionsOpen);
    setAboutOpen(false);
  };

  const goTo = (path, id, offset = 100) => {
    // fecha menus
    setMobileOpen(false);
    setAboutOpen(false);
    setActionsOpen(false);

    const doScroll = () => {
      if (!id) return;
      const el = document.getElementById(id);
      if (!el) return;

      const y =
        el.getBoundingClientRect().top + window.pageYOffset - offset;

      window.scrollTo({ top: y, behavior: "smooth" });
    };

    if (location.pathname !== path) {
      navigate(path);
      // espera a tela renderizar
      setTimeout(doScroll, 80);
    } else {
      doScroll();
    }
  };

  useEffect(() => {
    const closeDropdownsOnOutsideClick = (e) => {
      const target = e.target ;
      if (!target.closest(".dropdown") && !target.closest(".botao-navbar")) {
        setAboutOpen(false);
        setActionsOpen(false);
      }
    };

    document.addEventListener("click", closeDropdownsOnOutsideClick);
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
        type="button"
      >
        {isMobileOpen ? "✕" : "☰"}
      </button>

      {/* menu principal */}
      <div className={`button-group ${isMobileOpen ? "open" : ""}`}>
        {/* HOME */}
        <button
          type="button"
          className="botao-navbar"
          onClick={() => goTo("/", "home", 108)}
        >
          Home
        </button>

        {/* SOBRE */}
        <div className="dropdown-container">
          <button
            type="button"
            className="botao-navbar"
            onClick={toggleAbout}
          >
            Sobre {isAboutOpen ? "▴" : "▾"}
          </button>

          {isAboutOpen && (
            <div className="dropdown">
              <button
                type="button"
                className="dropdown-item"
                onClick={() => goTo("/sobre", "sobre", 100)}
              >
                Sobre o Programa
              </button>

              <button
                type="button"
                className="dropdown-item"
                onClick={() => goTo("/sobre", "projetos", 100)}
              >
                Projetos Integrados
              </button>

              <button
                type="button"
                className="dropdown-item"
                onClick={() => goTo("/sobre", "motivacao", 100)}
              >
                O que nos Move
              </button>

              <button
                type="button"
                className="dropdown-item"
                onClick={() => goTo("/sobre", "equipe", 100)}
              >
                Nossa Equipe
              </button>
            </div>
          )}
        </div>

        {/* AÇÕES */}
        <div className="dropdown-container">
          <button type="button" className="botao-navbar" onClick={toggleActions}>
            Ações {isActionsOpen ? "▴" : "▾"}
          </button>

          {isActionsOpen && (
            <div className="dropdown">
              {/* PDF: sempre <a href> */}
              <a
                href={relatorio}
                target="_blank"
                rel="noopener noreferrer"
                className="dropdown-item"
                onClick={() => {
                  setMobileOpen(false);
                  setAboutOpen(false);
                  setActionsOpen(false);
                }}
              >
                Levantamentos
              </a>

              <button
                type="button"
                className="dropdown-item"
                onClick={() => goTo("/acoes", "palestras", 100)}
              >
                Palestras e Cursos
              </button>

              <button
                type="button"
                className="dropdown-item"
                onClick={() => goTo("/acoes", "Materials", 150)}
              >
                Materiais
              </button>
            </div>
          )}
        </div>

        {/* CONTATO */}
        <button
          type="button"
          className="botao-navbar"
          onClick={() => goTo("/", "footer", 108)}
        >
          Contato
        </button>
      </div>
      

      <Link to="/#Contact" smooth className="botao-navbar" scroll={el => scrollWithOffset(el, 108)}>
        Contato
      </Link>

    </div>
  )
}

export default Menu;
