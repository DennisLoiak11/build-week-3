import { useEffect } from "react";
import { getExperiencesAction } from "../redux/actions";
import { useDispatch, useSelector } from "react-redux";
import { Button, Col, Row } from "react-bootstrap";
import { Link } from "react-router-dom";

const Experiences = props => {
  const dispatch = useDispatch();
  const myExperiencesUrl = `https://striveschool-api.herokuapp.com/api/profile/${props.me._id}/experiences`;
  useEffect(() => {
    dispatch(getExperiencesAction(myExperiencesUrl));
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);
  const myExperiences = useSelector(state => state.experiences.content);

  return (
    <section className="section mb-3 py-3">
      <div className="ms-4">
        <h2>Esperienze</h2>
        {myExperiences.map(experience => (
          <section className="my-3" key={experience._id}>
            <Row>
              <Col sm={2} className="d-flex align-items-center justify-content-center">
                <img src={props.me.image} className="experience-img" alt="" />
              </Col>
              <Col>
                <h2>
                  {experience.role} presso {experience.company}
                </h2>
                <p>
                  <span>{new Date(experience.startDate).toLocaleDateString()}</span> -
                  <span>{new Date(experience.endDate).toLocaleDateString()}</span>
                </p>
                <p>Descrizione: {experience.description}</p>
              </Col>
            </Row>
          </section>
        ))}
        <div className="d-flex justify-content-center mb-2">
          <Link to={"addExperience"}>
            <Button size="lg" variant="primary">
              Aggiungi Esperienza
            </Button>
          </Link>
        </div>
      </div>
    </section>
  );
};

export default Experiences;
