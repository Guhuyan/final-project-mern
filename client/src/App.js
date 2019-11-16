import React, { Component } from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Header from "./components/Header";
import AboutUs from "./components/AboutUs";
import Login from "./pages/Login";
import NoMatch from "./pages/NoMatch";
import Dashboard from "./pages/Dashboard";
import Graph from "./components/Graph";

class App extends Component {
  render() {
    return (
      <Router>
        <div>
          <Header />
          <Switch>
            <Route exact path="/" component={AboutUs} />
            <Route exact path="/login" component={Login} />
            <Route exact path="/dashboard" component={Dashboard} />
            <Route component={NoMatch} />
          </Switch>
        </div>
      </Router>
    );
  }
}

export default App;
