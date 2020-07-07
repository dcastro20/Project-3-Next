import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";

const CalendarCard = () => (
  <section id ="calendarcard">
  <Container>
    <h3>User Calendar</h3>
    <Row>
      <Col md="6">
        <p></p>
      </Col>
      <Col md="6">
        <img src="/images/FitnessCalendar.png"></img>
      </Col>
    </Row>
  </Container>
  </section>
);
export default CalendarCard;
