import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import Button from "react-bootstrap/Button";

const Calculator = () => (
  <Container>
    <Row>
      <Col md="4">
        <img
          src="/images/BMI.jpg"
          alt="BMI image"
          height={200}
          width={300}
        ></img>
      </Col>

      <Col md="4" style={{ width: "auto" }}>
        <p id="lbl" style={{ textAlign: "center" }}>
          BMI Calculator
        </p>
        Enter Your Weight(lbs):{" "}
        <input style={{ width: "15%" }} type="text" id="w" />
        <br /> <br />
        Enter Your Height(in.):{" "}
        <input style={{ width: "17%" }} type="text" id="h" />
        <br /> <br />
        <Button id="calculateBMI" onclick="BMI()">
          Calculate BMI
        </Button>
        <br></br>
        <p style={{ fontSize: "larger" }} id="result" />
      </Col>

      <Col md="4">
        <p id="lbl" style={{ textAlign: "center" }}>
          BMI Results
        </p>
        <p>
          If your BMI is less than 18.5, it falls within the underweight range{" "}
          <br /> If your BMI is 18.5 to 25.0, it falls within the normal range{" "}
          <br /> If your BMI is 25.1 to 30.0, it falls within the overweight
          range <br /> If your BMI is 30.1 or higher, it falls within the obese
          range{" "}
        </p>
      </Col>
    </Row>
  </Container>
);

export default Calculator;
