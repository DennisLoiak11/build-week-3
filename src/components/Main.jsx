import { Col, Container, Row } from "react-bootstrap";
import Attivita from "./Attivita";
import Info from "./Info";
import PrimoPiano from "./PrimoPiano";
import Prova from "./ProvaFetch";
import Experience from "./Experience";

const Main = () => {
  return (
    <>
      <Container fluid>
        <Row>
          <Col sm={9}>
            <Info className='rounded' />
            <PrimoPiano className='rounded' />
            <Attivita className='rounded' />
          </Col>
          <Col lg={3}>
            <Prova className='rounded' />
          </Col>
        </Row>
        <Row>
          <Col sm={9}>
          <Experience className='rounded'/>
          </Col>
        </Row>
      </Container>
    </>
  );
};
export default Main;
