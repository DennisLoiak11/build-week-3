import { Badge, Col, Row } from "react-bootstrap";
import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { getPersonaAction } from "../redux/actions";
import { useParams } from "react-router-dom";
import Epicode from "../img/logo_epicode.png"

const Experience = () => {
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
            <>
                <section className="container-fluid py-3 mt-1 section tondo">
                    <h2 className="mb-4">Esperienze</h2>
                    <div className="d-flex">
                        <div> 
                        <img src={Epicode} alt="Img" className="me-3 rounded-circle" width={"45 px"} height={"45 px"} />
                        </div>
                        
                        <div>
                            <h6>EPICODE</h6>
                            <p className="mb-1">Full Stack Web Developer</p>
                            <p className="text-secondary mb-3">Gen 2023 - Lug 2023</p>
                            <p className="fw-bold mb-0">Competenze:</p>
                            <p>HTML5 · CSS · JavaScript · DOM · EVENTS · OOP · Responsiveness · Flexbox · UX/UI · Animations · OOP II · AJAX · Fetch · REST · Node.js · LocalStorage · Bootstrap · SASS</p>
                        </div>
                    </div>
                </section>
            </>
        </>
    )
}

export default Experience;