import React, { Component, useState } from "react";
import imgContato from "../../assets/contato.jpg";
import Botao from "../Botao/Botao";
import Header from "../Header";
import Rodape from "../Rodape";
import "./styleForm.css";
import Input from "../Input/Input";

export default function Formulario({ titulo }) {
  const [texto, setTexto] = useState("Enviar");

  function handleClick() {
    setTexto("Enviando");
    setTimeout(() => {
      setTexto("Enviar");
    }, 2500);
  }
  return (
    <div className="divmae">
      <Header />
      <h1 className="titulo">{titulo}</h1>
      <section className="principal">
        <div className="div2">
          <img
            className="imag1"
            alt="TOP Drinks Contato"
            src={imgContato}
            width="400px"
          />
        </div>
        <div className="div1">
          <div className="divForms">
            <form className="formulario">
              <Input legendaTexto="Mensagem:" />
              <Botao
                type="submit"
                texto={texto}
                aoClicar={handleClick}
                className="botaoForms"
              />
            </form>
          </div>
        </div>
      </section>
      <Rodape />
    </div>
  );
}
