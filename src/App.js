import Teste from "./componentes/BuscarDrink/Teste";
import Headers from "./componentes/Header/Header.jsx";
import Equipe from "./componentes/Equipe/Equipe";
import SobreNos from "./componentes/sobreNos/SobreNos";
import Formulario from "./componentes/Formulario/";
import Home from "./componentes/Home/Home";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Api from "./componentes/Api/Api";
import "./assets/App.css";

function App() {
  return (
    <Router>
      <div className="div0">
        <Switch>
          <Route path="/contato">
            <Formulario titulo="contato" />
          </Route>
          <Route exact path="/bebidas/DrinksPopulares">
            <Api />
          </Route>
          <Route path="/equipe">
            <Equipe />
          </Route>
          <Route path="/sobre">
            <SobreNos />
          </Route>
          <Route path="/teste">
            <Headers />
          </Route>
          <Route path="/bebidas/buscarDrink">
            <Teste />
          </Route>
          <Route exact path="/">
            <Home />
          </Route>
        </Switch>
      </div>
    </Router>
  );
}

export default App;
