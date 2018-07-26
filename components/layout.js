import Head                         from 'next/head'
import Link                         from 'next/link'
import bts                          from '../public/css/bootstrap.min.css'
import {Container, Row, Col, Card,
        CardImg, CardText, CardBody,
        CardTitle, CardSubtitle, Button,
        Nav, NavItem, Form, NavLink, Collapse,
        Navbar, NavbarToggler, NavbarBrand, Modal,
        ModalHeader, ModalBody,ModalFooter,
        ListGroup, ListGroupItem,
  UncontrolledDropdown,
  DropdownToggle,
  DropdownMenu,
  DropdownItem }   from 'reactstrap'

class Layoutz extends React.Component {
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
          <header>
            <div>
              <Navbar color="light" light expand="md">
                <NavbarBrand href="/">Oende's To-do List</NavbarBrand>
                <NavbarToggler onClick={this.toggle} />
                <Collapse isOpen={this.state.isOpen} navbar>
                  <Nav className="ml-auto" navbar>
                    <NavItem>
                      <NavLink href="/">Home</NavLink>
                    </NavItem>
                    <NavItem>
                      <NavLink href="https://github.com/permanar/todolist">GitHub</NavLink>
                    </NavItem>
                    <UncontrolledDropdown nav inNavbar>
                      <DropdownToggle nav caret>
                        Options
                      </DropdownToggle>
                      <DropdownMenu right>
                        <DropdownItem>
                          Log In
                        </DropdownItem>
                        <DropdownItem>
                          Register
                        </DropdownItem>
                        <DropdownItem divider />
                        <DropdownItem>
                          Reset
                        </DropdownItem>
                      </DropdownMenu>
                    </UncontrolledDropdown>
                  </Nav>
                </Collapse>
              </Navbar>
            </div>
          </header>
      );
    }
}

const Layout = new Layoutz()

export default Layout
