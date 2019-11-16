import React, { Component } from "react";
import { Link } from "react-router-dom";
import API from "../utils/nyTimesAPI";
import Stock from "../utils/alphAvantageAPI";
import SYMBOL from "../utils/yahooAPI";

class HeaderSearch extends Component {
  state = {
    result: {},
    search: ""
  };

  searchSymbol = query => {
    SYMBOL.getSymbol(query)
      .then(res => this.setState({ result: res.data }))
      .catch(err => console.log(err));
  };

  searchArticle = query => {
    API.getArticle(query)
      .then(res => this.setState({ result: res.data }))
      .catch(err => console.log(err));
  };

  searchStock = query => {
    Stock.getStock(query)
      .then(res => this.setState({ result: res.data }))
      .catch(err => console.log(err));
  };

  handleSearch = event => {
    const search = event.target.value;
    const name = event.target.name;
    this.setState({
      [name]: search
    });
  };

  handleSubmit = event => {
    event.preventDefault();
    this.searchSymbol(this.state.search);
    this.searchArticle(this.state.search);
    this.searchStock(this.state.search);
  };

  render() {
    return (
      <nav className="navbar navbar-dark bg-dark">
        <Link to="/" className="navbar-brand">
          Stock App
        </Link>
        <form className="form-inline">
          <button
            className="btn btn-dark btn-outline-light mr-sm-2"
            type="button"
          >
            Sign Up
          </button>
          <button className="btn btn-dark btn-outline-light" type="button">
            Log In
          </button>
        </form>
        <form className="form-inline">
          <input
            onChange={this.handleSearch}
            value={props.value}
            name="search"
            type="text"
            className="form-control mr-sm-2"
            placeholder="Search"
          />
          <button
            onClick={this.handleSubmit}
            className="btn btn-outline-light my-2 my-sm-0"
            type="submit"
          >
            Search
          </button>
        </form>
      </nav>
    );
  }
}

export default HeaderSearch;
