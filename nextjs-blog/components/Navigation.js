import Navbar from "react-bootstrap/Navbar";
import NavDropdown from "react-bootstrap/NavDropdown";
import Form from "react-bootstrap/Form";
import FormControl from "react-bootstrap/FormControl";
import Button from "react-bootstrap/Button";
import Nav from "react-bootstrap/Nav";
import Link from "next/link";

const Navigation = () => (
  <Navbar bg="light" expand="lg">
    <Navbar.Brand href="#home">
      <img height="50px" width="50px" src="/images/logo.png"></img>
    </Navbar.Brand>
    <Navbar.Toggle aria-controls="basic-navbar-nav" />
    <Navbar.Collapse id="basic-navbar-nav">
      <Nav className="mr-auto">
        <Link href="/">
          <a>Home</a>
        </Link>
        <Link href="Members">
          <a>Members</a>
        </Link>
        <Link href="SignUp">
          <a>Sign-Up</a>
        </Link>
        <NavDropdown title="Dropdown" id="basic-nav-dropdown">
          <NavDropdown.Item href="#action/3.1">Action</NavDropdown.Item>
          <NavDropdown.Item href="#action/3.2">Another action</NavDropdown.Item>
          <NavDropdown.Item href="#action/3.3">Something</NavDropdown.Item>
          <NavDropdown.Divider />
          <NavDropdown.Item href="#action/3.4">Separated link</NavDropdown.Item>
        </NavDropdown>
      </Nav>
      <Form inline>
        <FormControl type="text" placeholder="Email" className="mr-sm-2" />
        <FormControl
          type="password"
          placeholder="Password"
          className="mr-sm-2"
        />
        <Button variant="outline-success">Log In</Button>
      </Form>
    </Navbar.Collapse>
  </Navbar>
);

export default Navigation;
