// import React, { Component } from "react";
// import { Line } from "react-chartjs-2";

// export default class Graph extends Component {
//   constructor(props) {
//     super(props);

//     this.state = {
//       data: {
//         labels: ["1", "2", "3", "4", "5"],
//         datasets: [
//           {
//             label: "Label 1",
//             backgroundColor: "rgba(0, 50, 255, 0.75)",
//             data: [4, 5, 1, 10, 32, 2, 12]
//           },
//           {
//             label: "Label 2",
//             backgroundColor: "rgba(255, 255, 255, 0.75)",
//             data: [24, 5, 21, 14, 32, 4, 12]
//           }
//         ]
//       }
//     };
//   }

//   setGradientColor = (canvas, color) => {
//     const ctx = canvas.getContext("2d");
//     console.log(ctx);
//     const gradient = ctx.createLinearGradient(0, 0, 600, 550); // 600 and 500 are the width and height, respectively
//     // The width and height are obtained from
//     gradient.addColorStop(0, color);
//     gradient.addColorStop(0.95, "rgba (133, 122, 144, 0.5");
//     return gradient;
//   };

//   getChartData = canvas => {
//     const data = this.state.data;
//     if (data.datasets) {
//       let colors = ["rgba(0, 50, 255, 0.75)", "rgba(255, 255, 255, 0.75)"];
//       data.datasets.forEach((set, i) => {
//         set.backgroundColor = this.setGradientColor(canvas, colors[i]);
//         set.borderColor = "white";
//         set.borderWidth = 2;
//       });
//     }
//     return data;
//   };

//   render() {
//     return (
//       <div style={{ position: "relative", width: 600, height: 550 }}>
//         <h3> Chart Sample</h3>
//         <Line
//           options={{
//             responsive: true
//           }}
//           data={this.getChartData}
//         />
//       </div>
//     );
//   }
// }

//Chart.js documentation found on https://www.chartjs.org/docs/latest/
