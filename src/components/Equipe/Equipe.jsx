import "./estilo.css";
import React from "react";
import Header from "../Header";
import Rodape from "../Rodape";
import foto from "../../assets/Encit-EU.JPG";
import catamara from "../../assets/catamara.jpg";
import billy from "../../assets/billie-eilish.jpg";
import fotogithub from "../../assets/github.png";
import fotoinstagram from "../../assets/instagram.png";
import fotolinkedin from "../../assets/linkedin.png";

export default function Equipe() {
  return (
    <>
      <Header />
      <div className="container1">
        <section className="esquerda">
          <h1 className="nome">Vinícius Almeida de Souza</h1>
          <img className="foto" src={foto} width="200px" alt="Uma foto de Vinicius Almeida" />
        </section>

        <section className="direita">
          <p className="paragrafoEquipe">
          Vinícius Almeida de Souza, 26 anos. Engenheiro
            Mecânico pelo CEFET/RJ, Full-Stack developer pelo RESILIA Educação e
            técnico em informática pelo CAP-UNIGRANRIO. Esteve a frente
            da estratégia de implantação e operação da TI no CENSO AGRO do IBGE.
            Tem experiência no transporte marítimo de óleo & gás natural. Expertise em automação, eficácia da força de vendas, ERP, inteligência de negócios e estratégia digital.
            Responsável pelo desenvolvimento do WppSender (mensagens em massa
            via Python e Excel) para busca de Leads. Atualmente é Coordenador de
            Inteligência de uma Rede de Ensino e desenvolve e ensina OKR's e BI.
          </p>
          <ul class="icones-sociais">
            <li>
              <a
                href="https://github.com/viniciusalmeidas"
                rel="noreferrer"
                target="_blank"
              >
                <img
                  src={fotogithub}
                  width="35px"
                  alt="Icone do GitHub"
                />
              </a>
            </li>

            <li>
              <a
                href="https://www.linkedin.com/in/valmsou/"
                rel="noreferrer"
                target="_blank"
              >
                <img
                  src={fotolinkedin}
                  width="35px"
                  alt="Icone do Linkedin"
                />
              </a>
            </li>

            <li>
              <a
                href="https://www.instagram.com/v.alma_br/?hl=es"
                rel="noreferrer"
                target="_blank"
              >
                <img
                  src={fotoinstagram}
                  width="35px"
                  alt="Icone do Instagram"
                />
              </a>
            </li>
          </ul>
        </section>
      </div>
      <div className="container1">
        <section className="esquerda">
          <h1 className="nome">CATAMARÃ Suporte Tech</h1>
          <img className="foto" src={catamara} width="200px" alt="foto da CATAMARA Suporte Tech" />
        </section>

        <section className="direita">
          <p className="paragrafoEquipe">
          Quando iniciamos a CATAMARÃ em 2020 com sede em Juiz de Fora – MG, definimos algumas características e princípios que norteariam a nossa atuação neste novo empreendimento. A ética nas operações, o respeito ao cliente, as leis e a qualidade dos produtos e serviços a serem fornecidos. Uma empresa amiga que visa fazer a ligação entre o seu negócio e sua necessidade específica em Tecnologia da Informação (TI), integrando soluções compostas por equipamentos, serviços, sistemas e um outro item imprescindível: INTELIGÊNCIA TECNOLÓGICA.
          </p>
          <ul class="icones-sociais">
            <li>
              <a
                href="https://github.com/viniciusalmeidas"
                rel="noreferrer"
                target="_blank"
              >
                <img
                  src={fotogithub}
                  width="35px"
                  alt="Icone do GitHub"
                />
              </a>
            </li>

            <li>
              <a
                href="https://www.linkedin.com/in/valmsou/"
                rel="noreferrer"
                target="_blank"
              >
                <img
                  src={fotolinkedin}
                  width="35px"
                  alt="Icone do Linkedin"
                />
              </a>
            </li>

            <li>
              <a
                href="https://www.instagram.com/v.alma_br/?hl=es"
                rel="noreferrer"
                target="_blank"
              >
                <img
                  src={fotoinstagram}
                  width="35px"
                  alt="Icone do Instagram"
                />
              </a>
            </li>
          </ul>
        </section>
      </div>
      <div className="container1">
        <section className="esquerda">
          <h1 className="nome">Billie Eilish</h1>
          <img className="foto" src={billy} width="160px" alt="Foto do cachorro Billy" />
        </section>

        <section className="direita">
          <p className="paragrafoEquipe">
          Conhecido como o “Billy”, é evengelista open source, e trabalhou na criação e fortalecimento da comunidade no canil.

          É fundadador e ex-diretor mundial da Billy the Grill.

          Desenvolvedor Python desde que era um filhote, trandutor da equipe para o inglês e para a comunidade animal.
          </p>
          <ul class="icones-sociais">
            <li>
              <a
                href="https://github.com/viniciusalmeidas"
                rel="noreferrer"
                target="_blank"
              >
                <img
                  src={fotogithub}
                  width="35px"
                  alt="Icone do GitHub"
                />
              </a>
            </li>

            <li>
              <a
                href="https://www.linkedin.com/in/valmsou/"
                rel="noreferrer"
                target="_blank"
              >
                <img
                  src={fotolinkedin}
                  width="35px"
                  alt="Icone do Linkedin"
                />
              </a>
            </li>

            <li>
              <a
                href="https://www.instagram.com/v.alma_br/?hl=es"
                rel="noreferrer"
                target="_blank"
              >
                <img
                  src={fotoinstagram}
                  width="35px"
                  alt="Icone do Instagram"
                />
              </a>
            </li>
          </ul>
        </section>
      </div>

      <Rodape />
    </>
  );
}
