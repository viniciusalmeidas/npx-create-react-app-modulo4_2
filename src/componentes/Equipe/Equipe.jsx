import "./estilo.css";
import React from "react";
import Header from "../Header";
import Rodape from "../Rodape";
import foto from "../../assets/Encit-EU.JPG";
import fotogithub from "../../assets/github.png"
import fotoinstagram from "../../assets/instagram.png"
import fotolinkedin from "../../assets/linkedin.png"

export default function Equipe() {

  return (
    <>
      <Header />
      <div className="container1">
        
        <section className="esquerda">
          <h1 className="nome">Vinícius Almeida de Souza</h1>
          <img className="foto" src={foto} width="250px" alt="Uma foto minha" />
        </section>

        <section className="direita">
          <p className="paragrafoEquipe">
            Meu nome é Vinícius Almeida de Souza, tenho 26 anos. Engenheiro
            Mecânico pelo CEFET/RJ, Full-Stack developer pelo RESILIA Educação e
            técnico em informática pelo CAP-UNIGRANRIO. Experiência como Trainee
            de Engenharia no setor da educação em Minas Gerais. Esteve a frente
            da estratégia de implantação e operação da TI no CENSO AGRO do IBGE.
            Tem experiência global e regional no transporte marítimo de óleo &
            gás natural. Expertise em automação de processos, eficácia da força
            de vendas, ERP, inteligência de negócios e estratégia digital.
            Responsável pelo desenvolvimento do WppSender (mensagens em massa
            via Python e Excel) para busca de Leads. Atualmente é Coordenador de
            Inteligência de uma Rede de Ensino e desenvolve e ensina OKR's e
            dashboards em BI.
          </p>
          <ul class="icones-sociais">
                <li><a href="https://github.com/viniciusalmeidas" target="_blank"><img src={fotogithub} width="50px" alt="Icone do GitHub"/></a></li>

                <li><a href="https://www.linkedin.com/in/valmsou/" target="_blank"><img src={fotolinkedin} width="50px" alt="Icone do Linkedin"/></a></li>


                <li><a href="https://www.instagram.com/v.alma_br/?hl=es" target="_blank"><img src={fotoinstagram} width="72.5px" alt="Icone do Instagram"/></a></li>
        </ul>
        
        </section>
        
      </div>
      <Rodape />
    </>
  );
}
