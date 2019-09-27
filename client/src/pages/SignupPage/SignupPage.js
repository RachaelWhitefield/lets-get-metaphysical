import React, { Component } from "react";
import Signup from "../../components/Signup";
import API from "../../utils/API";
import "./SignupPage.scss";
import { Container } from "reactstrap";

class SignupPage extends Component {
  state = {
    loggedIn: false,
    username: "",
    password: "",
    confirmPassword: "",
    user: null,
    message: ""
  };

  handleInputChange = event => {
    const value = event.target.value;
    const name = event.target.name;
    this.setState({
      [name]: value
    });
  };


  handleSignup = event => {
    event.preventDefault();
    if (this.state.username && this.state.password) {
      API.signup({
        username: this.state.username,
        password: this.state.password
      }).then(user => {
        if (user.data.loggedIn) {
          this.setState({
            loggedIn: true,
            user: user.data.user
          });
          window.location.href = "/profile";
        } else {
        
          this.setState({
            message: user.data
          });
        }
      });
    }
  };

  render() {
    return (
      <Container fluid id="signupBox">
          <div className="signup-inner">
            <Signup
                  username={this.state.username}
                  password={this.state.password}
                  confirmPassword={this.state.confirmPassword}
                  handleSignup={this.handleSignup}
                  handleInputChange={this.handleInputChange}
                  message={this.state.message}
                />
          </div>
      </Container>
    );
  }
}

export default SignupPage;
