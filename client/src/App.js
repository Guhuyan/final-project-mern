import React, { Component } from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import { Provider } from "react-redux";
import store from "./store";
import Header from "./components/layout/Header";
import AboutUs from "./components/AboutUs";
import Register from "./components/auth/Register";
import Login from "./components/auth/Login";
import NoMatch from "./pages/NoMatch";
import Dashboard from "./pages/Dashboard";

class App extends Component {
  render() {
    return (
      <Provider store={store}>
        <Router>
          <div>
            <Header />
            <Switch>
              <Route exact path="/" component={AboutUs} />
              <Route exact path="/register" component={Register} />
              <Route exact path="/login" component={Login} />
              <Route exact path="/dashboard" component={Dashboard} />
              <Route component={NoMatch} />
            </Switch>
          </div>
        </Router>
      </Provider>
    );
  }
}

export default App;
