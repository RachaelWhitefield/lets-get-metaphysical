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
         <section className="landing">
        <div className="dark-overlay">
            <div className="landing-inner">
                <h1 className="x-large">STONED</h1>
                <p className="lead">Space, the final frontier. These are the voyages of the Starship Enterprise. Its
                    five-year mission: to explore strange new worlds, to seek out new life and new civilizations, to
                    boldly go where no man has gone before. Many say exploration is part of our destiny, but it’s
                    actually our duty to future generations and their quest to ensure the survival of the human species.
                </p>
                <div className="buttons">
                    <a href="/signup" className="btn btn-primary">Sign Up</a>
                    <a href="/login" className="btn btn">Login</a>
                </div>
            </div>
        </div>
    </section>
      </div>

    );
  }
}

export default Home;