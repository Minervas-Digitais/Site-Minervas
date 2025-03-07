import React from "react"

import Button from "@mui/material/Button"
import { withStyles } from "@mui/styles"
import { redirect } from "react-router-dom"

import "./Text.scss"

class TextEvent extends React.Component {
  render(){
    return (
      <div className="text-event">
        <div className="title">
          Eventos
        </div>
      </div>
    )
  }
}

export default TextEvent
