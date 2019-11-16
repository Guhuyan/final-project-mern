import React, { Component } from "react";
import API from "../utils/nyTimesAPI";
import Stock from "../utils/alphAvantageAPI";
import SYMBOL from "../utils/yahooAPI";
import Search from "./Nav";

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
    // this.searchStock(this.state.search);
  };

  render() {
    return (
      <Search
        text={this.state.search}
        handleSearch={this.handleSearch}
        handleSubmit={this.handleSubmit}
      />
    );
  }
}

export default HeaderSearch;
