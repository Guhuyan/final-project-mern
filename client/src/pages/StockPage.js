import React, { Component } from "react";
import Search from "../components/Search";
import API from "../utils/nyTimesAPI";
import Stock from "../utils/alphAvantageAPI";
import SYMBOL from "../utils/yahooAPI";
import Graph from "../components/Graph";
// import Graph from "../components/Graph/index";

class StockPage extends Component {
  state = {
    result: {
      summaryProfile: {}
    },
    article: {},
    graph: {},
    showGraph: false,
    search: ""
  };

  searchSymbol = query => {
    SYMBOL.getSymbol(query)
      .then(res => this.setState({ result: res.data }))
      .then(res => this.searchArticle(this.state.search))
      .then(res => this.searchStock(this.state.result.symbol))
      .catch(err => console.log(err));
  };

  searchArticle = query => {
    API.getArticle(query)
      .then(res => this.setState({ article: res.data }))
      .catch(err => console.log(err));
  };

  searchStock = query => {
    Stock.getStock(query)
      .then(res => this.setState({ graph: res.data }))
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
    this.setState({
      showGraph: true
    });
    // this.searchArticle(this.state.search);
    // await this.searchStock(this.state.result.symbol);
  };

  render() {
    return (
      <div>
        <Search
          company={this.state.search}
          searchHandler={this.handleSearch}
          submitHandler={this.handleSubmit}
        />
        {this.state.showGraph ? <Graph /> : <p> </p>}
        {this.state.result.summaryProfile.longBusinessSummary}
      </div>
    );
  }
}
export default StockPage;
