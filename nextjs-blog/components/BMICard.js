import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";

const BMICard = () => (
  <Container>
    <h3>BMI Calculator</h3>
    <Row>
      <Col md="6">
        <p>
          Our users have access to our body mass index calculator. BMI
          calculates a person's body fat percentage. Type in your height and
          weight and see where you stand!
        </p>
      </Col>
      <Col md="6">
        <img src="/images/BMI.jpg"></img>
      </Col>
    </Row>
  </Container>
);
export default BMICard;
