import React, { useState } from "react";
import Button from "react-bootstrap/Button";
import Offcanvas from "react-bootstrap/Offcanvas";
import { RiMenuFill, RiArrowDropDownFill } from "react-icons/ri";
import Card from "react-bootstrap/Card";
import ListGroup from "react-bootstrap/ListGroup";

function OffCanvas({ name, ...props }) {
  const [show, setShow] = useState(false);

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  return (
    <>
      <a className="text-decoration-none text-dark" href="#">
        <div className="text-center" onClick={handleShow}>
          <RiMenuFill className="fs-5 mb-1" />
          <p className="nav-text">
            Per le aziende <RiArrowDropDownFill className="fs-5" />
          </p>
        </div>
      </a>

      <Offcanvas show={show} onHide={handleClose} {...props}>
        <Offcanvas.Header closeButton>
          <Offcanvas.Title>Per le aziende</Offcanvas.Title>
        </Offcanvas.Header>
        <Offcanvas.Body>
          <Card className="mb-5" style={{ width: "18rem" }}>
            <Card.Body>
              <ListGroup variant="flush">
                <ListGroup.Item>
                  <h6>Scopri altri prodotti Linkedin</h6>
                </ListGroup.Item>
                <ListGroup.Item></ListGroup.Item>
              </ListGroup>
              <Card.Title>Card Title</Card.Title>
              <Card.Subtitle className="mb-2 text-muted">Card Subtitle</Card.Subtitle>
              <Card.Text>
                Some quick example text to build on the card title and make up the bulk of the card's content.
              </Card.Text>
            </Card.Body>
          </Card>

          <Card style={{ width: "18rem" }}>
            <Card.Body>
              <ListGroup variant="flush">
                <ListGroup.Item>
                  <h6>Assistenza alle aziende di LinkedIn</h6>
                </ListGroup.Item>
                <ListGroup.Item></ListGroup.Item>
              </ListGroup>
              <Card.Title>Card Title</Card.Title>
              <Card.Subtitle className="mb-2 text-muted">Card Subtitle</Card.Subtitle>
              <Card.Text>
                Some quick example text to build on the card title and make up the bulk of the card's content.
              </Card.Text>
            </Card.Body>
          </Card>
        </Offcanvas.Body>
      </Offcanvas>
    </>
  );
}

export default OffCanvas;
