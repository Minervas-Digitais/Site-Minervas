import React from "react";
import { Link } from "react-router-dom";

import Button from "@mui/material/Button";
import { withStyles } from "@mui/styles";

import arrow from "../../../assets/actions/arrow-down.svg";
import arrowUp from "../../../assets/actions/actions-arrow.svg";
import vector from "../../../assets/actions/actions-yellow-vector.svg";

/* importante que as imagens para download estejam na proporção 1:1 :) */
import diaMulher2024 from "../../../assets/insta-photo08-03-2024.jpg";
import natal from "../../../assets/insta-photo25-12-2023.jpg";
import mulheresComputacao from "../../../assets/actions/insta-photo10-11-2023.jpg";
import AdaLovelaceDay from "../../../assets/actions/insta-photo10-10-2023.jpg";
import areasTecnologia from "../../../assets/actions/insta-photo25-05-2023.jpg";
import diaMulher2023 from "../../../assets/actions/insta-photo08-03-2023.jpg";
import dicasProgramacao from "../../../assets/actions/insta-photo14-02-2023.jpg";
import diaMulheresCiencia from "../../../assets/actions/insta-photo11-02-2022.jpg";
import diaProfessores from "../../../assets/actions/insta-photo15-10-2020.jpg";

/* logos para download */
import logoMinervas01 from "../../../assets/actions/logoMinervas01.png";
import logoMinervas02 from "../../../assets/actions/logoMinervas02.png";
import logoMinervas03 from "../../../assets/actions/logoMinervas03.png";
import logoMinervas04 from "../../../assets/actions/logoMinervas04.png";
import arrowRight from "../../../assets/actions/arrow-right.svg";


import "./Materials.scss";

import { styled } from "@mui/material/styles";

const ColorButton = styled(Button)(() => ({
  width: "288px",
  height: "63px",
  textTransform: "none",
  border: "1px solid #3F005E",
  borderRadius: 25,
  fontFamily: "Lato",
  backgroundColor: "#FFFFFF",
  color: "#3F005E",
  margin: "45px",
  boxShadow: "none",
  "&:hover": {
    backgroundColor: "#3F005E",
    color: "#FFFFFF",
    boxShadow: "none",
  },
  "& span img": {
    transition: "filter 0.2s ease",
  },
  "&:hover span img": {
    filter: "invert(1)",
  },
}));


function Materials() {
    const scrollWithOffset = (el, offset) => {
        const elementPosition = el.offsetTop - offset;
        window.scroll({
          top: elementPosition,
          left: 0,
          behavior: "smooth"
        });    
    }

    const openURL = (url) => {
        window.open(url, "_blank");
    };

    return (
        <div className="actions-container">
            <Link to="#Actions" onClick={(e) => {
                e.preventDefault();
                const element = document.querySelector("#Actions");
                if (element) {
                    scrollWithOffset(element, 108);
                }
            }}>
                <img src={arrowUp} alt="seta" />
            </Link>
            <div id="Materials" className="materials-title">
                Materiais
                <img className="vector" src={vector} alt="Tracinho amarelo" style={{ width: "10%", paddingLeft: "6rem" }}/>
            </div>
            <div className="materials-buttons">
                <ColorButton variant="contained" className='button' disableElevation onClick={() => openURL("https://linktr.ee/minervasdigitais")}>
                    Drive do Minerv@s 
                    <span><img src={ arrowRight } alt="ícone"></img></span>
                </ColorButton>
                <ColorButton variant="contained" className='button' disableElevation onClick={() => openURL("https://medium.com/minervas-digitais-ufrj")}>
                    Artigos Publicados 
                    <span><img src={ arrowRight } alt="ícone"></img></span>
                </ColorButton>
            </div>
            <div className="downloadable">
                <div className="arts">
                    <div className="arts-title">Artes <span className="arts-span">(para download)</span></div>
                    <div className="arts-panel">
                        <div className="art1">
                            <a href={ diaMulher2024 } download="diaDaMulherMinervas.jpg">
                                <div className="blur">
                                    <div className="arrow-down"><img src={ arrow } alt="seta"></img></div>
                                    <div className="blur-text">Baixar</div>
                                </div>
                                <img id="art1" src={ diaMulher2024 } alt="Imagem"></img>
                            </a>
                        </div>
                        <div className="art2">
                            <a href={ natal } download="natalMinervas.jpg">
                                <div className="blur">
                                    <div className="arrow-down"><img src={ arrow } alt="seta"></img></div>
                                    <div className="blur-text">Baixar</div>
                                </div>
                                <img id="art2" src={ natal } alt="Imagem"></img>
                            </a>
                        </div>
                        <div className="art3">
                            <a href={ mulheresComputacao } download="mulheresNaComputacao.jpg">
                                <div className="blur">
                                    <div className="arrow-down"><img src={ arrow } alt="seta"></img></div>
                                    <div className="blur-text">Baixar</div>
                                </div>
                                <img id="art3" src={ mulheresComputacao } alt="Imagem"></img>
                            </a>
                        </div>
                        <div className="art4">
                            <a href={ AdaLovelaceDay } download="AdaLovelaceDay.jpg">
                                <div className="blur">
                                    <div className="arrow-down"><img src={ arrow } alt="seta"></img></div>
                                    <div className="blur-text">Baixar</div>
                                </div>
                                <img id="art4" src={ AdaLovelaceDay } alt="Imagem"></img>
                            </a>
                        </div>
                        <div className="art5">
                            <a href={ areasTecnologia } download="areasTecnologia.jpg">
                                <div className="blur">
                                    <div className="arrow-down"><img src={ arrow } alt="seta"></img></div>
                                    <div className="blur-text">Baixar</div>
                                </div>
                                <img id="art5" src={ areasTecnologia } alt="Imagem"></img>
                            </a>
                        </div>
                        <div className="art6">
                            <a href={ diaMulher2023 } download="diaDaMulherMinervas.jpg">
                                <div className="blur">
                                    <div className="arrow-down"><img src={ arrow } alt="seta"></img></div>
                                    <div className="blur-text">Baixar</div>
                                </div>
                                <img id="art6" src={ diaMulher2023 } alt="Imagem"></img>
                            </a>
                        </div>
                        <div className="art7">
                            <a href={ dicasProgramacao } download="dicasMinervas.jpg">
                                <div className="blur">
                                    <div className="arrow-down"><img src={ arrow } alt="seta"></img></div>
                                    <div className="blur-text">Baixar</div>
                                </div>
                                <img id="art7" src={ dicasProgramacao } alt="Imagem"></img>
                            </a>
                        </div>
                        <div className="art8">
                            <a href={ diaMulheresCiencia } download="diaMulheresCiencia.jpg">
                                <div className="blur">
                                    <div className="arrow-down"><img src={ arrow } alt="seta"></img></div>
                                    <div className="blur-text">Baixar</div>
                                </div>
                                <img id="art8" src={ diaMulheresCiencia } alt="Imagem"></img>
                            </a>
                        </div>
                        <div className="art9">
                            <a href={ diaProfessores } download="diaProfessores.jpg">
                                <div className="blur">
                                    <div className="arrow-down"><img src={ arrow } alt="seta"></img></div>
                                    <div className="blur-text">Baixar</div>
                                </div>
                                <img id="art9" src={ diaProfessores } alt="Imagem"></img>
                            </a>
                        </div>
                    </div>
                </div>
                <div className="logos">
                    <div className="logos-content">
                        <div className="logos-title">Logos <span className="logos-span">(png para download)</span></div>
                        <div className="logos-panel">
                            <div className="logo1">
                                <a href={ logoMinervas01 } download="logoMinervas01.png">
                                    <div className="blur">
                                        <div className="arrow-down"><img src={ arrow } alt="seta"></img></div>
                                        <div className="blur-text">Baixar</div>
                                    </div>
                                    <img id="logo1" src={ logoMinervas01 } alt="Imagem"></img>
                                </a>
                            </div>
                            <div className="logo2">
                                <a href={ logoMinervas02 } download="logoMinervas02.png">
                                    <div className="blur">
                                        <div className="arrow-down"><img src={ arrow } alt="seta"></img></div>
                                        <div className="blur-text">Baixar</div>
                                    </div>
                                    <img id="logo2" src={ logoMinervas02 } alt="Imagem"></img>
                                </a>
                            </div>
                            <div className="logo3">
                                <a href={ logoMinervas03 } download="logoMinervas03.png">
                                    <div className="blur">
                                        <div className="arrow-down"><img src={ arrow } alt="seta"></img></div>
                                        <div className="blur-text">Baixar</div>
                                    </div>
                                    <img id="logo3" src={ logoMinervas03 } alt="Imagem"></img>
                                </a>
                            </div>
                            <div className="logo4">
                                <a href={ logoMinervas04 } download="logoMinervas04.png">
                                    <div className="blur">
                                        <div className="arrow-down"><img src={ arrow } alt="seta"></img></div>
                                        <div className="blur-text">Baixar</div>
                                    </div>
                                    <img id="logo4" src={ logoMinervas04 } alt="Imagem"></img>
                                </a>
                            </div>
                    </div>
                    </div>
                </div>

            </div>
        </div>
    );
}

export default Materials;
