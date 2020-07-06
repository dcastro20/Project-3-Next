import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import Button from "react-bootstrap/Button";

const Nutrition = () => {
  return (
    <Container>
      <Row>
        <Col md="4">
          <img src="/images/Nutrition.jpg" alt={"Nutrition-image"}></img>
        </Col>
        <Col md="4" style={{ width: "auto" }}>
          <p id="lbl" style={{ textAlign: "center" }}>
            Nutrition Search
          </p>
          <div
            style={{
              display: "flex",
              justifyContent: "center",
              alignItems: "center",
            }}
            className="main"
          >
            <input id="search" type="text" placeholder="Type in a food!" />
            <Button type="submit" variant="success">
              Search
            </Button>
          </div>
        </Col>
        <Col md="4">
          <p id="lbl" style={{ textAlign: "center" }}>
            Nutritional Values
          </p>
          <div id="monitor-data" className="value-container">
            <p className="health-data">
              <span id="calories" />{" "}
            </p>
            <p className="health-data">
              <span id="total-fats" />
            </p>
            <p className="health-data">
              <span id="sodium" />
            </p>
            <p className="health-data">
              <span id="sugars" />
            </p>
            <p className="health-data">
              <span id="protein" />
            </p>
            <p className="health-data">
              <span id="serving-size" />
            </p>
          </div>
        </Col>
      </Row>
    </Container>
  );
};

export default Nutrition;
