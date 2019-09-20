import React from 'react';
import { Button, Modal, ModalHeader, ModalBody, ModalFooter } from 'reactstrap';

class Modal extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      modal: false,
      isFavorite: false
      //false is add to faves and true is remove from favorites
    };

    this.toggle = this.toggle.bind(this);
  }

  toggle() {
    this.setState(prevState => ({
      modal: !prevState.modal
    }));
  }



  render() {
    return (
      <div>
        <StoneName onClick={this.toggle} />
        <Modal isOpen={this.state.modal} toggle={this.toggle} className={this.props.className}>
          <ModalHeader toggle={this.toggle}>Modal title</ModalHeader>
          <ModalBody>
            <h4>Chakras</h4>
            <ul>
                <li></li>
            </ul>
            <span className="space" />
            <h4>Color</h4>
            <ul>
                <li></li>
            </ul>
            <span className="space" />
            <h4>Properties</h4>
            <ul>
                <li></li>
            </ul>
          </ModalBody>
          <ModalFooter>
            <Button color="primary" onClick={this.toggle}>Add to favorites</Button>{' '}
            {/* <Button color="secondary" onClick={this.toggle}>Cancel</Button> */}
          </ModalFooter>
        </Modal>
      </div>
    );
  }
}

export default Modal;