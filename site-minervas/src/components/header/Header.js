import React, { useState, useEffect } from "react";
import { FaBars } from "react-icons/fa";

import logonova from "../../assets/logonova-completa.svg"
import Menu from "./Menu"

import "./Header.scss"

function Header() {
  const [menuOpen, setMenuOpen] = useState(false);

  useEffect(() => {
    const closeMenuIfLargeScreen = () => { // para fechar o menu se ele estiver aberto e a tela é aumentada
      if (window.innerWidth > 970 && menuOpen) {
        setMenuOpen(false);
      }
    };
  
    window.addEventListener("resize", closeMenuIfLargeScreen);
  
    return () => {
      window.removeEventListener("resize", closeMenuIfLargeScreen);
    };
  }, [menuOpen]);

  useEffect(() => {
    if (menuOpen) {
      const closeMenuOnOutsideClick = (e) => { // para fechar o menu se o usuário clica em algum lugar aleatório (fora do menu)
        if (!e.target.closest(".button-group") && !e.target.closest(".menu-icon")) {
          // verificando se o clique não ocorreu dentro do menu ou no ícone do menu
          setMenuOpen(false);
        }
      };

      document.addEventListener("click", closeMenuOnOutsideClick);

      return () => {
        document.removeEventListener("click", closeMenuOnOutsideClick);
      };
    }
  }, [menuOpen]);

  return (
    <div className="header">
      <img src={logonova} className="logo" alt="logo" />
      <div className="menu-icon" onClick={() => setMenuOpen(!menuOpen)}>
        <FaBars />
      </div>
      <Menu menuOpen={menuOpen}/>
    </div>
  )
}

export default Header
