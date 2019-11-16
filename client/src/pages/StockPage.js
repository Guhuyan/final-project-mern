import React, { Component } from "react";
import Search from "../components/Search";
import API from "../utils/nyTimesAPI";
// import Stock from "../../utils/alphAvantageAPI";
import SYMBOL from "../utils/yahooAPI";

function pageRender() {
  return (
    <div>
      <Search />
    </div>
  );
}

export default pageRender;
