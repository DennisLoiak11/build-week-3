import { useEffect } from "react";
import { Badge, Col, Row } from "react-bootstrap";
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
      <section className="pb-3 section tondo">
        <div className="profile-imgs">
          <img className="cover-img rounded-top" src={badge} alt="cover-img" />
          <img className="profile" src={img} alt="profile-img" />
        </div>
        <Row className="px-3 prifle-info">
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
              <Badge>+ Segui</Badge>
              <Badge className="mx-2">Messaggio</Badge>
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
