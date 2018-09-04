import React from "react";
import "./navbar.css";
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
                <NavLink href="/components/">Home</NavLink>
              </NavItem> 
                <NavbarBrand a class="navbar-brand" href="https://github.com/PMatrixMedia"><img src="../../src/Images/GitHub-Mark.png" alt=""></img>
                </NavbarBrand>
              <NavItem>
                <NavLink href="https://codesandbox.io/u/PMatrixMedia">
                  Code_SandBox
                </NavLink>
              </NavItem>

              <UncontrolledDropdown nav inNavbar>
                <DropdownToggle nav caret>
                  Projects
                </DropdownToggle>
                <DropdownMenu right>
                  <DropdownItem>Stream Lyfe</DropdownItem>
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
