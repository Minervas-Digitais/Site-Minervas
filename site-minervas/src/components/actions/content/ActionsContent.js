import React, { useState, useEffect } from "react";
import vector from "../../../assets/actions/actions-yellow-vector.svg";
import "./ActionsContent.scss";
import Card from "./Card";

import arrowDown from "../../../assets/actions/arrow-down.svg";
import arrowRight from "../../../assets/actions/arrow-right.svg";
import newTab from "../../../assets/actions/new-tab.svg";

import relatorio from "../../../assets/Relatório_2023-Mulheres_nas_Graduações_deTI_UFRJ.pdf";

function ActionsContent() {
  const [paddingTop, setPaddingTop] = useState(0);

   /* para ajustar a distância entre o título e o conteúdo como um todo */
  useEffect(() => {
    function handleResize() {
      const windowWidth = window.innerWidth;
      let newPaddingTop = 430;
      if (windowWidth <= 970) {
        newPaddingTop = 0;
      } else if (windowWidth <= 2500) {
        newPaddingTop = 430 - ((2500 - windowWidth) / 15);
      }
      setPaddingTop(newPaddingTop);
    }

    handleResize();

    window.addEventListener("resize", handleResize);
    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, []);

  return (
    <>
      <div id="palestras" style={{ height: 140 }}></div>
      <div className="actions-title" id="Actions">
        Ações
        <img className="vector" src={vector} alt="Tracinho amarelo" style={{ width: "40px" }}/>
      </div>
      <div className="actions-content" style={{ paddingTop: `${paddingTop}px` }}>
        <Card
          title={"Levantamentos"}
          description={"Explore métricas e pesquisas realiadas sobre a temática feminina na tecnologia."}
          icon={ arrowRight }
          link={ relatorio }> {/* aqui vai ter o link para levantamentos! */ }
        </Card>
        <Card
          title={"Palestras e Cursos"}
          description={"Acesso ao canal do Youtube contendo as palestras e cursos ministrados."}
          icon={ newTab }
          link={ "https://www.youtube.com/@minervasdigitais2893" }>
        </Card>
        <Card
          title={"Materiais"}
          description={"Reunião de materiais realizados e disponibilizados pelo Minerv@s Digitais."}
          icon={ arrowDown }
          link={ "#Materials" }> {/* aqui vai ter o link para o drive! (ou não) */ }
        </Card>
      </div>
    </>
  );
}

export default ActionsContent;
