import React from "react";
import { Col } from "reactstrap";
import "./StoneName.scss";


function StoneName() {
    return (
        <> 
                <Col sm={{ size: "auto", offset: 1 }}>
                    <div className="stoneContainer">
                        <h1 className="stoneName">Black Tourmaline</h1>
                    <img className="stoneImage" src="https://via.placeholder.com/150x200"></img>
                    </div>
                    
                </Col>
        </>
    )
};

export default StoneName;