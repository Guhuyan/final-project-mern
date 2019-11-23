import React, { Component } from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import jwt_decode from "jwt-decode";
import setAuthToken from "./utils/setAuthToken";
import { setCurrentUser, logoutUser } from "./actions/authActions";

import { Provider } from "react-redux";
import store from "./store";

import "bootstrap/dist/css/bootstrap.min.css";

import Header from "./components/layout/Header";

import AboutUs from "./components/AboutUs";
import Register from "./components/auth/Register";
import Login from "./components/auth/Login";
import NoMatch from "./pages/NoMatch";
import PrivateRoute from "./PrivateRoute";
import Dashboard from "./pages/Dashboard";
import Search from "./pages/StockPage";

// Check for token to keep user logged in
if (localStorage.jwtToken) {
  // Set auth token header auth
  const token = localStorage.jwtToken;
  setAuthToken(token);
  // Decode token and get user info and exp
  const decoded = jwt_decode(token);
  // Set user and isAuthenticated
  store.dispatch(setCurrentUser(decoded));

  // Check for expired token
  const currentTime = Date.now() / 1000; // to get in milliseconds
  if (decoded.exp < currentTime) {
    // Logout user
    store.dispatch(logoutUser()); // Redirect to login
    window.location.href = "./login";
  }
}

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
              <PrivateRoute exact path="/dashboard" component={Dashboard} />
              <PrivateRoute exact path="/search" component={Search} />
              <Route component={NoMatch} />
            </Switch>
          </div>
        </Router>
      </Provider>
    );
  }
}

export default App;
