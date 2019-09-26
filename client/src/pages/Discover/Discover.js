import React from 'react';
import Filter from "../../components/Filter";
import { Container, Col, Row } from "reactstrap";
import StoneName from "../../components/StoneName";
import StoneModal from "../../components/Modal";
import { getGemstones } from "../../utils/GraphQLAPI";
import "./Discover.scss"

class Discover extends React.Component {
  
 state = {
         stones: [],
         modalOpen: false,
         currentStone: null,
         filteredStones: [],
         availableColors: []
     }

     async componentDidMount() {
        this.getApiGemstones()
      }

      async getApiGemstones() {
        const allStones = await getGemstones();
    
        const availableColors = [];
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
              if (availableColors.includes(gemstone.color)) {
            } else {
                availableColors.push(gemstone.color);
              };
            });
          }
        });
        this.setState({ stones, availableColors });
      }

     stoneFilter = (section, query) => {
         let stonesCopy = [...this.state.stones];
         if (query === "all") {
            // this.getApiGemstones()
            console.log(this.state.stones)
         } else {
             this.setState({ filteredStones: [] }, () => {
                 let filterStones = stonesCopy.filter(stone => stone[section].toLowerCase() === query);
                 this.setState({ filteredStones: filterStones })
             })
         }

     }

     toggle = () => {
        this.setState(prevState => ({
            modalOpen: !prevState.modalOpen
        }));
        // console.log("modal open is clicked")
    }

    stoneModalOpen = (event, stone) => {
        event.preventDefault();
        this.setState({ modalOpen: true, currentStone: stone });

    }

    render() {
        return (
            <>
                <Container fluid>
                    <Row>
                        <Col sm={{ size: 3, offset: 1 }}>
                            <h1 className="pageTitle">
                                GET TOTALLY<br />
                                <span className="header">STONED</span>
                            </h1>
                            <Filter
                                sortingFunction={this.stoneFilter}
                                availableColors={this.state.availableColors}
                            />
                        </Col>
                        <Col sm="8">
                            <Container>
                            <Row>
                            {this.state.filteredStones.length > 0
                                ? (this.state.filteredStones.map(stone => (
                                    <StoneName key={stone.name}
                                        name={stone.name}
                                        image={stone.imageText}
                                        stoneModalOpen={(event) => this.stoneModalOpen(event, stone)}
                                        toggle={this.toggle}
                                    />
                                ))
                               ) : (this.state.stones.map(stone => (
                                    <StoneName key={stone.name}
                                        name={stone.name}
                                        image={stone.imageText}
                                        stoneModalOpen={(event) => this.stoneModalOpen(event, stone)}
                                        toggle={this.toggle}
                                    />
                                ))
                                ) }
                            {/* {this.state.stones.map(stone => (
                                <StoneName key={stone.name}
                                    name={stone.name}
                                    image={stone.imageText}
                                    stoneModalOpen={(event) => this.stoneModalOpen(event, stone)}
                                    toggle={this.toggle}
                                />
                            ))} */}
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

                </>
         )
     };
 };

export default Discover; 
