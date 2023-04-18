import { useState, useEffect } from "react";


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
          <div className="col-3 border rounded">
          <h2 className="m-3">Altri profili consultati</h2>
          <div className="m-3">
              <div className="mb-1 mt-1">
                  <img className="w-25 radius" src={persona.image} alt="" />
                  <h3>{persona.name}{persona.surname}</h3>
                  <p className="text-secondary">{persona.title}</p>
                  <button className="btn border border-2 text-secondary">Messaggio</button>
              </div>
          </div>
      </div>
        ))}
      </section>
    </>
  );
};

export default Prova;
