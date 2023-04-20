import { useEffect } from "react";
import { getPersoneAction } from "../redux/actions";
import { useDispatch, useSelector } from "react-redux";
import { LockFill } from "react-bootstrap-icons";
import { Link } from "react-router-dom";

const Prova = () => {
  //   const endpoint = "https://striveschool-api.herokuapp.com/api/profile/";
  //   const [persone, setPersone] = useState([]);

  //   const fetchPersone = async () => {
  //     try {
  //       const response = await fetch(endpoint, {
  //         headers: {
  //           Authorization:
  //             "Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJfaWQiOiI2NDNkMDg4YzE4NmE4NzAwMTQzODY3ZTEiLCJpYXQiOjE2ODE3MjE0ODUsImV4cCI6MTY4MjkzMTA4NX0.YAakfz_XOWE0qUDLpCGsBav_D1Vse921HETnb11Nw4Q"
  //         }
  //       });
  //       if (response.ok) {
  //         const data = await response.json();
  //         setPersone(data);
  //         console.log(data);
  //       } else {
  //         console.log("error");
  //       }
  //     } catch (error) {
  //       console.log("error");
  //     }
  //   };

  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getPersoneAction());
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  const persone = useSelector(state => state.persone.content);
  console.log(persone);

  return (
    <>
      <section className="section">
        <h2 className="m-3">Altri profili consultati</h2>
        {persone.slice(5, 9).map(persona => (
          <div className="m-3">
            <div className="mb-1 mt-1">
              <div className="d-flex mt-2 mb-2">
                <img className="w-25 rounded-circle me-2" src={persona.image} alt="" />
                <div className="">
                  <Link className="text-decoration-none" to={`/persona/${persona._id}`}>
                    <h3>
                      {persona.name}
                      {persona.surname}
                    </h3>
                  </Link>
                  <p className="text-secondary">{persona.title}</p>
                </div>
              </div>
              <button className="border border-1 text-secondary">
                <LockFill className="ms-1 me-1 mb-1" />
                Messaggio
              </button>
            </div>
            <hr />
          </div>
        ))}
      </section>
    </>
  );
};

export default Prova;
