import React, { Component } from "react";
import { Link } from "react-router-dom";
import API from "../../utils/nyTimesAPI";
import Stock from "../../utils/alphAvantageAPI";
import SYMBOL from "../../utils/yahooAPI";

class companySearch extends Component {
  state = {
    result: {},
    search: ""
  };

  //   componentDidMount() {
  //     this.searchSymbol();
  //   }

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
      <form className="form-inline">
        <input
          onChange={this.handleSearch}
          value={this.state.search}
          name="search"
          type="text"
          className="form-control mr-sm-2"
          placeholder="Search"
        />
        <Link
          to="/search"
          onClick={this.handleSubmit}
          className="btn btn-outline-light my-2 my-sm-0"
          type="submit"
        >
          Search
        </Link>
      </form>
    );
  }
}
export default companySearch;
