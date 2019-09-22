import React from "react";
import { Container, Col, Row } from "reactstrap";
import "./Runes.scss";

function Runes() {

    return (
        <Container>
            <Row>
                <Col sm={{ size: "3", offset: "2" }}>
                    <h1>
                        Get Totally<br />
                        <span className="runed">RUNED</span>
                    </h1>
                </Col>
            </Row>
            <Row>
                <Col sm={{ size: "6", offset: "6" }}>
                    <Row>
                        <Col sm="4" className="cast">
                            <img src="../../../assets/images/cross.png" />
                        </Col>
                        <Col sm="8">
                            <h3>RUNIC CROSS</h3>
                            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer nec congue dolor. Sed varius augue vel massa aliquam scelerisque.</p>
                        </Col>
                    </Row>
                    <Row>
                        <Col sm="4" className="cast">
                            <img src="../../../assets/images/norn.png" />
                        </Col>
                        <Col sm="8">
                            <h3>RUNIC CROSS</h3>
                            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer nec congue dolor. Sed varius augue vel massa aliquam scelerisque.</p>
                        </Col>
                    </Row>
                    <Row>
                        <Col sm="4" className="cast">
                            <img src="../../../assets/images/single.png" />
                        </Col>
                        <Col sm="8">
                            <h3>RUNIC CROSS</h3>
                            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer nec congue dolor. Sed varius augue vel massa aliquam scelerisque.</p>
                        </Col>
                    </Row>
                </Col>
            </Row>
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
    )
}

export default Runes;