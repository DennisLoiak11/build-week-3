import { Badge, Col, Row } from "react-bootstrap";

const Attivita = () => {
  return (
    <>
      <section className="container-fluid py-3 mt-1 section tondo">
        <h2>Attività</h2>
        <p>tot follower</p>
        <div className="d-flex">
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
      </section>
      <section className="container-fluid py-3 mt-1 section tondo">
        <h2>Formazione</h2>
        <Row>
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
