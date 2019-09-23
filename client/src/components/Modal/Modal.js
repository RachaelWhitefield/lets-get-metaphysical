import React from 'react';
import { Button, Modal, ModalHeader, ModalBody, ModalFooter } from 'reactstrap';
import StoneName from "../StoneName";
import API from "../../utils/API";

class StoneModal extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      modalOpen: false,
      favText: "Add to Favorites"

    };
 
  }

  handleClick = () => {

    let newText = this.state.favText === "Add to Favorites" ? "Saved to Favorites" : "Add to Favorites"
    this.setState({favText: newText})
   
      API.saveFav({
        favorite_name: this.props.stone.name,
        favorite_color: this.props.stone.color,
        favorite_chakra: this.props.stone.chakra,
        favorite_metaProps: this.props.stone.properties,
        favorite_image: this.props.stone.image,
        }).then(res => console.log('success', res.data))
        .catch(err => console.log(err));
      
    
};  


  render() {
    return (
      <div>
          {this.props.stone ? (
        <>
        <StoneName onClick={this.props.toggle} />
        <Modal isOpen={this.props.modalOpen} toggle={this.props.toggle} className={this.props.className}>
          <ModalHeader toggle={this.toggle}>{this.props.stone.name}</ModalHeader>
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
            <Button color="primary" onClick={this.handleClick}>{this.state.favText}</Button>{' '}
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