import Jumbotron from "react-bootstrap/Jumbotron";
import Container from "react-bootstrap/Container";

const Jumbo = () => (
  <Jumbotron fluid>
    <Container>
      <h1>Plan-it-Fitness</h1>
      <img
        src="/images/fitness2.jpg"
        style={{
          width: "auto",
          height: "auto",
          marginLeft: "10px",
        }}
        alt="Logo"
      />
    </Container>
  </Jumbotron>
);

export default Jumbo;
