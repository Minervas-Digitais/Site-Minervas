import React from "react"
import { HashLink as Link } from "react-router-hash-link"

import "./Card.scss"
import minerva from "../../../assets/actions/icon-minerva.svg"
import ellipse from "../../../assets/actions/icon-ellipse.svg"

function Card({ title , description, icon, link }) {

  if (title === "Materiais"){
    return ( 
      <Link smooth 
        to="/acoes#Materials"
        style={{ textDecoration: "none" }}
        scroll={el => {
          const yOffset = -130;
          const y = el.getBoundingClientRect().top + window.pageYOffset + yOffset;
          window.scrollTo({ top: y, behavior: 'smooth' });
        }}>
          <div className="card-container">
            <div className="base-superior">
              <img className="minerva" src={ minerva } alt="Ícone da minerva"></img>
              <img className="ellipse" src={ ellipse } alt="Bolinha amarela"></img>
            </div>
            <div className="base-inferior">
              <div className="card-title">{ title }
                <div className="card-icon"> 
                  <img src={ icon } alt="ícone"></img>
                </div>
              </div>
              <div className="card-description">{ description }</div>
            </div>
          </div>
      </Link>
    )
  }else{
    return (
      <Link to={ link } smooth style={{ textDecoration: "none" }} target="_blank" rel="noopener noreferrer">
      <div className="card-container">
        <div className="base-superior">
          <img className="minerva" src={ minerva } alt="Ícone da minerva"></img>
          <img className="ellipse" src={ ellipse } alt="Bolinha amarela"></img>
        </div>
        <div className="base-inferior">
          <div className="card-title">{ title }
            <div className="card-icon"> 
              <img src={ icon } alt="ícone"></img>
            </div>
          </div>
          <div className="card-description">{ description }</div>
        </div>
      </div>
      </Link>
    ) 
  }
}

export default Card