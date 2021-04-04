import React  from "react";
import Header from "../Header";
import Rodape from "../Rodape";
import "./estilo.css";

function Home() {
  
    return (
      <div className="divmae">
        <Header />
        <div className="divInicio animacao">
          <h1 className="cabecalho">Top Drinks Gastrobar</h1>
        </div>
        <Rodape />
      </div>
    );
  }
export default Home
