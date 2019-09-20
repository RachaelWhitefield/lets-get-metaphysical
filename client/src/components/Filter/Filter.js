import React from "react";
import {Dropdown, DropdownToggle, DropdownMenu, DropdownItem} from "reactstrap";
import "./Filter.scss";

class Filter extends React.Component {
  constructor(props) {
    super(props);

    this.toggle = this.toggle.bind(this);
    this.state = {
      dropdownOpen: false
    };
  }

  toggle() {
    this.setState(prevState => ({
      dropdownOpen: !prevState.dropdownOpen
    }));
  }

  render() {
    return (
      <Dropdown isOpen={this.state.dropdownOpen} toggle={this.toggle}>
        <DropdownToggle caret>Filter Stones</DropdownToggle>
        <DropdownMenu>
          <DropdownItem header>Filter By Chakra</DropdownItem>
          <DropdownItem>Root</DropdownItem>
          <DropdownItem>Sacral</DropdownItem>
          <DropdownItem>Solar Plexus</DropdownItem>
          <DropdownItem>Heart</DropdownItem>
          <DropdownItem>Throat</DropdownItem>
          <DropdownItem>Third Eye</DropdownItem>
          <DropdownItem>Crown</DropdownItem>
          <DropdownItem header>Filter By Color</DropdownItem>
          <DropdownItem>Gray</DropdownItem>
          <DropdownItem>Black</DropdownItem>
          <DropdownItem>Red</DropdownItem>
          <DropdownItem>Orange</DropdownItem>
          <DropdownItem>Yellow</DropdownItem>
          <DropdownItem>Green</DropdownItem>
          <DropdownItem>Pink</DropdownItem>
          <DropdownItem>Blue</DropdownItem>
          <DropdownItem>Purple</DropdownItem>
          <DropdownItem>White</DropdownItem>
          <DropdownItem divider />
          <DropdownItem>See All</DropdownItem>
        </DropdownMenu>
      </Dropdown>
    );
  }
}

export default Filter;
