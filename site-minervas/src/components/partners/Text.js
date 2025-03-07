import React from "react"

import Button from "@mui/material/Button"
import { withStyles } from "@mui/styles"
import { redirect } from "react-router-dom"
import barras from "./../../assets/barras.svg"
import pizza from "./../../assets/pizza-graph.svg"

import "./Text.scss"

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
    console.log(this.props)

    return (
      <div className="partners-text">
        <div className="title">
          Parcerias já realizadas
        </div>
      </div>
    )
  }
}

export default Text
