import React from "react";
import { BrowserRouter as Router, Route } from "react-router-dom";
import NavSearch from "./components/NavSearch";
import Home from "./pages/Home";
import SignUp from "./pages/Signup";
import Login from "./pages/Login";
import About from "./pages/About";
import User from "./pages/User";
import Watchlist from "./pages/Watchlist";
import Quote from "./pages/Quote";
import Settings from "./pages/Settings";
import Footer from "./components/Footer";

function App() {
  return (
    <Router>
      <div>
        <NavSearch />
        <Wrapper>
          <Route exact path="/" component={Home} />
          <Route exact path="/about" component={About} />
          <Route exact path="/user" component={User} />
          <Route exact path="/signup" component={SignUp} />
          <Route exact path="/login" component={Login} />
          <Route exact path="/watchlist" component={Watchlist} />
          <Route exact path="/quote" component={Quote} />
          <Route exact path="/settings" component={Settings} />
        </Wrapper>
        <Footer />
      </div>
    </Router>
  );
}

export default App;
