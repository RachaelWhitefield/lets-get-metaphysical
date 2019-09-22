import React from "react";
import { Col } from "reactstrap";
import "./StoneName.scss";



function StoneName(props) {
    return (
        <> 
                <Col sm="3" onClick={props.stoneModalOpen}>
                    <h1>{props.name}</h1>
                    <img src={props.image} alt={props.name} />
                </Col>
        </>
    )
};

export default StoneName;