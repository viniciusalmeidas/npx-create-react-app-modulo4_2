import React from "react";
import Rodape from "../Rodape";
import Header from "../Header";
import topdrink from "../../assets/drink.jpg";
import "./estilo.css"

export default function SobreNos() {
  return (
    <div className="divmae">
      <Header />
      <section className="sectionPai">
        <h1 className="titulo">Sobre Nós</h1>
        <div className="container">
          <img className="topdrink" src={topdrink} alt="" width="400px" />
          <p className="paragrafo">
          O gastrobar <strong>TOP Drinks</strong>, recém-inaugurado na Rua Augusta, a três quadras da Avenida Paulista, tem tudo para se tornar o novo hot point da cidade de São Paulo. <br></br><br></br>A ideia da casa é oferecer drinks infusionados e coquetéis lúdicos, nostálgicos e sensoriais. 
          <br></br><br></br>
            Na carta de drinks, há mais de 30 opções preparadas pelo bartender mixologista <strong>Vinícius Almeida de Souza</strong>.
          </p>
        </div>
      </section>
      <Rodape />
    </div>
  );
}
