import React, { Component } from "react";
import ListaDeNotas from "./components/ListaDeNotas";
import FormularioCadastro from "./components/FormularioCadastro";
import "./assets/App.css";
import './assets/index.css';

class App extends Component {

  constructor(){
    super();
    this.state = {
      notas: []
    }
  }

  criarNota(titulo, texto){
    const novaNota = {titulo,texto};
    const novoArraysNotas = [...this.state.notas, novaNota];
    const novoEstado = {
      notas: novoArraysNotas
    }
    this.setState(novoEstado)
  }

  render() {
    console.log("render")
    return (
      <section className="conteudo">
        <FormularioCadastro criarNota={this.criarNota.bind(this)}/>
        <ListaDeNotas notas={this.state.notas}/>
      </section>
    );
  }
}


export default App;