import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";

const WorkoutCard = () => (
  <section id ="workoutcard">
  <Container style={{ backgroundColor: "MintCream"}}>

    <Row>
      <Col md="6">
        <img src="/images/fitness1.jpg"></img>
      </Col>
      <Col md="6">
      <h3>The Workouts</h3>
        <p>
          Checkout our home-based workout database. We provide our members with
          videos showing how to perform each exercise properly. We don't want
          any injuries! We suggest users to perform these based on their fitness
          level. If you feel comfortable with moving up a level, go for it!
        </p>
      </Col>
    </Row>
  </Container>
  </section>
);

export default WorkoutCard;
