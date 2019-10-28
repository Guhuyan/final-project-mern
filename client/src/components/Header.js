import React from "react";

function Header() {
  return (
    <nav className="navbar navbar-dark bg-dark">
      <a className="navbar-brand">Stock App</a>
      <form className="form-inline">
        <button
          className="btn btn-dark btn-outline-light mr-sm-2"
          type="button"
        >
          Sign Up.
        </button>
        <button className="btn btn-dark btn-outline-light" type="button">
          Log In
        </button>
      </form>
      <form className="form-inline">
        <input
          className="form-control mr-sm-2"
          type="search"
          placeholder="Search"
          aria-label="Search"
        />
        <button className="btn btn-outline-light my-2 my-sm-0" type="submit">
          Search
        </button>
      </form>
    </nav>
  );
}
export default Header;
