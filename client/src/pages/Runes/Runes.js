import React from "react";
import { Container, Col, Row } from "reactstrap";

function Runes() {

    return (
        <Container>
            <Row>
                <Col sm={{ size: "2", offset: "2" }}>
                    <h1>
                        Get Totally<br />
                        RUNED
                    </h1>
                </Col>
            </Row>
            <Row>
                <Col sm={{ size: "6", offset: "6" }}>
                    <h2>
                        CASTS
                    </h2>
                    <Row>
                        <Col sm="4" className="cast">
                            <img src="https://via.placeholder.com/150" />
                        </Col>
                        <Col sm="8">
                        <h3>RUNIC CROSS</h3>
                        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer nec congue dolor. Sed varius augue vel massa aliquam scelerisque.</p>
                        </Col>
                    </Row>
                    <Row>
                        <Col sm="4" className="cast">
                            <img src="https://via.placeholder.com/150" />
                        </Col>
                        <Col sm="8">
                        <h3>RUNIC CROSS</h3>
                        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer nec congue dolor. Sed varius augue vel massa aliquam scelerisque.</p>
                        </Col>
                    </Row>
                    <Row>
                        <Col sm="4" className="cast">
                            <img src="https://via.placeholder.com/150" />
                        </Col>
                        <Col sm="8">
                        <h3>RUNIC CROSS</h3>
                        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer nec congue dolor. Sed varius augue vel massa aliquam scelerisque.</p>
                        </Col>
                    </Row>
                </Col>
            </Row>

        </Container>
    )
}

export default Runes;