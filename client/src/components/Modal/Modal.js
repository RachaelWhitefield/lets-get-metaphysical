import React from 'react';
import { Button, Modal, ModalHeader, ModalBody, ModalFooter } from 'reactstrap';
import StoneName from "../StoneName";

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
        <Modal isOpen={this.props.modalOpen} toggle={this.props.toggle} className={this.props.className}>
          <ModalHeader toggle={this.toggle}>Modal title</ModalHeader>
          <ModalBody>
            <h1>{this.props.stone.name}</h1>
            <h4>Chakras</h4>
            <ul>
                <li>{this.props.stone.chakra}</li>
            </ul>
            <span className="space" />
            <h4>Color</h4>
            <ul>
                <li>{this.props.stone.color}</li>
            </ul>
            <span className="space" />
            <h4>Properties</h4>
            <ul>
                {this.props.stone.properties}
                <li></li>
            </ul>
          </ModalBody>
          <ModalFooter>
            <Button color="primary">Add to favorites</Button>{' '}
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