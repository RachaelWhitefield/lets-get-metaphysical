import React from "react";
import Filter from "../../components/Filter";
import { Container, Col, Row } from "reactstrap";
import StoneName from "../../components/StoneName";
// import stones from "../../stones.json";
import StoneModal from "../../components/Modal";
import { getGemstones } from "../../utils/GraphQLAPI";

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

    const stones = []
    allStones.forEach(stone => {

        if(stone.gemstones.length > 0){
          stone.gemstones.forEach(gemstone => {
            stones.push({
                id: stone.id, 
                chakra: stone.name, 
                name: gemstone.name, 
                properties: gemstone.metaProps, 
                color: gemstone.color, 
                image: gemstone.image
              })
            })
        }

        
    });
    console.log('This is all stones', allStones);
    this.setState({ stones });
    console.log({stones})
  }

  stoneFilter = (section, query) => {
    let stonesCopy = [...this.state.stones];
    console.log(stonesCopy)
    console.log(section, query);
    let filterStones = stonesCopy.filter(stone => stone[section] === query);
    console.log(filterStones);

    this.setState({ stones: filterStones });
  };

  toggle = () => {
    this.setState(prevState => ({
      modalOpen: !prevState.modalOpen
    }));
    console.log("modal open is clicked");
  };

  stoneModalOpen = (event, stone) => {
    event.preventDefault();
    this.setState({ modalOpen: true, currentStone: stone });
  };

  render() {
    return (
      <>
        <Container fluid>
          <Row>
            <Col sm={{ size: "auto", offset: 1 }}>
              <h1>
                Get Totally
                <br />
                STONED
              </h1>
            </Col>

            <Col sm="3">
              <Filter sortingFunction={this.stoneFilter} />
            </Col>
          </Row>
          <Row>
            {this.state.stones.map(stone => (
              <StoneName
                name={stone.name}
                image={stone.image}
                key={stone.id}
                stoneModalOpen={event => this.stoneModalOpen(event, stone)}
                toggle={this.toggle}
              />
            ))}
            <StoneModal
              modalOpen={this.state.modalOpen}
              toggle={this.toggle}
              isOpen={this.state.modalOpen}
              stone={this.state.currentStone}
            />
          </Row>
        </Container>
      </>
    );
  }
}

export default Discover;
