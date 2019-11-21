import React, { Component } from "react";

export default class index extends Component {
  render() {
    const article = this.props.newsArticle;
    console.log(article);
    return (
      <div>
        <div className="card">
          <div className="card-body">
            <h1>{this.props.name}</h1>
            <h5>{this.props.symbol}</h5>
            <h5>
              {this.props.data.city}, {this.props.data.state}
            </h5>
            <p>{this.props.data.longBusinessSummary}</p>
          </div>
        </div>
        <div class="card">
          {/* {article} */}
          {/* <div class="card-body">{this.props.newsArticle.abstract}</div> */}
        </div>
      </div>
    );
  }
}
