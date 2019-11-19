import React, { Component } from "react";
import { Link } from "react-router-dom";
import API from "../../utils/nyTimesAPI";
import Stock from "../../utils/alphAvantageAPI";
import SYMBOL from "../../utils/yahooAPI";
import StockPage from "../../pages/StockPage";

class companySearch extends Component {
  // state = {
  //   result: {},
  //   search: ""
  // };

  //   componentDidMount() {
  //     this.searchSymbol();
  //   }

  // searchSymbol = query => {
  //   SYMBOL.getSymbol(query)
  //     .then(res => this.setState({ result: res.data }))
  //     .catch(err => console.log(err));
  // };

  // searchArticle = query => {
  //   API.getArticle(query)
  //     .then(res => this.setState({ result: res.data }))
  //     .catch(err => console.log(err));
  // };

  // searchStock = query => {
  //   Stock.getStock(query)
  //     .then(res => this.setState({ result: res.data }))
  //     .catch(err => console.log(err));
  // };

  // handleSearch = event => {
  //   const search = event.target.value;
  //   const name = event.target.name;
  //   this.setState({
  //     [name]: search
  //   });
  // };

  // handleSubmit = event => {
  //   event.preventDefault();
  //   this.searchSymbol(this.state.search);
  //   this.searchArticle(this.state.search);
  //   // this.searchStock(this.state.search);
  // };

  render() {
    return (
      <div>
        <form className="form-inline">
          <input
            onChange={this.props.searchHandler}
            value={this.props.company}
            name="search"
            type="text"
            className="form-control mr-sm-2"
            placeholder="Search"
          />
          <Link
            to="/search"
            onClick={this.props.submitHandler}
            className="btn btn-outline-light my-2 my-sm-0"
            type="submit"
          >
            Search
          </Link>
        </form>
        {/* <StockPage company={this.state.result} /> */}
      </div>
    );
  }
}
export default companySearch;
