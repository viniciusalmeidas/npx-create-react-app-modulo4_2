import React from "react";
import "./estilo.css";
import { useState } from "react";

export default function Inputs({ titulo, tipoInput, focando }) {
  const [texto, setTexto] = useState("Enviar");

  function exemplo(event) {
    const alvo = event.target.value;
  }

  return (
    <div className="inputsDisplay">
      <label className="labelEspacamento">{titulo}</label>
      <input
        type={tipoInput}
        className="inputEspacamento"
        autoFocus={focando}
        onChange={exemplo}
      ></input>
    </div>
  );
}
