import React, { Component } from "react";
import { Link } from "react-router-dom";
import API from "../../utils/nyTimesAPI";
import Stock from "../../utils/alphAvantageAPI";
import SYMBOL from "../../utils/yahooAPI";
import StockPage from "../../pages/StockPage";

class companySearch extends Component {
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
      </div>
    );
  }
}
export default companySearch;
