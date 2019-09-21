import React from "react";
import Filter from "../../components/Filter";
import { Container, Col, Row } from "reactstrap";
import StoneName from "../../components/StoneName";
import stones from "../../stones.json";
import StoneModal from "../../components/Modal"

class Discover extends React.Component {

    state = {
        stones: [...stones],
        modalOpen: false
    }

    stoneFilter = (section, query) => {
        let stonesCopy = [...stones];
        console.log(section, query);
        let filterStones = stonesCopy.filter(stone => stone[section] == query);
        console.log(filterStones);

        this.setState({stones: filterStones})
    }


    toggle = () => {
        this.setState(prevState => ({
          modalOpen: !prevState.modalOpen
        }));
        console.log("modal open is clicked")
      }

    stoneModalOpen = (event) => {
        event.preventDefault();
        this.setState({modalOpen: true});
        console.log("fucking open")
    }

    render() {
        return (
            <>
                <Container fluid>
                    <Row>
                        <Col sm={{ size: "auto", offset: 1 }}>
                            <h1>
                                Get Totally<br />
                                STONED
                   </h1>
                        </Col>

                        <Col sm="3">
                            <Filter
                                sortingFunction={this.stoneFilter}
                            />
                        </Col>
                    </Row>
                    <Row>
                        {this.state.stones.map(stone => (
                            <StoneName
                                name={stone.name}
                                image={stone.image}
                                key={stone.id}
                                onClick={this.stoneModalOpen}
                                toggle={this.toggle}
                            />
                        ))}
                        <StoneModal 
                        modalOpen={this.state.modalOpen}
                        toggle={this.toggle}
                        isOpen={this.state.modalOpen}
                        />
                    </Row>
                </Container>

            </>
        )
    };
};

export default Discover;