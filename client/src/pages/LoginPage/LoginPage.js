import React, { Component } from "react";
import Login from "../../components/Login";
import "./LoginPage.scss";
import API from "../../utils/API";
import { Container } from "reactstrap";

class LoginPage extends Component {
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
  
    handleLogin = event => {
      event.preventDefault();
      if (this.state.username && this.state.password) {
        API.login({
          username: this.state.username,
          password: this.state.password
        }).then(user => {
          if (user.data.loggedIn) {
            this.setState({
              loggedIn: true,
              user: user.data.user
            });
            window.location.href = "/profile";
          } else if (user.data.message) {
            this.setState({
              message: user.data.message
            });
          }
        });
      }
    };
    render() {
    return (
        <Container fluid id="loginBox">
          
          <div className="signup-inner">
            {/* <section class="container"> */}
              
              
                <Login
                  username={this.state.username}
                  password={this.state.password}
                  handleLogin={this.handleLogin}
                  handleInputChange={this.handleInputChange}
                  message={this.state.message}
                />
            {/* </section> */}
          </div>
      </Container>
    );
}
}

export default LoginPage;