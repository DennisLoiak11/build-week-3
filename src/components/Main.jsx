import { Col, Container, Row } from "react-bootstrap";
import Attivita from "./Attivita";
import Info from "./Info";
import PrimoPiano from "./PrimoPiano";
import Aside from "./Aside";
import Experience from "./Experience";

const Main = () => {
  return (
    <>
      <Container fluid>
        <Row>
          <Col sm={9}>
            <Info/>
            <PrimoPiano/>
            <Attivita/>
          </Col>
          <Col lg={3}>
            <Aside/>
          </Col>
        </Row>
        <Row>
          <Col sm={9}>
          <Experience/>
          </Col>
        </Row>
      </Container>
    </>
  );
};
export default Main;
