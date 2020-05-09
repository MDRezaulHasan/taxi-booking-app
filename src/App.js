import React from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import NavBar from "./components/NavBar";
import Home from "./components/Home";
import LogInForDriver from "./components/LogInForDriver";
import LogInForPassanger from "./components/LogInForPassanger";
import RegistrationForDriver from "./components/RegistrationForDriver";
import RegistrationForPassanger from "./components/RegistrationForPassanger";
import AboutUs from "./components/AboutUs";
import "./App.css";

function App() {
  return (
    <div className="App">
      <Router>
        <NavBar />
        <Switch>
          <Route path="/" component={Home} exact />
          <Route path="/loginForDriver" component={LogInForDriver} />
          <Route path="/loginForPassanger" component={LogInForPassanger} />
          <Route
            path="/registrationForDriver"
            component={RegistrationForDriver}
          />
          <Route
            path="/registrationForpassanger"
            component={RegistrationForPassanger}
          />
          <Route path="/aboutus" component={AboutUs} />
        </Switch>
      </Router>
    </div>
  );
}

export default App;
