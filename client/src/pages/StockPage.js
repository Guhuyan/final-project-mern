import React, { Component } from "react";
import Search from "../components/Search";
import API from "../utils/nyTimesAPI";
//import Stock from "../../utils/alphAvantageAPI";
import SYMBOL from "../utils/yahooAPI";

class StockPage extends Component {
  state = {
    result: {
      summaryProfile: {}
    },
    article: {},
    search: ""
  };

  searchSymbol = query => {
    SYMBOL.getSymbol(query)
      .then(res => this.setState({ result: res.data }))
      .catch(err => console.log(err));
  };

  searchArticle = query => {
    API.getArticle(query)
      .then(res => this.setState({ article: res.data }))
      .catch(err => console.log(err));
  };

  // searchStock = query => {
  //   Stock.getStock(query)
  //     .then(res => this.setState({ result: res.data }))
  //     .catch(err => console.log(err));
  // };

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
    //console.log(this.props.result);
    return (
      <div>
        <Search
          company={this.state.search}
          searchHandler={this.handleSearch}
          submitHandler={this.handleSubmit}
        />
        {this.state.result.summaryProfile.longBusinessSummary}
      </div>
    );
  }
}
export default StockPage;
