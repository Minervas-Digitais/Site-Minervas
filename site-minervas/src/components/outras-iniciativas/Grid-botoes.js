import React from "react";
import "./Grid-botoes.scss";
import { Grid } from "@mui/material";

import LogoProgramaria from "../../assets/programaria-logo.png";
import LogoMaisMulheres from "../../assets/mais-mulheres-logo.png";
import LogoWhoMakersCode from "../../assets/who-makers-code-logo.png";
import Button from "@mui/material/Button";
import { withStyles } from "@mui/styles";

const ColorButton = withStyles(() => ({
  root: {
    textTransform: "none",
    centerMode: true,
    width: "80%",
    display: "flex",
    justifyContent: "center",
    margin: "4% auto",
    borderRadius: 10,
    fontFamily: "Lato",
    fontWeight: 300,
    backgroundColor: "#ffbd59",
    "&:hover": {
      backgroundColor: "#13BADE",
      fontWeight: "bold",
    },
  },
}))(Button);

class BotoesIniciativas extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      openChat: false,
    };
  }

  abrirPaginaIniciativas(card) {
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
      <div className="botoes-grid">
        <Grid lg={12} item container spacing={2}>
          <Grid item xl={4} lg={4} xs={12} sm={12} md={6}>
            <div className="botao-grid-item1">
              <div className="botao-grid-header">
                <img
                  className="header-image"
                  src={LogoMaisMulheres}
                  role="presentation"
                  alt="Tanguá"
                />
              </div>
              <div className="titulo-botao">
                <span>MAISMULHERES</span>
              </div>
              <p className="texto-botao1">
                O1ª plataforma brasileira criada por mulheres, com a missão para
                capacitar mulheres em tecnologia e inovação
              </p>
              <ColorButton
                variant="contained"
                className="button1"
                disableElevation
                onClick={() => this.abrirPaginaIniciativas("1")}
              >
                Acessar
              </ColorButton>
            </div>
          </Grid>
          <Grid item xl={4} lg={4} xs={12} sm={12} md={6}>
            <div className="botao-grid-item2">
              <div className="botao-grid-header">
                <img
                  className="header-image"
                  src={LogoProgramaria}
                  role="presentation"
                  alt="Tanguá"
                />
              </div>
              <div className="titulo-botao">
                <span>PROGRAMARIA</span>
              </div>
              <p className="texto-botao2">
                Empoderar mulheres através da tecnologia, diminuindo o GAP de
                gênero no mercado de trabalho.
              </p>
              <ColorButton
                variant="contained"
                className="button2"
                disableElevation
                onClick={() => this.abrirPaginaIniciativas("2")}
              >
                Acessar
              </ColorButton>
            </div>
          </Grid>
          <Grid item xl={4} lg={4} xs={12} sm={12} md={12}>
            <div className="botao-grid-item3">
              <div className="botao-grid-header">
                <img
                  className="header-image"
                  src={LogoWhoMakersCode}
                  role="presentation"
                  alt="Tanguá"
                />
              </div>
              <div className="titulo-botao">
                <span>WHOMAKERSCODE</span>
              </div>
              <p className="texto-botao3">
                A maior comunidade de mulheres na tecnologia da América Latina,
                promovendo o papel feminino através de capacitação, orientação e
                apoio ao emprego.
              </p>
              <ColorButton
                variant="contained"
                className="button3"
                disableElevation
                onClick={() => this.abrirPaginaIniciativas("3")}
              >
                Acessar
              </ColorButton>
            </div>
          </Grid>
        </Grid>
      </div>
    );
  }
}

export default BotoesIniciativas;
