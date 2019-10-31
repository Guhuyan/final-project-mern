import React, { Component } from "react";
import Search from "./Nav";

class HeaderSearch extends Component {
  state = {
    search: ""
  };

  handleSearch = event => {
    const search = event.target.value;
    const name = event.target.name;
    this.setState({
      [name]: search
    });
  };

  handleSubmit = event => {
    event.preventDefalt();
    console.log(event);
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
