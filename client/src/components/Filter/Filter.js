import React from "react";
import {Dropdown, DropdownToggle, DropdownMenu, DropdownItem} from "reactstrap";
import "./Filter.scss";

class Filter extends React.Component {
  constructor(props) {
    super(props);

    this.toggle = this.toggle.bind(this);
    this.filterClick = this.filterClick.bind(this);

    this.state = {
      dropdownOpen: false
    };
  }

  toggle() {
    this.setState(prevState => ({
      dropdownOpen: !prevState.dropdownOpen
    }));
  }

  filterClick= (event) => {
    // console.log(event.target.value)
    this.props.sortingFunction(event.target.dataset.section, event.target.value)
  }

  render() {
    return (
      <Dropdown isOpen={this.state.dropdownOpen} toggle={this.toggle} direction="down" >
        <DropdownToggle caret color={"#1b2a49"} className="filterButton">Filter Stones</DropdownToggle>
        <DropdownMenu>
          <DropdownItem header>CHAKRA</DropdownItem>
          <DropdownItem onClick={this.filterClick} value="root" data-section="chakra">Root</DropdownItem>
          <DropdownItem onClick={this.filterClick} value="sacral" data-section="chakra">Sacral</DropdownItem>
          <DropdownItem onClick={this.filterClick} value="solar plexus" data-section="chakra">Solar Plexus</DropdownItem>
          <DropdownItem onClick={this.filterClick} value="heart" data-section="chakra">Heart</DropdownItem>
          <DropdownItem onClick={this.filterClick} value="throat" data-section="chakra">Throat</DropdownItem>
          <DropdownItem onClick={this.filterClick} value="third eye" data-section="chakra">Third Eye</DropdownItem>
          <DropdownItem onClick={this.filterClick} value="crown" data-section="chakra">Crown</DropdownItem>
          <DropdownItem divider />
          <DropdownItem header>COLOR</DropdownItem>
          <DropdownItem onClick={this.filterClick} value="gray" data-section="color">Gray</DropdownItem>
          <DropdownItem onClick={this.filterClick} value="black" data-section="color">Black</DropdownItem>
          <DropdownItem onClick={this.filterClick} value="red" data-section="color">Red</DropdownItem>
          <DropdownItem onClick={this.filterClick} value="orange" data-section="color">Orange</DropdownItem>
          <DropdownItem onClick={this.filterClick} value="yellow" data-section="color">Yellow</DropdownItem>
          <DropdownItem onClick={this.filterClick} value="green" data-section="color">Green</DropdownItem>
          <DropdownItem onClick={this.filterClick} value="pink" data-section="color">Pink</DropdownItem>
          <DropdownItem onClick={this.filterClick} value="blue" data-section="color">Blue</DropdownItem>
          <DropdownItem onClick={this.filterClick} value="purple" data-section="color">Purple</DropdownItem>
          <DropdownItem onClick={this.filterClick} value="white" data-section="color">White</DropdownItem>
          <DropdownItem divider />
          <DropdownItem onClick={this.filterClick} value="all">See All</DropdownItem>
        </DropdownMenu>
      </Dropdown>
    );
  }
}

export default Filter;
