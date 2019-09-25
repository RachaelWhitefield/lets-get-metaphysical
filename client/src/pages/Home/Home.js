import React, { Component } from "react";
import { Container, Row, Col } from "reactstrap";
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
      <>
        <section className="landing">
          <div className="landing-inner">
            <Container>
              <Row>
                <Col sm="12" md={{ size: 6, offset: 3 }}>
                  <h1 className="pageTitle">
                    <span className="header">GET STONED</span>
                  </h1>
                  <p className="lead">Space, the final frontier. These are the voyages of the Starship Enterprise. Its
                      five-year mission: to explore strange new worlds, to seek out new life and new civilizations, to
                      boldly go where no man has gone before. Many say exploration is part of our destiny, but it’s
                      actually our duty to future generations and their quest to ensure the survival of the human species.
                </p>
                  <div className="buttons">
                    <a href="/signup" className="btn homebtn">Sign Up</a>
                    <a href="/login" className="btn homebtn">Login</a>
                  </div>
                </Col>
              </Row>
            </Container>
          </div>
        </section>
        
        <div className="greyContainer">
        <Row>
                <Col sm="12" md="6" className="section runed">
                  <h2>GET RUNED</h2>
                  <p>Space, the final frontier. These are the voyages of the Starship Enterprise. Its
                      five-year mission: to explore strange new worlds, to seek out new life and new civilizations, to
                      boldly go where no man has gone before. Many say exploration is part of our destiny, but it’s
                      actually our duty to future generations and their quest to ensure the survival of the human species.</p>
                </Col>
                <Col sm="12" md="6" className="section stoned">
                  <h2>GET RUNED</h2>
                  <p>Space, the final frontier. These are the voyages of the Starship Enterprise. Its
                      five-year mission: to explore strange new worlds, to seek out new life and new civilizations, to
                      boldly go where no man has gone before. Many say exploration is part of our destiny, but it’s
                      actually our duty to future generations and their quest to ensure the survival of the human species.</p>
                </Col>
              </Row>
              </div>
                
      </>

    );
  }
}

export default Home;