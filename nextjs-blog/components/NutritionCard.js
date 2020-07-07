import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";

const NutritionCard = () => (
  <section id ="nutritioncard">
  <Container>
    <Row>
      <Col md="6">
        <img src="/images/Nutrition.jpg"></img>
      </Col>
      <Col md="6">
        <h3>Nutrition Database</h3>
        <p>
          Type in a certain type of food like "pasta" "cheeseburger" or "salmon"
          and this feature will give you exactly what nutrients those types of
          food give you.
        </p>
      </Col>
    </Row>
  </Container>
  </section>
);

export default NutritionCard;
