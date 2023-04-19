import { useEffect } from "react";
import { Badge, Col, Row, Image } from "react-bootstrap";
import img from "../img/Studio-Ghibli.jpg";
import badge from "../img/marvel-snap.jpg";
import { getMeAction } from "../redux/actions";
import { useDispatch, useSelector } from "react-redux";

const Info = () => {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getMeAction());
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  const me = useSelector(state => state.me.content);
  console.log(me);

  return (
    <>
      <section className="container-fluid pb-3 section">
        <div className="profile-imgs">
          <Image fluid className="cover-img" src={badge} alt="cover-img" />
          <img className="profile" src={img} alt="profile-img" />
        </div>
        <Row className="prifle-info">
          <Col md={8}>
            <h2 className="fw-bold">
              {me.name} {me.surname}
            </h2>
            <p>{me.bio}</p>
            <p>
              {me.area} <span>- Informazioni di contatto</span>
            </p>
            <p>Più di 500 collegamenti</p>
            <div className="d-flex">
              <Badge className="me-3">+ Segui</Badge>
              <Badge className="mx-3">Messaggio</Badge>
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
