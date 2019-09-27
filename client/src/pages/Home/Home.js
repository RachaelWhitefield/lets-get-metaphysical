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
                <Col sm="12" md={{ size: 8, offset: 2 }}>
                  <h1 className="pageTitle">
                    <span className="header">GET STONED</span>
                  </h1>
                  <p className="lead">Four score and millions of millenia ago, there was a big BOOM and stones were formed. Through the ages we have used these mystical marvels to heal, protect, and predict the future. 
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
                  <h2>GET RADICALLY RUNED</h2>
                  <p>Rune casting is hella old and can give you all the answers you seek. It's a very intimate divination style and is ever changing as we are humans. We have developed a run casting game with three types or cast's to choose from. See where your stones lie.</p>
                </Col>
                <Col sm="12" md="6" className="section stoned">
                  <h2>GET TOTALLY STONED</h2>
                  <p>Woahhh dude! Those stones be poppin'. They seem older than dirt. Gemstones have been around for millenia and have been used for healing, protection, and aligning chakras. We have created a custom API that holds these proporties to allow someone to learn which stones can help them in the ways needed. You can favorite the stones you want to use and get to them quicker through your profile. </p>
                </Col>
              </Row>
              </div>
                
      </>

    );
  }
}

export default Home;