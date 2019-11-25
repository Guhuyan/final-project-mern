import React, { Component } from "react";
import Search from "../components/Search";
import API from "../utils/nyTimesAPI";
import Stock from "../utils/alphAvantageAPI";
import SYMBOL from "../utils/yahooAPI";
import Graph from "../components/Graph";
import Page from "../components/Page/index";

class StockPage extends Component {
  state = {
    result: {
      symbol: "",
      summaryProfile: {}
    },
    article: {},
    graph: false,
    showPage: false,
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

      .then(res => {
        this.setState({ article: res.data });
      })
      .catch(err => console.log(err));
  };

  searchStock = query => {
    Stock.getStock(query)
      .then(res => {
        this.setState({ graph: res.data });
      })
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
      showGraph: true,
      showPage: true
    });
  };

  render() {
    const doc =
      this.state.article && this.state.article.docs
        ? this.state.article.docs
        : null;
    return (
      <div>
        <Search
          company={this.state.search}
          searchHandler={this.handleSearch}
          submitHandler={this.handleSubmit}
        />
        {this.state.graph && this.state.showGraph ? (
          <Graph dataGraph={this.state.graph} />
        ) : (
          ""
        )}
        {this.state.showPage ? (
          <Page
            symbol={this.state.result.symbol}
            data={this.state.result.summaryProfile}
            name={this.state.search}
            newsArticle={doc}
          />
        ) : (
          ""
        )}
      </div>
    );
  }
}
export default StockPage;
