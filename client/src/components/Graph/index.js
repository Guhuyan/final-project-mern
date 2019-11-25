import React, { Component } from "react";
import { Line } from "react-chartjs-2";
import "chartjs-plugin-lineheight-annotation";

export default class Graph extends Component {
  componentDidMount() {
    this.getChartData();
  }
  // Documentation for below found at:
  // https://developer.mozilla.org/en-US/docs/Web/API/CanvasRenderingContext2D/createLinearGradient

  setGradientColor = (canvas, color) => {
    const ctx = canvas.getContext("2d");
    console.log(ctx);
    const gradient = ctx.createLinearGradient(0, 0, 600, 550); // 600 and 500 are the width and height, respectively
    // The width and height are obtained from
    gradient.addColorStop(0, color);
    gradient.addColorStop(0.95, "blue");
    return gradient;
  };

  getChartData = canvas => {
    const intervals = [this.props.dataGraph["Time Series (5min)"]];
    console.log(intervals);
    const highs = intervals.map(interval => {
      // return interval["1. open"]
      console.log(interval);
    });
    // const lows = intervals.map(interval => {
    //   return Math.round(interval["3. low"]);
    // });
    // const data = this.state.data;
    // if (highs) {
    //   let colors = ["rgba(0, 50, 255, 0.75)", "rgba(255, 255, 255, 0.75)"];
    //   highs.forEach((set, i) => {
    //     set.backgroundColor = this.setGradientColor(canvas, colors[i]);
    //     set.borderColor = "black";
    //     set.borderWidth = 0.5;
    //     set.lineTension = 0;
    //   });
    // }
    return highs;
  };

  render() {
    return (
      <div style={{ position: "relative", width: 1000, height: 550 }}>
        <h3> Sample Graphy </h3>
        <Line
          options={{
            responsive: true,
            lineHeightAnnotation: {
              shadow: {
                blur: 2,
                color: "black"
              }
            }
          }}
          data={this.getChartData}
        />
      </div>
    );
  }
}

//Chart.js documentation found on https://www.chartjs.org/docs/latest/
