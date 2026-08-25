import React from "react";
import "./Sobre.scss";
import Header from "../../components/header/Header"
import Footer from "../../components/footer/Footer"
import BotoesProjetos from "./grid-botoes-projetos.js";
import teste from "../../assets/background1-tela-sobre.png";
import backgruondOqueNosMove from "../../assets/bg_o_que_nos_move.png";
import FotoEquipe1 from "../../assets/group-photo.jpg";
import FotoEquipe2 from "../../assets/foto-equipe2.jpeg";
import { motion } from "framer-motion";
import { useState, useEffect, useRef } from "react";

const imagens = [FotoEquipe1, FotoEquipe2, FotoEquipe1, FotoEquipe2];

function Sobre() {
  const carousel = useRef();
  const [width, setWidth] = useState(0);

  useEffect(() => {
    console.log(carousel.current?.scrollWidth, carousel.current?.offsetWidth);
    setWidth(carousel.current?.scrollWidth - carousel.current?.offsetWidth);
  }, []);

  return (
    <>
      <Header />
      <div className="sobre" id="sobre">
        <img
          className="background-sobre"
          src={teste}
          alt="img-background-sessao-sobre"
        />
        <h1 className="titulo-sobre">SOBRE O PROJETO MINERV@S DIGITAIS</h1>
        <div className="descricao-sobre">
          <p>
            O projeto Minerv@s Digitais busca entender, reunir e reforçar a
            presença feminina na tecnologia. Uma de suas premissas básicas é que,
            se individualmente não conseguiam valorizar sua importância, juntas
            conseguiriam apoiar e colaborar umas com as outras. Isso inclui
            alavancar discussões de gênero que, por vezes, são negligenciadas em
            um ambiente dominado por indivíduos alheios às questões que perpassam
            a vivência acadêmica feminina.
          </p>
          <p>
            Guiada por esses questionamentos e pela situação preocupante de poucas
            mulheres ingressando no curso, a discussão foi levada para uma
            disciplina obrigatória do quinto período do curso de Bacharelado em
            Ciência da Computação na UFRJ, que tem como objetivo apresentar aos
            alunos as possibilidades de atuação na carreira de computação e o
            impacto que a profissão pode fazer, além de propor debates sobre a
            área em geral. Esta experiência na disciplina demonstrou necessária a
            existência de uma iniciativa cujo foco fosse entender a situação do
            curso no quesito gênero, originando-se, assim, o Minerv@s Digitais. A
            criação do projeto seguiu como trabalho avaliativo da própria
            disciplina e, ao fim daquele semestre, fora registrado, organizado e,
            finalmente, estava pronto para ir a público como um projeto de
            extensão.
          </p>
          <p>
            Desde então, promove eventos e as mais diversas atividades – como
            workshops e hackathons , além da oportunidade de desenvolver pesquisas
            relativas à temática feminina e apresentá-las à comunidade. Para que
            tais compromissos possam ser asssumidos e efetivados, conta com um
            conjunto de membros diversificado. Não há restrições quanto à
            participação masculina ou de qualquer outro gênero, mas entende-se a
            importância do protagonismo feminino em suas lutas e, portanto,
            procura-se propagar o equilíbrio e a colaboração dos que compactuam e
            reforçam tais reivindicações.
          </p>
        </div>
        <h1 id="projetos" className="titulo-projetos-integrados">Projetos Integrados</h1>
        <div className="projetos-integrados">
          <BotoesProjetos />
        </div>
        <div id="motivacao" className="sessao-o-que-nos-move-bg">
          <h1 className="titulo-o-que-nos-move">O que nos move</h1>
        </div>
        <div className="o-que-nos-move">
          <div className="conteudo-card-motivacoes1">
            <div className="numero-card-motivacoes1">1</div>
            <img
              className="background-o-que-nos-move1"
              src={backgruondOqueNosMove}
              alt="img-background-sessao-o-que-nos-move1"
            />
            <p className="texto-motivacoes1">
              Entender, reunir e reforçar a presença feminina na tecnologia.
            </p>
          </div>
          <div className="conteudo-card-motivacoes2">
            <div className="numero-card-motivacoes2">2</div>
            <img
              className="background-o-que-nos-move2"
              src={backgruondOqueNosMove}
              alt="img-background-sessao-o-que-nos-move2"
            />
            <p className="texto-motivacoes2">
              Promover eventos e as mais diversas atividades – como workshops e
              hackathons , além da oportunidade de desenvolver pesquisas relativas
              à temática feminina e apresentá-las à comunidade.
            </p>
          </div>
          <div className="conteudo-card-motivacoes3">
            <div className="numero-card-motivacoes3">3</div>
            <img
              className="background-o-que-nos-move3"
              src={backgruondOqueNosMove}
              alt="img-background-sessao-o-que-nos-move3"
            />
            <p className="texto-motivacoes3">
              Alavancar discussões de gênero que, por vezes, são negligenciadas em
              um ambiente dominado por indivíduos alheios às questões que
              perpassam a vivência acadêmica feminina.
            </p>
          </div>
        </div>
        <div id="equipe" className="sessao-nossa-equipe">
          <p className="titulo-nossa-equipe">Quem somos!</p>
          <div className="conteudo-nossa-equipe">
            <motion.div
              ref={carousel}
              className="carousel"
              whileTap={{ cursor: "grabbing" }}
            >
              <motion.div
                className="inner-carousel"
                drag="x"
                dragConstraints={{ right: 0, left: -width }}
                initial={{ x: 100 }}
                animate={{ x: 0 }}
                transition={{ duration: 0.8 }}
              >
                {imagens.map((item) => (
                  <motion.div className="item-carousel-quem-somos" key={item}>
                    <img src={item} alt="imagem-quem-somos-carousel" />
                  </motion.div>
                ))}
              </motion.div>
            </motion.div>
          </div>
        </div>
      </div>
      <Footer />
    </>
  );
}

export default Sobre;
