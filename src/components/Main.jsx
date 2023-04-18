import { Col, Container, Row } from "react-bootstrap";
import Attivita from "./Attivita";
import Info from "./Info";
import PrimoPiano from "./PrimoPiano";
import Prova from "./ProvaFetch";

const Main = () => {
  return (
    <>
      <Container fluid>
        <Row>
          <Col sm={9}>
            <Info />
            <PrimoPiano />
            <Attivita />
          </Col>
          <Col sm={3}>
            <Prova />
          </Col>
        </Row>
      </Container>
    </>
  );
};
export default Main;
