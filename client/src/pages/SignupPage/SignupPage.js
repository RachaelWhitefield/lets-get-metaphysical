import React, { Component } from "react";
import Signup from "../../components/Signup";
import API from "../../utils/API";
import "./SignupPage.scss";

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
          console.log("log in successful");
          window.location.href = "/profile";
        } else {
          console.log("something went wrong :(");
          console.log(user.data);
          this.setState({
            message: user.data
          });
        }
      });
    }
  };

  render() {
    return (
      <section class="signup">
        <div class="dark-overlay">
          <div class="signup-inner">
            <section class="container">
              <h1 class="x-large text-primary">Sign Up</h1>
              <p class="lead">Create Your Profile</p>
              
                <Signup
                  username={this.state.username}
                  password={this.state.password}
                  confirmPassword={this.state.confirmPassword}
                  handleSignup={this.handleSignup}
                  handleInputChange={this.handleInputChange}
                  message={this.state.message}
                />
             
            </section>
          </div>
        </div>
      </section>
    );
  }
}

export default SignupPage;
