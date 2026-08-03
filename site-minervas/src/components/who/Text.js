import React from "react";
import Button from "@mui/material/Button";
import { withStyles } from "@mui/styles";
import "./Text.scss";

const ColorButton = withStyles(() => ({
  root: {
    textTransform: "none",
    borderRadius: 55,
    fontFamily: "Lato",
    fontWeight: 300,
    backgroundColor: "#096262",
    "&:hover": {
      backgroundColor: "#13BADE",
      fontWeight: "bold",
    },
  },
}))(Button)


class Text extends React.Component {

  constructor(props) {
    super(props)
    this.state = {
      openChat: false
    }
  }

  openChat = () => {
    this.setState({
      openChat: true
    })
  }

  render(){
    const {click} = this.props

    return (
      <div className="text-who">
        <div className="title">
          Quem somos?
        </div>
        <div className="description">
          <p>Criada em 2018, a Minerv@s Digitais é um projeto de extensão da UFRJ, associado ao projeto nacional Meninas Digitais. Temos como objetivo fomentar o interesse das meninas nas áreas de Computação e das áreas de Tecnologias da Informação e Comunicação (TIC) e ajudar na construção da autoconfiança das alunas da UFRJ dos cursos de Bacharelado em Ciência de Computação (BCC) e de Ciências da Matemática e da Terra (BCMT), assim como de cursos associados, Engenharia de Computação e Informação e Engenharia de Automação.</p>
        </div>
        {/* <div className="button-box">
          <ColorButton variant="contained" color="primary" className='button' disableElevation onClick={click}>
            Ver membros
          </ColorButton>
        </div> */}
      </div>
    )
  }
}

export default Text;
