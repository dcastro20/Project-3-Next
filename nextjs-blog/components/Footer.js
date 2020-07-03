import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";

const FooterPage = () => {
  return (
    <footer className="footer bg-black small text-center text-black-50">
      <Container fluid className="text-center text-md-left">
        <Row>
          <Col md="6">
            <h5 className="title">Follow Us!</h5>
            <p>
              Enjoying this page? Give us a like! Follow us on our social media
              pages.
            </p>
          </Col>
          <Col md="6">
            <h5 className="title">Links</h5>
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
        <Container fluid>
          &copy; {new Date().getFullYear()} Copyright:{" "}
          <a href="https://www.mdbootstrap.com"> Plan-it-Fitness </a>
        </Container>
      </div>
    </footer>
  );
};

export default FooterPage;
