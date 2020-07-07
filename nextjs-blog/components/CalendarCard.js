import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";

const CalendarCard = () => (
  <section id="calendarcard">
    <Container style={{ backgroundColor: "LightCyan"}}>
      <Row>
        <Col md="6">
        <h3>User Calendar</h3>
          <p>
            Create your own calendar to set workout plans and meal plans so its
            easier for you to stick to your goals. You'll be amazed with your
            progress when you stick to a formula for 30 days. Don't forget to
            rest!
          </p>
        </Col>
        <Col md="6">
          <img src="/images/CalendarImg.jpg"></img>
        </Col>
      </Row>
    </Container>
  </section>
);
export default CalendarCard;
