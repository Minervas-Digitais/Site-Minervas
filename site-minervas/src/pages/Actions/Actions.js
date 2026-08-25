import React from "react"

import Header from "../../components/header/Header"
import ActionsContent from "../../components/actions/content/ActionsContent"
import Materials from "../../components/actions/materials/Materials"
import Footer from "../../components/footer/Footer"

import "./Actions.scss"

function Actions() {
  return (
    <div className="actions" id="#">
      <Header />
        <div><ActionsContent /></div>
        <div><Materials /></div>
        <div class="end-page" style={{ height: 200 }}></div>
      <Footer />
    </div>
  )
}

export default Actions
