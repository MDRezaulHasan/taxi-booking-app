import React, { Component, Fragment } from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import NavBar from "./components/NavBar";
import Home from "./components/Home";
import LogInForDriver from "./components/LogInForDriver";
import LogInForPassanger from "./components/LogInForPassanger";
import RegistrationForDriver from "./components/RegistrationForDriver";
import RegistrationForPassanger from "./components/RegistrationForPassanger";
import AboutUs from "./components/AboutUs";
import fire from "./config/Firebase";
import DriverProfile from "./components/DriverProfile";
import PassangerProfile from "./components/PassangerProfile";
import "./App.css";

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      user1: {},
      user2: {},
    };
  }

  componentDidMount() {
    this.authListener1();
  }
  authListener1() {
    fire.auth().onAuthStateChanged((user) => {
      if (user) {
        this.setState({ user });
      } else {
        this.setState({
          user: null,
        });
      }
    });
  }
  render() {
    return (
      <div className="App">
        <Router>
          <NavBar />
          <Switch>
            (<Route path="/" component={Home} exact />)
            {this.state.user ? (
              <Fragment>
                <Route
                  path="/loginForPassanger"
                  component={PassangerProfile}
                />
                <Route
                  path="/loginForDriver"
                  component={DriverProfile}
                />
              </Fragment>
            ) : (
              <Fragment>
                <Route path="/loginForDriver" component={LogInForDriver} />
                <Route
                  path="/loginForPassanger"
                  component={LogInForPassanger}
                />
              </Fragment>
            )}
            {/* {this.state.user2 ? (
              <PassangerProfile />
            ) : (
             
            )} */}
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
}

export default App;
