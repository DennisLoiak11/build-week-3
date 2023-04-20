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
    const personaUrl = `https://striveschool-api.herokuapp.com/api/profile/${params.id}`;
    useEffect(() => {
        dispatch(getPersonaAction(personaUrl));
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, []);
    const persona = useSelector(state => state.persona.content);
    console.log(persona);
    console.log(params);

    return (
        <>
            <section className="text-danger pb-3 section tondo">
                <div className="profile-imgs">
                    <img className="cover-img" src={badge} alt="cover-img" />
                    <img className="profile" src={img} alt="profile-img" />
                </div>
                <Row className="prifle-info px-3">
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
                            <div><Badge>+ Segui</Badge></div>
                            <div className="mx-2"><Badge>Messaggio</Badge></div>
                            <div><Badge>Altro</Badge></div>
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