import { PersonFillAdd } from "react-bootstrap-icons";
import { App } from "react-bootstrap-icons";
import { BookmarkFill } from "react-bootstrap-icons";
import { Plus } from "react-bootstrap-icons";
import "../App.css";

function AsideSx1() {
  return (
    <>
      <section className="col-3 bordogrigio rounded d-none d-lg-block">
        <div>
          <div className="bgimage d-flex justify-content-center">
            <img className="width0 rounded-circle mt-5" src="" alt="" />
          </div>
        </div>
        <div className="div1 d-flex flex-column justify-content-center align-items-center pt-5 bordobot">
          <p className="fw-semibold mb-1">Gerry Scotti</p>
          <p className="p0 text-muted">Conduttore televisivo</p>
        </div>
        <div className="d-flex justify-content-between align-items-center bordobot">
          <div className="m-3">
            <p className="mb-0 fw-semibold text-muted p0">Collegamenti</p>
            <p className="mb-0 fw-semibold p0">Espandi la tua rete</p>
          </div>
          <div className="me-3">
            <PersonFillAdd />
          </div>
        </div>
        <div className="bordobot">
          <div className="m-3">
            <p className="mb-0 text-muted p0">Accedi a strumenti e informazioni in esclusiva</p>
            <p className="p0">
              <App className="me-1 bg-warning" />
              Prova premium gratis
            </p>
          </div>
        </div>
        <div>
          <p className="m-3 p0">
            <BookmarkFill className="me-1" />I miei elementi
          </p>
        </div>
      </section>
      <section className="col-3 bordogrigio rounded mt-3 fw-semibold d-none d-lg-block">
        <div className="bordobot">
          <div className="m-3 d-flex flex-column">
            <a className="p0 mb-3">Gruppi</a>
            <div className="d-flex justify-content-between mb-3">
              <a className="p0">Eventi</a>
              <Plus />
            </div>
            <a className="p0">Hashtag seguiti</a>
          </div>
        </div>
        <p className="m-3 text-center text-muted">Scopri di più</p>
      </section>
    </>
  );
}

export default AsideSx1;
