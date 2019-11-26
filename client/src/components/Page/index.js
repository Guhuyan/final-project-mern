import React, { Component } from "react";

export default class index extends Component {
  render() {
    const abstract =
      this.props.newsArticle && this.props.newsArticle[0]
        ? this.props.newsArticle[0].abstract
        : null;
    const url =
      this.props.newsArticle && this.props.newsArticle[0]
        ? this.props.newsArticle[0].web_url
        : null;
    return (
      <div>
        <div className="card">
          <div className="card-body">
            <h1>{this.props.name}</h1>
            <h6>{this.props.symbol}</h6>
            <h6>Employees: {this.props.data.fullTimeEmployees}</h6>
            <h6>
              {this.props.data.city}, {this.props.data.state}
            </h6>
            <p>{this.props.data.longBusinessSummary}</p>
          </div>
        </div>
        <div className="card">
          {/* {article} */}
          <div className="card-body">{abstract}</div>
        </div>
      </div>
    );
  }
}
