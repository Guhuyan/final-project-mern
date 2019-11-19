import React, { Component } from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Header from "./components/layout/Header";
import AboutUs from "./components/AboutUs";
import Register from "./components/auth/Register";
import Login from "./components/auth/Login";
import NoMatch from "./pages/NoMatch";
import Dashboard from "./pages/Dashboard";
import Search from "./pages/StockPage";

class App extends Component {
  render() {
    return (
      <Router>
        <div>
          <Header />
          <Switch>
            <Route exact path="/" component={AboutUs} />
            <Route exact path="/register" component={Register} />
            <Route exact path="/login" component={Login} />
            <Route exact path="/dashboard" component={Dashboard} />
            <Route exact path="/search" component={Search} />
            <Route component={NoMatch} />
          </Switch>
        </div>
      </Router>
    );
  }
}

export default App;
