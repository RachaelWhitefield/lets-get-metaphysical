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
                                <img src="../../../assets/images/cross.png" alt="cross"/>
                            </Col>
                            <Col sm="8">
                                <h3 className="castTitle">RUNIC CROSS CAST</h3>
                                <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer nec congue dolor. Sed varius augue vel massa aliquam scelerisque.</p>
                            </Col>
                        </Row>
                        <Row>
                            <Col sm="3" className="cast">
                                <img src="../../../assets/images/norn.png" alt="norn"/>
                            </Col>
                            <Col sm="8">
                                <h3 className="castTitle">NORN CAST</h3>
                                <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer nec congue dolor. Sed varius augue vel massa aliquam scelerisque.</p>
                            </Col>
                        </Row>
                        <Row>
                            <Col sm="3">
                                <img src="../../../assets/images/single.png" alt="single"/>
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