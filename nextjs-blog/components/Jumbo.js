import Jumbotron from "react-bootstrap/Jumbotron";

const Jumbo = () => (
  <Jumbotron fluid>
    <div
      style={{
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
      }}
      classname="container"
    >
      <img
        src="/images/logo.png"
        style={{ width: "200px", height: "auto", marginLeft: "10px" }}
        classname="float-left"
        alt="Logo"
      />
      <br></br>
      <h1 className="display-4" data-component="display1">
        Welcome to Plan-it-Fitness
      </h1>
      <br></br>
    </div>
  </Jumbotron>
);

export default Jumbo;
