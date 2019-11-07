import React, { Component } from "react";

class LoginForm extends Component {
  state = {
    metadata: ""
  };

  handleInputChange = event => {
    const { name, value } = event.target;
    this.setState({
      [name]: value
    });
  };

  render() {
    return (
      <div>
        <h1>This is the Dashboard page. Work in progress!</h1>
      </div>
    );
  }
}

export default LoginForm;
