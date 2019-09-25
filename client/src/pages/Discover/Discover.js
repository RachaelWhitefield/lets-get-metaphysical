import React from "react";
import Filter from "../../components/Filter";
import { Container, Col, Row } from "reactstrap";
import StoneName from "../../components/StoneName";
// import stones from "../../stones.json";
import StoneModal from "../../components/Modal";
import { getGemstones } from "../../utils/GraphQLAPI";
import "./Discover.scss";

class Discover extends React.Component {
  constructor(props) {
    //   console.log(props)
    super(props);
    this.state = {
      stones: [],
      modalOpen: false,
      currentStone: null
    };
  }

  async componentDidMount() {
    const allStones = await getGemstones();

    const stones = [];
    allStones.forEach(stone => {
      if (stone.gemstones.length > 0) {
        stone.gemstones.forEach(gemstone => {
          stones.push({
            id: stone.id,
            chakra: stone.name,
            name: gemstone.name,
            properties: gemstone.metaProps,
            color: gemstone.color,
            image: gemstone.image,
            imageText: gemstone.imageText
          });
        });
      }
    });
    // console.log('This is all stones', allStones);
    this.setState({ stones });
    // console.log({stones})
  }

  stoneFilter = (section, query) => {
    let stonesCopy = [...this.state.stones];
    console.log(stonesCopy)
    
    // console.log(section, String(query));
    let filterStones = stonesCopy.filter(stone => stone[section].toLowerCase() === query);
    // console.log(filterStones);

    this.setState({ stones: filterStones });
  };

  toggle = () => {
    this.setState(prevState => ({
      modalOpen: !prevState.modalOpen
    }));
    // console.log("modal open is clicked");
  };

  stoneModalOpen = (event, stone) => {
    event.preventDefault();
    this.setState({ modalOpen: true, currentStone: stone });
  };

  render() {
    return (
      <Container fluid>
                            
        <Row>
                                  
          <Col sm={{ size: 3, offset: 1 }}>
                                        
            <h1 className="pageTitle">
                                              GET TOTALLY
              <br />
                                              
              <span className="header">STONED</span>
                                          
            </h1>
                                        
            <Filter sortingFunction={this.stoneFilter} />
                                    
          </Col>
                                  
          <Col sm="8">
                                        
            <Container>
                                          
              <Row>
                                            
                {this.state.stones.map(stone => (
                  <StoneName key={stone.name}
                    name={stone.name}
                    image={stone.imageText}
                    stoneModalOpen={event => this.stoneModalOpen(event, stone)}
                    toggle={this.toggle}
                    />
                ))}
                                            
                <StoneModal
                  modalOpen={this.state.modalOpen}
                  toggle={this.toggle}
                  isOpen={this.state.modalOpen}
                  stone={this.state.currentStone}
                  className="centered"
                />
                                            
              </Row>
                                          
            </Container>
                                    
          </Col>
                              
        </Row>
                        
      </Container>
    );
  }
}
export default Discover;
