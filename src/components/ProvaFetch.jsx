import { useState, useEffect } from "react";
import { Col, Row } from "react-bootstrap";

const Prova = () => {
  const endpoint = "https://striveschool-api.herokuapp.com/api/profile/";
  const [persone, setPersone] = useState([]);

  const fetchPersone = async () => {
    try {
      const response = await fetch(endpoint, {
        headers: {
          Authorization:
            "Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJfaWQiOiI2NDNkMDg4YzE4NmE4NzAwMTQzODY3ZTEiLCJpYXQiOjE2ODE3MjE0ODUsImV4cCI6MTY4MjkzMTA4NX0.YAakfz_XOWE0qUDLpCGsBav_D1Vse921HETnb11Nw4Q"
        }
      });
      if (response.ok) {
        const data = await response.json();
        setPersone(data);
        console.log(data);
      } else {
        console.log("error");
      }
    } catch (error) {
      console.log("error");
    }
  };

  useEffect(() => {
    fetchPersone();
  }, []);
  return (
    <>
      <section>
        {persone.slice(5, 9).map(persona => (
          <Row>
            <Col>
              <img className="persona-img" src={persona.image} alt="" />
            </Col>
            <Col>
              <p>
                {persona.name} {persona.surname}
              </p>
              <p>{persona.title}</p>
            </Col>
          </Row>
        ))}
      </section>
    </>
  );
};

export default Prova;
