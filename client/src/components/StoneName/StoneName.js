import React from "react";
import { Col } from "reactstrap";
import "./StoneName.scss";



function StoneName(props) {
    return (
        <> 
                <Col sm="2">
                    <h1>{props.name}</h1>
                    <img src={props.image} />
                </Col>
        </>
    )
};

export default StoneName;