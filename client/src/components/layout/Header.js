import React, { Component } from "react";
import { Link } from "react-router-dom";
import PropTypes from "prop-types";
import { connect } from "react-redux";
import { logoutUser } from "../../actions/authActions";

class Header extends Component {
  onLogoutClick = e => {
    e.preventDefault();
    this.props.logoutUser();
  };
  render() {
    let button1;
    let button2;
    if (this.props.auth.isAuthenticated) {
      button1 = (
        <Link to="/search" className="btn btn-dark" type="button">
          Search
        </Link>
      );
      button2 = (
        <Link
          to="/"
          className="btn btn-dark"
          type="button"
          onClick={this.onLogoutClick}
        >
          Logout
        </Link>
      );
    } else {
      button1 = (
        <Link to="/register" className="btn btn-dark" type="button">
          Sign Up
        </Link>
      );
      button2 = (
        <Link to="/login" className="btn btn-dark" type="button">
          Log In
        </Link>
      );
    }
    return (
      <nav className="navbar navbar-dark bg-dark">
        <Link to="/" className="navbar-brand">
          Mrn3 Financial
        </Link>
        <form className="form-inline">
          {button1}
          {button2}
        </form>
      </nav>
    );
  }
}

Header.propTypes = {
  logoutUser: PropTypes.func.isRequired,
  auth: PropTypes.object.isRequired
};

const mapStateToProps = state => ({
  auth: state.auth
});

export default connect(mapStateToProps, { logoutUser })(Header);
