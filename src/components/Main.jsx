import { Col, Container, Row } from "react-bootstrap";
import Attivita from "./Attivita";
import Info from "./Info";
import PrimoPiano from "./PrimoPiano";
import Aside from "./Aside";
import { useEffect } from "react";
import { getMeAction } from "../redux/actions";
import { useDispatch, useSelector } from "react-redux";
import Experiences from "./Experiences";

const Main = () => {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getMeAction());
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  const me = useSelector(state => state.me.content);
  console.log(me);

  return (
    <>
      <Container className="mt-3">
        <Row>
          <Col sm={12} md={9}>
            <Info me={me} />
            <PrimoPiano />
            <Attivita />
            <Experiences me={me} />
          </Col>
          <Col lg={3}>
            <Aside />
          </Col>
        </Row>
      </Container>
    </>
  );
};
export default Main;
