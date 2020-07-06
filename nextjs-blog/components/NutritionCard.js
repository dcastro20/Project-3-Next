import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";

const NutritionCard = () => (
  <Container>
    <h3>Nutrition Database</h3>
    <Row>
      <Col md="6">
        <img src="/images/Nutrition.jpg"></img>
      </Col>
      <Col md="6">
        <p>
          Type in a certain type of food like "pasta" "cheeseburger" or "salmon"
          and this feature will give you exactly what nutrients those types of
          food give you.
        </p>
      </Col>
    </Row>
  </Container>
);

export default NutritionCard;
