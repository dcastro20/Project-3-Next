import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";

const BMICard = () => (
  <section id ="bmicard">
  <Container style={{ backgroundColor: "LightCyan"}}>
    <Row>
      <Col md="6">
        <h3>BMI Calculator</h3>
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
  </section>
);
export default BMICard;
