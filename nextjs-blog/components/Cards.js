import CardGroup from "react-bootstrap/CardGroup";
import Card from "react-bootstrap/Card";

const Cards = () => (
  <CardGroup>
    <Card>
      <Card.Img variant="top" src="/images/fitness1.jpg" height="330" />
      <Card.Body>
        <Card.Title>Workouts</Card.Title>
        <Card.Text>
          This is a wider card with supporting text below as a natural lead-in
          to additional content. This content is a little bit longer.
        </Card.Text>
      </Card.Body>
    </Card>
    <Card>
      <Card.Img variant="top" src="/images/BMI.jpg" height="330" />
      <Card.Body>
        <Card.Title>BMI Calculator</Card.Title>
        <Card.Text>
          This card has supporting text below as a natural lead-in to additional
          content.{" "}
        </Card.Text>
      </Card.Body>
    </Card>
    <Card>
      <Card.Img variant="top" src="/images/Nutrition.jpg" heigth="330" />
      <Card.Body>
        <Card.Title>Nutrition Facts</Card.Title>
        <Card.Text>
          This is a wider card with supporting text below as a natural lead-in
          to additional content. This card has even longer content than the
          first to show that equal height action.
        </Card.Text>
      </Card.Body>
    </Card>
  </CardGroup>
);

export default Cards;
