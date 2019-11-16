import React, { Component } from "react";
import { Link } from "react-router-dom";

class MainHeader extends Component {
  render() {
    return (
      <nav className="navbar navbar-dark bg-dark">
        <Link to="/" className="navbar-brand">
          Stock App
        </Link>
        <form className="form-inline">
          <Link
            to="/register"
            className="btn btn-dark btn-outline-light mr-sm-2"
            type="button"
          >
            Sign Up
          </Link>
          <Link
            to="/login"
            className="btn btn-dark btn-outline-light"
            type="button"
          >
            Log In
          </Link>
        </form>
      </nav>
    );
  }
}

export default MainHeader;
