import React from 'react';
import { Button, Modal, ModalHeader, ModalBody, ModalFooter } from 'reactstrap';
import StoneName from "../StoneName";
import "./Modal.scss";

class StoneModal extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      modalOpen: false,
      isFavorite: false
      //false is add to faves and true is remove from favorites
    };


  }



  render() {
    return (
      <div>
          {this.props.stone ? (
        <>
        <StoneName onClick={this.props.toggle} />
        <Modal isOpen={this.props.modalOpen} toggle={this.props.toggle} className={this.props.className} centered >
          <ModalHeader toggle={this.toggle} cssModule={{'modal-title': 'w-100 text-center'}}><img src={this.props.stone.image} className="modalStone" />{this.props.stone.name}</ModalHeader>
          <ModalBody cssModule={{'modal-text': 'w-100 text-center'}}>
            <h6>Chakras</h6>
            <ul>
                <li>{this.props.stone.chakra}</li>
            </ul>
            <span className="space" />
            <h6>Color</h6>
            <ul>
                <li>{this.props.stone.color}</li>
            </ul>
            <span className="space" />
            <h6>Properties</h6>
            <ul>
                {this.props.stone.properties}
                <li></li>
            </ul>
          </ModalBody>
          <ModalFooter>
            <Button className="faveButton">Add to favorites</Button>
            {/* <Button color="secondary" onClick={this.toggle}>Cancel</Button> */}
          </ModalFooter>
        </Modal>
        </>
          ) : null}
      </div>
    );
  }
}

export default StoneModal;