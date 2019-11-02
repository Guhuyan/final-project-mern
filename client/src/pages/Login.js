import React, { Component } from "react";
import Button from "../components/Button";
import Input from "../components/Input";
import API from "./utils/API";

class LoginForm extends Component {
  state = {
    username: "",
    password: ""
  };

  handleInputChange = event => {
    const { name, value } = event.target;
    this.setState({
      [name]: value
    });
  };

  handleFormSubmit = event => {
    event.preventDefault();
    API.getUserLogin(this.state.recipeSearch)
      .then(res => this.setState({ recipes: res.data }))
      .catch(err => console.log(err));
  };

  render() {
    return (
      <form>
        <header></header>
        <div>
          <div className="form-group">
            <label>
              <div>Email or Username</div>
              <div>
                <Input
                  autoComplete="off"
                  autoCorrect="off"
                  autoCapitalize="off"
                  spellCheck="false"
                  required=""
                  name="username"
                  type="text"
                  value=""
                  onChange={this.handleInputChange}
                />
              </div>
            </label>
          </div>
          <div className="form-group">
            <label>
              <div>Password</div>
              <div>
                <Input
                  required=""
                  name="password"
                  type="password"
                  value=""
                  onChange={this.handleInputChange}
                />
              </div>
            </label>
          </div>
        </div>
        <footer>
          <div>
            <Button
              onClick={this.handleFormSubmit}
              type="success"
              className="input-lg"
            >
              <span>Sign In</span>
            </Button>
          </div>
        </footer>
      </form>
    );
  }
}

export default LoginForm;
