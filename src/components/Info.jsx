import { Badge, Col, Row } from "react-bootstrap";
import img from "../img/Studio-Ghibli.jpg";
import badge from "../img/marvel-snap.jpg";

const Info = () => {
  return (
    <>
      <section class="container-fluid pb-3 section">
        <div className="profile-imgs">
          <img className="cover-img" src={badge} alt="cover-img" />
          <img className="profile" src={img} alt="profile-img" />
        </div>
        <Row className="prifle-info">
          <Col md={8}>
            <h2 className="fw-bold">Salvatore Aranzulla</h2>
            <p>Imprenditore e Divulgatore informatico su Aranzulla.it</p>
            <p>
              Milano, Lombardia, Italia <span>- Informazioni di contatto</span>
            </p>
            <p>Più di 500 collegamenti</p>
            <div className="d-flex">
              <Badge>+ Segui</Badge>
              <Badge>Messaggio</Badge>
              <Badge>Altro</Badge>
            </div>
          </Col>
          <Col md={4}>
            <ul>
              <li>https://wwww.aranzulla.it</li>
              <li>Bocconi University</li>
            </ul>
          </Col>
        </Row>
      </section>
    </>
  );
};

export default Info;
