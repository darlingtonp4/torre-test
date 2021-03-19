import "./App.css";
import Navigation from "./Components/Navigation";
import Home from "./Screens/Home";
import React, { useState, useEffect } from "react";
import Profile from "./Screens/Profile";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
function App() {
  let [usuario, setUsuario] = useState({ person: { picture: "" } });
  useEffect(() => {
    const usuarioPrincipal = async () => {
      const respuesta = await fetch("https://torre.bio/api/bios/darlingtonp4");
      const datos = await respuesta.json();
      setUsuario(datos);
    };
    usuarioPrincipal();
    console.log(usuario);
  });
  return (
    <Router>
      <div>
        <Navigation usuario={usuario}></Navigation>
      </div>
      <Switch>
        <Route path="/" exact>
          <Home />
        </Route>
        <Route path="/user" exact>
          <Profile usuario={usuario} />
        </Route>
      </Switch>
    </Router>
  );
}

export default App;
