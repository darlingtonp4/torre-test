import "./App.css";
import Navigation from "./Components/Navigation";
import Home from "./Screens/Home";
import React, { useState, useEffect } from "react";
import Profile from "./Screens/Profile";
import { Spinner } from "react-bootstrap";
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
  let [loading, setLoading] = useState(true);
  useEffect(() => {
    setInterval(() => setLoading(false), 1800);
  });
  if (loading) {
    return (
      <div className="spinner-container">
        {" "}
        <Spinner animation="grow" variant="info" />
      </div>
    );
  } else {
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
}

export default App;
