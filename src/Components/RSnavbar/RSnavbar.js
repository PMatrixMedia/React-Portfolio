/* eslint-disable no-unused-vars */
import React from "react";
import "./navbar.css";
import git from './GitHub.png'
import linkedin from './Logoln.png'
import {
  Collapse,
  Navbar,
  NavbarToggler,
  NavbarBrand,
  Nav,
  NavItem,
  NavLink,
  UncontrolledDropdown,
  DropdownToggle,
  DropdownMenu,
  DropdownItem
} from "reactstrap";


export default class RSnavbar extends React.Component {
  constructor(props) {
    super(props);

 this.toggle = this.toggle.bind(this);
    this.state = {
      isOpen: false
    };
  }
  toggle() {
    this.setState({
      isOpen: !this.state.isOpen
    });
  }
  render() {
    return (
      <div className="Navbar">
        <Navbar color="secondary" light expand="md">
          <NavbarBrand href="/">PhaseMatrixMedia</NavbarBrand>
          <NavbarToggler onClick={this.toggle} />
          <Collapse isOpen={this.state.isOpen} navbar>
            <Nav className="ml-auto" navbar>
              <NavItem>
                <NavLink href="/">Home</NavLink>
              </NavItem> 
                <NavLink href="https://github.com/PMatrixMedia"><img src={git}/>
                </NavLink>
              <NavItem>
                <NavLink href="https://codesandbox.io/u/PMatrixMedia">
                  Code Sand Box
                </NavLink>
              </NavItem>
              <NavLink href="www.linkedin.com/in/christopher-faison-1b7b6948"><img src={linkedin}/></NavLink>

              <UncontrolledDropdown nav inNavbar>
                <DropdownToggle nav caret>
                  Projects
                </DropdownToggle>
                <DropdownMenu right>
                  <DropdownItem href="https://phasevr.pmatrix.now.sh/">Phasevr</DropdownItem>
                  <DropdownItem divider />
                  <DropdownItem>Cuber</DropdownItem>
                  <DropdownItem divider />
                  <DropdownItem>JamSesh</DropdownItem>
                </DropdownMenu>
              </UncontrolledDropdown>
            </Nav>
          </Collapse>
        </Navbar>
      </div>
    );
  }
}
