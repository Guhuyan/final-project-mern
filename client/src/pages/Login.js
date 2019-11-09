import React, { Component } from "react";
import { useHistory, useLocation } from "react-router-dom";
import Button from "../components/Button";
import Input from "../components/Input";
import API from "../utils/API";

// let history = useHistory();
// let location = useLocation();

// let { from } = location.state || { from: { pathname: "/" } };
// let login = () => {
//   fakeAuth.authenticate(() => {
//     history.replace(from);
//   });
// };

class LoginForm extends Component {
  state = {
    username: "",
    password: "",
    metadata: ""
  };

  handleInputChange = event => {
    const { name, value } = event.target;
    this.setState({
      [name]: value
    });
  };

  handleFormSubmit = event => {
    event.preventDefault();
    API.getUserLogin(this.state.username, this.state.password)
      .then(res => this.setState({ metadata: res.data }))
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
                  value={this.state.username}
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
                  value={this.state.password}
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

  componentDidMount() {
    this.props.history.push("/dashboard");
    console.log(this.props.history);
  }
}

export default LoginForm;
