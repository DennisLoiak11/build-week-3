export const GET_PERSONE = "GET_PERSONE";

export const getPersoneAction = () => {
  return async (dispatch, getState) => {
    try {
      let resp = await fetch("https://striveschool-api.herokuapp.com/api/profile/", {
        headers: {
          Authorization:
            "Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJfaWQiOiI2NDNkMDg4YzE4NmE4NzAwMTQzODY3ZTEiLCJpYXQiOjE2ODE3MjE0ODUsImV4cCI6MTY4MjkzMTA4NX0.YAakfz_XOWE0qUDLpCGsBav_D1Vse921HETnb11Nw4Q"
        }
      });
      if (resp.ok) {
        let fetchedPersone = await resp.json();
        dispatch({ type: GET_PERSONE, payload: fetchedPersone });
      } else {
        console.log("error");
      }
    } catch (error) {
      console.log("error");
    }
  };
};
