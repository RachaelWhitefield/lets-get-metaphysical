import React from 'react';
import { Button, Modal, ModalHeader, ModalBody, ModalFooter } from 'reactstrap';
import StoneName from "../StoneName";
import API from "../../utils/API";
import "./ModalStyle.scss";

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
        favorite_imageText: this.props.stone.imageText
      }).then(res => console.log('success', res.data))
      .catch(err => console.log(err));
      
    
};  


  render() {
    return (
      <div>
          {this.props.stone ? (
        <>
        <StoneName onClick={this.props.toggle} />
        <Modal isOpen={this.props.modalOpen} toggle={this.props.toggle} className={this.props.className} centered >
          <ModalHeader toggle={this.toggle} cssModule={{'modal-title': 'w-100 text-center'}}><img src={this.props.stone.image} alt={this.props.stone.name} className="modalStone" />{this.props.stone.name}</ModalHeader>
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
            <Button color="primary" className="faveButton" onClick={this.handleClick}>{this.state.favText}</Button>
          </ModalFooter>
        </Modal>
        </>
          ) : null}
      </div>
    );
  }
}


export default StoneModal;