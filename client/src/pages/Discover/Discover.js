import React from "react";
import Filter from "../../components/Filter";
import { Container, Col, Row } from "reactstrap";
import StoneName from "../../components/StoneName";
import stones from "../../stones.json";
import StoneModal from "../../components/Modal";
import "./Discover.scss"

class Discover extends React.Component {

    state = {
        stones: [...stones],
        modalOpen: false,
        currentStone: null
    }

    stoneFilter = (section, query) => {
        let stonesCopy = [...stones];
        if (query === "all") {
            this.setState({ stones: stonesCopy})
            console.log(stonesCopy);
        } else {
            let filterStones = stonesCopy.filter(stone => stone[section] === query);
            this.setState({ stones: filterStones })
        }

    }

    toggle = () => {
        this.setState(prevState => ({
            modalOpen: !prevState.modalOpen
        }));
        console.log("modal open is clicked")
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
                            />
                        </Col>
                        <Col sm="8">
                            <Container>
                            <Row>
                            {this.state.stones.map(stone => (
                                <StoneName
                                    name={stone.name}
                                    image={stone.image}
                                    key={stone.id}
                                    stoneModalOpen={(event) => this.stoneModalOpen(event, stone)}
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

            </>
        )
    };
};

export default Discover;