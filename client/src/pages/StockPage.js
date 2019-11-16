import React, { Component } from "react";
import Header from "../components/layout/Header";

function pageRender(props) {
  return (
    <div>
      <Header />
      <div class="card">
        <div class="card-body">${this.state.search}</div>
      </div>
    </div>
  );
}

export default pageRender;
