import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import Button from "react-bootstrap/Button";

const Nutrition = () => {
  return (
    <section id="nutrition">
      <Container>
        <Row>
          <Col md="4">
            <img src="/images/Nutrition.jpg" alt={"Nutrition-image"}></img>
          </Col>
          <Col md="4" style={{ width: "auto" }}>
            <h4 id="lbl" style={{ textAlign: "center" }}>
              <b>Nutritional Search</b>
            </h4>
            <h6
              style={{
                display: "flex",
                justifyContent: "center",
                alignItems: "center",
              }}
            >
              Powered by:
              <a
                href="https://www.nutritionix.com/business/api"
                target="_blank"
              >
                Nutritionix API
              </a>
            </h6>
            <div
              style={{
                display: "flex",
                justifyContent: "center",
                alignItems: "center",
              }}
              className="main"
            >
              <br></br>
              <input id="search" type="text" placeholder="Type in a food!" />
              <Button type="submit" variant="success">
                Search
              </Button>
            </div>
          </Col>
          <Col md="4">
            <h4 id="lbl" style={{ textAlign: "center" }}>
              <b>Nutritional Values</b>
            </h4>
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
    </section>
  );
};

export default Nutrition;
