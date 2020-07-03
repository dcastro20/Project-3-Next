import Navbar from "react-bootstrap/Navbar";
import Form from "react-bootstrap/Form";
import FormControl from "react-bootstrap/FormControl";
import Button from "react-bootstrap/Button";
import Nav from "react-bootstrap/Nav";
import Link from "next/link";

const Navigation = () => (
  <Navbar bg="dark" expand="lg">
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
      </Nav>
      <Form inline>
        <FormControl type="text" placeholder="Email" className="mr-sm-1" />
        <FormControl
          type="password"
          placeholder="Password"
          className="mr-sm-1"
        />
        <Button variant="success">Log In</Button>
      </Form>
    </Navbar.Collapse>
  </Navbar>
);

export default Navigation;
