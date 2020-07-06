import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";

const FooterPage = () => {
  return (
    <footer className="footer bg-black small text-center text-black-50">
      <Container fluid className="text-center text-md-left">
        <Row>
          <Col md="6">
            <h5 className="title" style={{ color: "black" }}>
              Enjoying this page?
            </h5>
            <p style={{ color: "black" }}>
              Follow and give us a like on our social media pages.
            </p>
            <p style={{ color: "black" }}>
              Developed by: Danzan Ubush, Doris Castro, John Romano and Jonathan
              Kwan
            </p>
          </Col>
          <Col md="6">
            <h5 className="title" style={{ color: "black" }}>
              Links
            </h5>
            <ul>
              <li className="list-unstyled">
                <a href="#!">GitHub</a>
              </li>
              <li className="list-unstyled">
                <a href="#!">FaceBook</a>
              </li>
              <li className="list-unstyled">
                <a href="#!">Instagram</a>
              </li>
              <li className="list-unstyled">
                <a href="#!">Twitter</a>
              </li>
            </ul>
          </Col>
        </Row>
      </Container>
      <div className="footer-copyright text-center py-3">
        <Container fluid style={{ color: "black" }}>
          &copy; {new Date().getFullYear()} Copyright:{" "}
          <a href="https://github.com/dcastro20/Project-3-Next" target="_blank">
            {" "}
            Plan-it-Fitness{" "}
          </a>
        </Container>
      </div>
    </footer>
  );
};

export default FooterPage;
