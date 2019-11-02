import React, { Component } from "react";
import Nav from "../Nav";

class NavSearch extends Component {
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
      <Nav
        text={this.state.search}
        handleSearch={this.handleSearch}
        handleSubmit={this.handleSubmit}
      />
    );
  }
}

export default NavSearch;
