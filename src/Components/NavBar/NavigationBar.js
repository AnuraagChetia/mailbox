import { Container, Nav, Navbar, NavbarBrand } from "react-bootstrap";
import { NavLink } from "react-router-dom";

const NavigationBar = (props) => {
  return (
    <Navbar bg={"dark"} variant="dark">
      <Container fluid>
        <NavbarBrand>Mailbox Client</NavbarBrand>
        <Nav>
          <NavLink className="m-2" to='/home'>Compose</NavLink>
          <NavLink className="m-2" to="/inbox">
            Inbox
          </NavLink>
          <NavLink className="m-2">Sent</NavLink>
        </Nav>
      </Container>
    </Navbar>
  );
};
export default NavigationBar;
