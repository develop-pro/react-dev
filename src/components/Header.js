import React from 'react';
import NavigationBar from './NavigationBar';
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
  DropdownItem,
  Container,
  Row,
  Col,
  Badge
} from 'reactstrap';

import '../assets/stylesheets/components/Header.scss';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'

import logo1 from '../assets/images/logo1.png';
import iconAppleStore from '../assets/images/header_apple.png';
import iconGooglePlay from '../assets/images/header_play.png';

class Header extends React.Component {
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
      <React.Fragment>
        <Navbar light expand="md" className="navbar-first">
          <Container>
            <NavbarBrand href="/"><img src={logo1} alt="Ownage Pranks" /></NavbarBrand>
            <NavbarToggler onClick={this.toggle} />
            <Collapse isOpen={this.state.isOpen} navbar>
              <Nav className="ml-auto" navbar>
                <NavItem className="store-link">
                  <NavLink href="#"><img src={iconAppleStore} alt="Apple Store" /></NavLink>
                </NavItem>
                <NavItem className="store-link">
                  <NavLink href="#"><img src={iconGooglePlay} alt="Google Play" /></NavLink>
                </NavItem>
                <NavItem>
                  <NavLink href="#" className="text-secondary">Log In</NavLink>
                </NavItem>
                <NavItem>
                  <NavLink href="#" className="text-primary">Sign Up</NavLink>
                </NavItem>
                <UncontrolledDropdown nav inNavbar>
                  <DropdownToggle nav caret className="btn btn-secondary text-white btn-cart">
                    <FontAwesomeIcon icon="shopping-cart" />
                    <sup><Badge color="primary" pill className="text-white">0</Badge></sup>
                    Cart
                  </DropdownToggle>
                  <DropdownMenu right>
                    <DropdownItem>
                      - no content yet -
                    </DropdownItem>
                  </DropdownMenu>
                </UncontrolledDropdown>
              </Nav>
            </Collapse>
          </Container>
        </Navbar>
        <Navbar light expand="md" className="navbar-second">
          <Container>
            <NavbarToggler onClick={this.toggle} />
            <Collapse isOpen={this.state.isOpen} navbar>
              <Container>
                <Row>
                  <Col className="pl-0">
                    <Nav className="justify-content-between" navbar>
                      <NavItem>
                        <NavLink href="#" className="pl-0">Prank Call Videos</NavLink>
                      </NavItem>
                      <NavItem>
                        <NavLink href="#">Request A Prank</NavLink>
                      </NavItem>
                      <NavItem>
                        <NavLink href="#">Store</NavLink>
                      </NavItem>
                      <NavItem>
                        <NavLink href="#">Apps</NavLink>
                      </NavItem>
                      <NavItem>
                        <NavLink href="#">Blog</NavLink>
                      </NavItem>
                    </Nav>
                  </Col>
                  <Col xs="auto" className="pr-0">
                    <form className="form-inline form-search">
                      <div className="input-group">
                        <input type="search" className="form-control" placeholder="Search" aria-label="Search" />
                        <div className="input-group-append">
                          <button className="btn btn-outline-primary" type="submit">
                            <FontAwesomeIcon icon="search" />
                          </button>
                        </div>
                      </div>
                    </form>
                  </Col>
                </Row>
              </Container>
            </Collapse>
          </Container>
        </Navbar>
      </React.Fragment>
    );
  }
}

export default Header;
