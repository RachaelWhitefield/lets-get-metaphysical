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
                </Col>
                <Col sm="6">
                    <Container>
                        <Row>
                            <Col sm="3" className="cast">
                                <img src="../../../assets/images/cross.png" />
                            </Col>
                            <Col sm="8">
                                <h3 className="castTitle">RUNIC CROSS CAST</h3>
                                <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer nec congue dolor. Sed varius augue vel massa aliquam scelerisque.</p>
                            </Col>
                        </Row>
                        <Row>
                            <Col sm="3" className="cast">
                                <img src="../../../assets/images/norn.png" />
                            </Col>
                            <Col sm="8">
                                <h3 className="castTitle">NORN CAST</h3>
                                <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer nec congue dolor. Sed varius augue vel massa aliquam scelerisque.</p>
                            </Col>
                        </Row>
                        <Row>
                            <Col sm="3">
                                <img src="../../../assets/images/single.png" />
                            </Col>
                            <Col sm="8">
                                <h3 className="castTitle">SINGLE CAST</h3>
                                <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer nec congue dolor. Sed varius augue vel massa aliquam scelerisque.</p>
                            </Col>
                        </Row>
                    </Container>
                </Col>
                <Container className="gameContainer">
                    <Row>
                        <Col lg="12" className="game">
                            <div className="iframe-container">
                                <iframe src="https://i.simmer.io/@SummoningDark/~788a3462-18f6-4f9a-0d4e-e5bd24984062"
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