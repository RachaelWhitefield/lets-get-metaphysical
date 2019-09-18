import React from "react";
import Filter from "../../components/Filter";
import { Container, Col, Row } from "reactstrap";

function Discover() {
    return (
        <>
        <Container>
           <Row>
               <Col sm={{ size: "2", offset: "2" }}>
                   <h1>
                       Get Totally<br />
                       STONED
                   </h1>
               </Col>
                 
           </Row>
           
        </Container>

        <Container fluid="true">
            <Row>
           <Col sm="3">
            <Filter />
           </Col>
           </Row>
        </Container>
    </>)

};

export default Discover;