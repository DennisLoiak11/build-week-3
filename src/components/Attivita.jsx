import { Badge, Col, Row } from "react-bootstrap";

const Attivita = () => {
  return (
    <>
      <section className="container-fluid py-3 mb-3 section">
        <div className="ms-2">
          <h2>Attività</h2>
          <div className="d-flex gap-3">
            <Badge>Post</Badge>
            <Badge>Immagini</Badge>
            <Badge>Articoli</Badge>
          </div>
          <p>
            Pubblicato da <span>Salvatore Aranzulla</span> - 4m
          </p>
          <p>Verse: cos'è e come funziona</p>
          <Row>
            <Col>...</Col>
            <Col className="text-end">.. visualizza altro</Col>
          </Row>
        </div>
      </section>
      <section className="container-fluid py-3 mt-1 section mb-3">
        <h2 className="ms-2">Formazione</h2>
        <Row className="ms-2">
          <Col>...</Col>
          <Col className="">
            <p>Università Bocconi</p>
            <p>Laurea triennale in Scienze Economiche, CLEAM</p>
          </Col>
        </Row>
      </section>
    </>
  );
};

export default Attivita;
