import Bebidas from "./components/BuscarDrink/Bebidas";
import Equipe from "./components/Equipe/Equipe";
import SobreNos from "./components/sobreNos/SobreNos";
import Formulario from "./components/Formulario/";
import Home from "./components/Home/Home";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Api from "./components/Api/Api";
import "./assets/App.css";

function App() {
  return (
    <Router>
      <div className="div0">
        <Switch>
          <Route path="/contato">
            <Formulario titulo="contato" />
          </Route>
         
          <Route path="/equipe">
            <Equipe />
          </Route>

          <Route path="/sobre">
            <SobreNos />
          </Route>

          <Route exact path="/bebidas">
            <Api />
          </Route>        

          <Route path="/drinks/buscarDrink">
            <Bebidas />
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
