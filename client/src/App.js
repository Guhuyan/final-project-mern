import React from "react";
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link,
  Redirect
} from "react-router-dom";
import Header from "./components/Header";
import AboutUs from "./components/AboutUs";
import Login from "./pages/Login";
import NoMatch from "./pages/NoMatch";
import Dashboard from "./pages/Dashboard";
import { AuthContext } from "./context/Auth";

function App(props) {
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

export default App;
