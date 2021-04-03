import React, { Component } from "react";
import "./style.css";
import {
  BrowserRouter as Router,
  NavLink,
} from "react-router-dom";

function Header() {
  
  return (
    <header className="cabeca">
      <ul className="menu">
        <li>
          <NavLink className="headerMenu" exact to="/drinks/bebidas">
            Bebidas
          </NavLink>
        </li>
        <li>
          <NavLink className="headerMenu" exact to="/sobre">
            Sobre
          </NavLink>
        </li>
        <li>
          <NavLink className="headerprincipal" exact to="/">
            Top Drinks Gastro
          </NavLink>
        </li>
        <li>
          <NavLink className="headerMenu" exact to="/equipe">
            Equipe
          </NavLink>
        </li>
        <li>
          <NavLink className="headerMenu" exact to="/contato">
            Contato
          </NavLink>
        </li>
      </ul>
    </header>
  );
}

export default Header;
