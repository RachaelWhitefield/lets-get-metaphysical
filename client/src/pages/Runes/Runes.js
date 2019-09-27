import React from "react";
import { Container, Col, Row } from "reactstrap";
import "./Runes.scss";

function Runes() {

    return (
        <Container fluid>
            <Row>
                <Col sm={{ size: 3, offset: 1 }}>
                    <h1 className="pageTitle">
                        GET RADICALLY<br />
                        <span className="header">RUNED</span>
                    </h1>
                    <p className="runes">Of the various forms of divination, reading rune stones is perhaps the most intimate and unique to the individual performing the cast. The runes themselves are in constant movement, changing with us as we grow. When casting the stones, think of a question or aspect of your life you would like guidance with. There is no single interpretation.</p>
                    <br />
                    <p> Special thanks to Diane Kielty for the rune stone interpretations.</p>

                </Col>
                <Col sm="6">
                    <Container>

                        <Row className="single">
                            <Col sm="3" >
                                <img src="../../../assets/images/single.png" alt="single" />
                            </Col>
                            <Col sm="8">
                                <h3 className="castTitle">SINGLE CAST</h3>
                                <p>A single stone cast works best with a specific question in mind. Think carefully about what you would like guidance with before choosing a stone.</p>
                            </Col>
                        </Row>
                        <Row>
                            <Col sm="3" className="cast">
                                <img src="../../../assets/images/norn.png" alt="norn" />
                            </Col>
                            <Col sm="8">
                                <h3 className="castTitle">NORN CAST</h3>
                                <p>The three stone norn cast give a more general outline of events. The left most stone represents the past, the middle represents the future, and the left is a possible future.</p>
                            </Col>
                        </Row>
                        <Row>
                            <Col sm="3" className="cast">
                                <img src="../../../assets/images/cross.png" alt="cross" />
                            </Col>
                            <Col sm="8">
                                <h3 className="castTitle">RUNIC CROSS CAST</h3>
                                <p>The Runic cross shows an interpretation of the matter at hand. The top most stone is the most likely outcome or resolution. The middle most stone represents potential obstacles. The stone directly below signifies the present while the bottom most stone gives context to the situation at large. On the far left we can see the past, and on the far right the future that we foresee occurring if we stay on this path.</p>
                            </Col>
                        </Row>

                    </Container>
                </Col>
                <Container className="gameContainer">
                    <Row className="justify-content-center">
                        <Col sm="12" className="game">
                            <div className="iframe-container">
                                <iframe src="https://theguardingdark.github.io/runestones/"
                                    allow="autoplay; encrypted-media"
                                    allowFullScreen
                                    title="unityGame"
                                    className="embed-responsive embed-responsive-16by9"></iframe>
                            </div>
                        </Col>
                    </Row>
                </Container>
            </Row>
        </Container>
    )
}

export default Runes;