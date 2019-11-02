import React from "react";

function Header(props) {
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
          onChange={props.handleSearch}
          value={props.value}
          name="search"
          type="text"
          className="form-control mr-sm-2"
          placeholder="Search"
        />
        <button
          onClick={props.handleSubmit}
          className="btn btn-outline-light my-2 my-sm-0"
          type="submit"
        >
          Search
        </button>
      </form>
    </nav>
  );
}
export default Header;
