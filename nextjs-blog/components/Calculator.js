import React, { Component } from "react";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import Button from "react-bootstrap/Button";


class Calculator extends Component {
  state = {
    weight: "",
    height: "",
    bmi: ''
  };
  handleChange = (event) => {
    console.log("handleChange");
    let value = event.currentTarget.value
    let name = event.currentTarget.name

    this.setState({
      [name]: parseInt(value)
    });
    console.log(this.state);
  };

  calculateBMI() {
    console.log('calculateBMI');
    let result = ((this.state.weight / this.state.height / this.state.height) * 703).toFixed(2);
    console.log("result", result);
    this.setState({
      bmi: result.toString()
    });
    console.log('this.state.bmi:', this.state.bmi)
  }

  handleSubmit = (event) => {
    event.preventDefault();
    console.log("handleSubmit");
    this.calculateBMI();
  };
  render() {
    return (
      <div className="search-bar ui segment">
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
              <form onSubmit={this.handleSubmit} className="ui form">
                <div className="field">
                  Enter Your Weight(lbs):{" "}
                  <input
                    onChange={this.handleChange}
                    name="weight"
                    type="text"
                    value={this.state.weight}
                  />
                  <br /> <br />
                  Enter Your Height(in.):{" "}
                  <input
                    onChange={this.handleChange}
                    name="height"
                    type="text"
                    value={this.state.height}
                  />
                  <br /> <br />
                </div>
                <h2>{this.state.bmi}</h2>
                <Button type="submit" variant="success">
                  Calculate BMI
                </Button>

              </form>
            </Col>
            <Col md="4">
              <p id="lbl" style={{ textAlign: "center" }}>
              </p>
              <p>
                If your BMI is less than 18.5, it falls within the underweight range{" "}
                <br /> If your BMI is 18.5 to 25.0, it falls within the normal range{" "}
                <br /> If your BMI is 25.1 to 30.0, it falls within the overweight range
                <br /> If your BMI is 30.1 or higher, it falls within the obese range{" "}
              </p>
            </Col>
          </Row>
        </Container>
      </div>

    );
  }
}
export default Calculator;



//   render() {
//     return (
//       <div>
//         Enter Your Weight(lbs):{" "}
//         <input style={{ width: "15%" }} type="text" onChange={this.handle.bind(this)} id="w" />
//         <br /> <br />
//         Enter Your Height(in.):{" "}
//         <input style={{ width: "17%" }} type="text" onChange={this.handle.bind(this)} id="h" />
//         <br /> <br />
//         <Button id="calculateBMI" onclick={}>
//           Calculate BMI
//         </Button>
//         <br></br>
//         <p style={{ fontSize: "larger" }} id="result" />
//       </div>
//     );
//   }
// }


// const Calculator = () => (
//   <Container>
//     <Row>
// <Col md="4">
//   <img
//     src="/images/BMI.jpg"
//     alt="BMI image"
//     height={200}
//     width={300}
//   ></img>
// </Col>
//       <Col md="4" style={{ width: "auto" }}>
//         <p id="lbl" style={{ textAlign: "center" }}>
//           BMI Calculator
//         </p>
//         Enter Your Weight(lbs):{" "}
//         <input style={{ width: "15%" }} type="text" id="w" />
//         <br /> <br />
//         Enter Your Height(in.):{" "}
//         <input style={{ width: "17%" }} type="text" id="h" />
//         <br /> <br />
// <Button id="calculateBMI" onclick="BMI()">
//   Calculate BMI
// </Button>
// <br></br>
// <p style={{ fontSize: "larger" }} id="result" />
//       </Col>
      // <Col md="4">
      //   <p id="lbl" style={{ textAlign: "center" }}>
      //   </p>
      //   <p>
      //     If your BMI is less than 18.5, it falls within the underweight range{" "}
      //     <br /> If your BMI is 18.5 to 25.0, it falls within the normal range{" "}
      //     <br /> If your BMI is 25.1 to 30.0, it falls within the overweight
      //     range <br /> If your BMI is 30.1 or higher, it falls within the obese
      //     range{" "}
      //   </p>
      // </Col>
//     </Row>
//   </Container>
// );


