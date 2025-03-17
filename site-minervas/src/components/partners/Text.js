import React from "react"
import "./Text.scss"

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
