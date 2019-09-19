import React from "react";
import Filter from "../../components/Filter";
import { Container, Col, Row } from "reactstrap";

function Discover() {
    return (
        <>
        <Container fluid="true">
           <Row>
               <Col sm={{ size: "auto", offset: 1 }}>
                   <h1>
                       Get Totally<br />
                       STONED
                   </h1>
               </Col>
                 
           <Col sm={{ size: "auto", offset: 1 }}>
            <Filter />
           </Col>
           </Row>
        </Container>
    </>
    )
};

export default Discover;