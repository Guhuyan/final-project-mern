import React, { Component } from "react";
import { Link } from "react-router-dom";
import PropTypes from "prop-types";
import { connect } from "react-redux";
import { logoutUser } from "../../actions/authActions";

class DashboardHeader extends Component {
  onLogoutClick = e => {
    e.preventDefault();
    this.props.logoutUser();
  };
  render() {
    return (
      <nav className="navbar navbar-dark bg-dark">
        <Link to="/" className="navbar-brand">
          Stock App
        </Link>
        <form className="form-inline">
          <Link
            to="/"
            className="btn btn-dark"
            type="button"
            onClick={this.onLogoutClick}
          >
            Logout
          </Link>
        </form>
      </nav>
    );
  }
}

DashboardHeader.propTypes = {
  logoutUser: PropTypes.func.isRequired,
  auth: PropTypes.object.isRequired
};

const mapStateToProps = state => ({
  auth: state.auth
});

export default connect(mapStateToProps, { logoutUser })(DashboardHeader);
