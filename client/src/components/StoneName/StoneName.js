import React from "react";
import { Col } from "reactstrap";
import "./StoneName.scss";



function StoneName(props) {
    return (
        <> 
                <Col sm="4" onClick={props.stoneModalOpen}>
                    <img src={props.image} alt={props.name} className="stone" />
                </Col>
        </>
    )
};

export default StoneName;