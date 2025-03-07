import React from "react";
import "./grid-botoes-projetos.scss";
import { Grid } from "@mui/material";

import LogoGreco from "../../assets/greco.png";
import LogoSBC from "../../assets/sbc.png";
import LogoMeninasDigitais from "../../assets/meninas-digitais.png";
import { FaArrowRight } from "react-icons/fa";

class BotoesProjetos extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      openChat: false,
    };
  }

  abrirPagina(card) {
    if (card === "1") {
      window.open("https://sites.google.com/view/greco-ppgi-ufrj", "_blank");
    }
    if (card === "2") {
      window.open("https://www.sbc.org.br/", "_blank");
    } else {
      window.open("https://meninas.sbc.org.br/sobre/", "_blank");
    }
  }

  render() {
    return (
      <div className="botoes">
        <Grid lg={12} item container spacing={2}>
          <Grid item xl={4} lg={4} xs={12} sm={12} md={6}>
            <div className="botao-item1" onClick={() => this.abrirPagina("1")}>
              <div className="header-botao">
                <img
                  className="header-image"
                  src={LogoGreco}
                  role="presentation"
                  alt="LogoGreco"
                />
                <div className="botao-header">
                  <FaArrowRight  className="icone-botao-header"/>
                </div>
              </div>
              <div className="titulo-botao">
                <span>Grupo GRECO</span>
              </div>
              <p className="texto-botao1">
                O grupo pesquisa de Engenharia do Conhecimento, com ênfase em
                ontologias e colaborações interdisciplinares para aplicação em
                genômica, web semântica e diversas outras áreas.
              </p>
            </div>
          </Grid>
          <Grid item xl={4} lg={4} xs={12} sm={12} md={6}>
            <div className="botao-item2" onClick={() => this.abrirPagina("2")}>
              <div className="header-botao">
                <img
                  className="header-image"
                  src={LogoSBC}
                  role="presentation"
                  alt="LogoSBC"
                />
                <div className="botao-header">
                  <FaArrowRight  className="icone-botao-header"/>
                </div>
              </div>
              <div className="titulo-botao">
                <span>SBC</span>
              </div>
              <p className="texto-botao2">
                Uma sociedade científica sem fins lucrativos que promove a
                inclusão digital e incentiva pesquisa e ensino em computação no
                Brasil.
              </p>
            </div>
          </Grid>
          <Grid item xl={4} lg={4} xs={12} sm={12} md={12}>
            <div className="botao-item3" onClick={() => this.abrirPagina("3")}>
              <div className="header-botao">
                <img
                  className="header-image"
                  src={LogoMeninasDigitais}
                  role="presentation"
                  alt="LogoMeninasDigitais"
                />
                <div className="botao-header">
                  <FaArrowRight className="icone-botao-header"/>
                </div>
              </div>
              <div className="titulo-botao">
                <span>Meninas Digitais</span>
              </div>
              <p className="texto-botao3">
                Promove a Computação entre estudantes do ensino médio e
                fundamental, com atividades como minicursos, oficinas e
                palestras para inspirar carreiras na área.
              </p>
            </div>
          </Grid>
        </Grid>
      </div>
    );
  }
}

export default BotoesProjetos;
