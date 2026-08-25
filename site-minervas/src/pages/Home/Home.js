import React from "react"
import Content from "../../components/content/Content"
import Events from "../../components/events/Content"
import Contact from "../../components/contact/Contact"
import Footer from "../../components/footer/Footer"
import Header from "../../components/header/Header"
import Motivation from "../../components/motivation/Motivation"
import Partners from "../../components/partners/Partners"
import Who from "../../components/who/Who"
import Net from "../../components/net/Net"
import OutrasIniciativas from "../../components/outras-iniciativas/Outras-iniciativas"

import "./Home.scss"


function Home() {
  return (
    <div className="Home" id="home">
      <Header />
      <Content />
      <Who />
      <Motivation />
      <Events />
      <OutrasIniciativas />  
      <Partners/>
      <Net />
      <Contact />
      <Footer />
    </div>
  )
}

export default Home
