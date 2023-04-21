import { useEffect } from "react";
import { getExperiencesAction } from "../redux/actions";
import { useDispatch, useSelector } from "react-redux";
import { Alert, Col, Container, Row } from "react-bootstrap";
import { useParams } from "react-router-dom";

const PersonaExperiences = props => {
  const params = useParams();
  const dispatch = useDispatch();
  const personaUrl = `https://striveschool-api.herokuapp.com/api/profile/${params.id}/experiences`;
  useEffect(() => {
    dispatch(getExperiencesAction(personaUrl));
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);
  const experiences = useSelector(state => state.experiences.content);
  console.log(params.id);

  if (experiences.length > 0) {
    return (
      <section className="section container mb-3 py-3">
        <div className="ms-4">
          <h2>Esperienze</h2>
          {experiences.map(experience => (
            <section className="my-3">
              <Row>
                <Col sm={2} className="d-flex align-items-center justify-content-center"></Col>
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
        </div>
      </section>
    );
  } else {
    return (
      <>
        <Container>
          <Alert variant="primary">Questa persona non ha esperienza</Alert>
        </Container>
      </>
    );
  }
};

export default PersonaExperiences;
