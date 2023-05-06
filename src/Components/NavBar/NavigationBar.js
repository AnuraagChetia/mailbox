import { Container, Nav, Navbar, NavbarBrand } from "react-bootstrap";

const NavigationBar = (props) => {
  return (
    <Navbar bg={"primary"} variant="dark">
      <Container fluid>
        <NavbarBrand>Expense Tracker</NavbarBrand>
        <Nav>
          <Nav.Link to="/home">Home</Nav.Link>
          <Nav.Link>Product</Nav.Link>
          <Nav.Link>About Us</Nav.Link>
          <Nav.Link href="/">Logout</Nav.Link>
        </Nav>
      </Container>
    </Navbar>
  );
};
export default NavigationBar;
