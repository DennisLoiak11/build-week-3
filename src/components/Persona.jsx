import img from "../img/Studio-Ghibli.jpg";
import badge from "../img/marvel-snap.jpg";
import { Badge, Col, Row } from "react-bootstrap";
import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { getPersonaAction } from "../redux/actions";
import { useParams } from "react-router-dom";

const Persona = () => {
  const params = useParams();
  const dispatch = useDispatch();
  const personaUrl = `https://striveschool-api.herokuapp.com/api/profile/${params._id}`;
  useEffect(() => {
    dispatch(getPersonaAction(personaUrl));
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);
  const persona = useSelector(state => state.persona.content);
  console.log(persona);
  console.log(params);

  return (
    <>
      <section className="container-fluid pb-3 section">
        <div className="profile-imgs">
          <img className="cover-img" src={badge} alt="cover-img" />
          <img className="profile" src={img} alt="profile-img" />
        </div>
        <Row className="prifle-info">
          <Col md={8}>
            <h2 className="fw-bold">
              {persona.name} {persona.surname}
            </h2>
            <p>{persona.bio}</p>
            <p>
              {persona.area} <span>- Informazioni di contatto</span>
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

export default Persona;
