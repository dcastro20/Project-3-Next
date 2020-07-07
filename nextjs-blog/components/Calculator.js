import React, { Component } from "react";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import Button from "react-bootstrap/Button";

// Back-End ---------------------------------------------------------
class Calculator extends Component {
  state = {
    weight: "",
    height: "",
    bmi: "",
  };
  handleChange = (event) => {
    console.log("handleChange");
    let value = event.currentTarget.value;
    let name = event.currentTarget.name;

    this.setState({
      [name]: parseInt(value),
    });
    console.log(this.state);
  };

  calculateBMI() {
    console.log("calculateBMI");
    let result = (
      (this.state.weight / this.state.height / this.state.height) *
      703
    ).toFixed(2);
    console.log("result", result);
    this.setState({
      bmi: result.toString(),
    });
    console.log("this.state.bmi:", this.state.bmi);
  }

  handleSubmit = (event) => {
    event.preventDefault();
    console.log("handleSubmit");
    this.calculateBMI();
  };

  // Front-End -----------------------------------------------------
  render() {
    return (
      <div className="search-bar ui segment">
        <section id="calculator">
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
                <p id="lbl" style={{ textAlign: "center", size: "largest" }}>
                  <b>BMI Calculator</b>
                </p>
                <div
                  style={{
                    display: "flex",
                    justifyContent: "center",
                    alignItems: "center",
                  }}
                ></div>
                <form onSubmit={this.handleSubmit} className="ui form">
                  <div className="field">
                    <b>Enter Your Weight(lbs):</b>{" "}
                    <input
                      onChange={this.handleChange}
                      name="weight"
                      type="text"
                      value={this.state.weight}
                    />
                    <br /> <br />
                    <b>Enter Your Height(in.):</b>{" "}
                    <input
                      onChange={this.handleChange}
                      name="height"
                      type="text"
                      value={this.state.height}
                    />
                    <br /> <br />
                  </div>
                  <h2>{this.state.bmi}</h2>
                  <div
                    style={{
                      display: "flex",
                      justifyContent: "center",
                      alignItems: "center",
                    }}
                  >
                    <Button type="submit" variant="success">
                      Calculate BMI
                    </Button>
                  </div>
                </form>
              </Col>
              <Col md="4">
                <p id="lbl" style={{ textAlign: "center" }}></p>
                <p>
                  If your BMI is <b>less than 18.5</b>, it falls within the{" "}
                  <b>underweight range</b> <br /> If your BMI is{" "}
                  <b>18.5 to 25.0</b>, it falls within the <b>normal range</b>{" "}
                  <br /> If your BMI is <b>25.1 to 30.0</b>, it falls within the
                  <b>overweight range</b>
                  <br /> If your BMI is <b>30.1 or higher</b>, it falls within
                  the
                  <b>obese range</b>{" "}
                </p>
              </Col>
            </Row>
          </Container>
        </section>
      </div>
    );
  }
}
export default Calculator;
