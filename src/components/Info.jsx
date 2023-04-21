import { Badge, Col, Row } from "react-bootstrap";
import badge from "../img/Studio-Ghibli.jpg";

const Info = props => {
  console.log(props);
  return (
    <>
      <section className="container-fluid mb-3 section">
        <div className="profile-imgs">
          <img className="cover-img" src={badge} alt="cover-img" />
          <img className="profile" src={props.me.image} alt="profile-img" />
        </div>
        <Row className="profile-info">
          <Col md={8} className="ms-2">
            <h2 className="fw-bold">
              {props.me.name} {props.me.surname}
            </h2>
            <div className="info mb-4">
              <p className="bio">{props.me.bio}</p>
              <p className="area">
                {props.me.area} <span className="text-primary fw-bold">- Informazioni di contatto</span>
              </p>
            </div>
            <div className="d-flex gap-3 mb-4">
              <Badge>+ Segui</Badge>
              <Badge>Messaggio</Badge>
              <Badge>Altro</Badge>
            </div>
          </Col>
        </Row>
      </section>
    </>
  );
};

export default Info;
