import { useState } from "react";
import { Button, Col, Container, Form, Row } from "react-bootstrap";

const ExperienceForm = () => {
  const [experience, setExperience] = useState({
    role: "",
    company: "",
    area: "",
    startDate: "",
    endDate: "",
    description: ""
  });

  const handleChange = (propertyName, propertyValue) => {
    setExperience({
      ...experience,
      [propertyName]: propertyValue
    });
  };

  const handleSubmit = async e => {
    e.preventDefault();
    try {
      const response = await fetch(
        `https://striveschool-api.herokuapp.com/api/profile/643d088c186a8700143867e1/experiences`,
        {
          method: "POST",
          body: JSON.stringify(experience),
          headers: {
            "Content-Type": "application/json",
            Authorization:
              "Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJfaWQiOiI2NDNkMDg4YzE4NmE4NzAwMTQzODY3ZTEiLCJpYXQiOjE2ODE3MjE0ODUsImV4cCI6MTY4MjkzMTA4NX0.YAakfz_XOWE0qUDLpCGsBav_D1Vse921HETnb11Nw4Q"
          }
        }
      );
      if (response.ok) {
        setExperience({
          role: "",
          company: "",
          area: "",
          startDate: "",
          endDate: "",
          description: ""
        });
      } else {
        alert("errore dell'invio dei dati");
      }
    } catch (error) {
      alert(error.message);
    }
  };

  return (
    <>
      <Container className="mt-5">
        <h2 className="text-center">Scrivi una tua esperienza</h2>
        <Row className="justify-content-center">
          <Col md={10}>
            <Form onSubmit={handleSubmit}>
              <Form.Group className="mb-3" controlId="role">
                <Form.Label>Ruolo</Form.Label>
                <Form.Control
                  type="text"
                  placeholder="Ruolo"
                  value={experience.role}
                  onChange={e => {
                    handleChange("role", e.target.value);
                  }}
                  required
                />
              </Form.Group>

              <Form.Group className="mb-3" controlId="company">
                <Form.Label>Nome compagnia</Form.Label>
                <Form.Control
                  type="text"
                  placeholder="Company name"
                  value={experience.company}
                  onChange={e => {
                    handleChange("company", e.target.value);
                  }}
                  required
                />
              </Form.Group>

              <Form.Group className="mb-3" controlId="startDate">
                <Form.Label>Data inizio</Form.Label>
                <Form.Control
                  type="text"
                  placeholder="YEAR-MONTH-DAY"
                  value={experience.startDate}
                  onChange={e => {
                    handleChange("startDate", e.target.value);
                  }}
                  required
                />
              </Form.Group>

              <Form.Group className="mb-3" controlId="endDate">
                <Form.Label>Data fine</Form.Label>
                <Form.Control
                  type="text"
                  placeholder="YEAR-MONTH-DAY"
                  value={experience.endDate}
                  onChange={e => {
                    handleChange("endDate", e.target.value);
                  }}
                />
              </Form.Group>

              <Form.Group className="mb-3" controlId="description">
                <Form.Label>Description</Form.Label>
                <Form.Control
                  type="text"
                  placeholder="Description"
                  value={experience.description}
                  onChange={e => {
                    handleChange("description", e.target.value);
                  }}
                />
              </Form.Group>

              <Form.Group className="mb-3" controlId="area">
                <Form.Label>Area</Form.Label>
                <Form.Control
                  type="text"
                  placeholder="Area"
                  value={experience.area}
                  onChange={e => {
                    handleChange("area", e.target.value);
                  }}
                />
              </Form.Group>

              <Button variant="primary" type="submit">
                Submit experience
              </Button>
            </Form>
          </Col>
        </Row>
      </Container>
    </>
  );
};

export default ExperienceForm;
