import React, { Component } from "react";
import API from "../utils/nyTimesAPI";
import Search from "./Nav";

class HeaderSearch extends Component {
  state = {
    result: {},
    search: ""
  };

  searchStocks = query => {
    API.getArticle(query)
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
    this.searchStocks(this.state.search);
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
