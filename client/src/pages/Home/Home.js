import React, { Component } from "react";
import { Button } from "reactstrap";
import API from "../../utils/API";
import "./Home.scss";

class Home extends Component {

  state = {
    loggedIn: false,
    joke: ""
  };

  componentDidMount() {
    this.loggedIn();
  }


  loggedIn = () => {
    API.isLoggedIn().then(user => {
      if (user.data.loggedIn) {
        this.setState({
          loggedIn: true
        });
      }
    }).catch(err => {
      console.log(err);
    });
  }

  render() {
    return (
    <div>
        <section class="landing">
            <div class="landing-inner">
                <h1 class="x-large">GET STONED</h1>
                <p class="lead">Space, the final frontier. These are the voyages of the Starship Enterprise. Its
                    five-year mission: to explore strange new worlds, to seek out new life and new civilizations, to
                    boldly go where no man has gone before. Many say exploration is part of our destiny, but it’s
                    actually our duty to future generations and their quest to ensure the survival of the human species.
                </p>
                <div class="buttons">
                    <a href="/signup" class="btn">Sign Up</a>
                    <a href="/login" class="btn">Login</a>
                </div>
            </div>
    </section>
      </div>

    );
  }
}

export default Home;