import React, { Component } from "react";
import Search from "../components/Search";

// import API from "../utils/nyTimesAPI";
// import Stock from "../../utils/alphAvantageAPI";
// import SYMBOL from "../utils/yahooAPI";

class StockPage extends Component {
  state = {
    company: []
  };

  render() {
    console.log(this.state.company);
    return (
      <div>
        <Search company={this.state.company} />
      </div>
    );
  }
}
export default StockPage;
