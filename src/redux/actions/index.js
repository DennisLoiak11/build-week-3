export const GET_PERSONE = "GET_PERSONE";
export const GET_ME = "GET_ME";
export const GET_PERSONA = "GET_PERSONA";
export const GET_EXPERIENCE = "GET_EXPERIENCE";
export const GET_POSTS = "GET_POSTS";

const endpoint = "https://striveschool-api.herokuapp.com/api/profile/";

export const getPersoneAction = () => {
  return async (dispatch, getState) => {
    getState();
    try {
      let resp = await fetch(endpoint, {
        headers: {
          Authorization:
            "Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJfaWQiOiI2NDNkMDg4YzE4NmE4NzAwMTQzODY3ZTEiLCJpYXQiOjE2ODE3MjE0ODUsImV4cCI6MTY4MjkzMTA4NX0.YAakfz_XOWE0qUDLpCGsBav_D1Vse921HETnb11Nw4Q"
        }
      });
      if (resp.ok) {
        let fetchedPersone = await resp.json();
        dispatch({ type: GET_PERSONE, payload: fetchedPersone });
      } else {
        console.log("error getting persone");
      }
    } catch (error) {
      console.log("error getting persone");
    }
  };
};

export const getMeAction = () => {
  return async dispatch => {
    try {
      let resp = await fetch(`${endpoint}me`, {
        headers: {
          Authorization:
            "Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJfaWQiOiI2NDNkMDg4YzE4NmE4NzAwMTQzODY3ZTEiLCJpYXQiOjE2ODE3MjE0ODUsImV4cCI6MTY4MjkzMTA4NX0.YAakfz_XOWE0qUDLpCGsBav_D1Vse921HETnb11Nw4Q"
        }
      });
      if (resp.ok) {
        let fetchedMe = await resp.json();
        dispatch({ type: GET_ME, payload: fetchedMe });
      } else {
        console.log("error getting me");
      }
    } catch (error) {
      console.log("error getting me");
    }
  };
};

export const getPersonaAction = url => {
  return async dispatch => {
    try {
      const response = await fetch(url, {
        headers: {
          Authorization:
            "Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJfaWQiOiI2NDNkMDg4YzE4NmE4NzAwMTQzODY3ZTEiLCJpYXQiOjE2ODE3MjE0ODUsImV4cCI6MTY4MjkzMTA4NX0.YAakfz_XOWE0qUDLpCGsBav_D1Vse921HETnb11Nw4Q"
        }
      });
      if (response.ok) {
        let fetchedPersona = await response.json();
        dispatch({ type: GET_PERSONA, payload: fetchedPersona });
      }
    } catch (error) {
      console.log(error);
    }
  };
};

export const getExperiencesAction = url => {
  return async dispatch => {
    try {
      const response = await fetch(url, {
        headers: {
          Authorization:
            "Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJfaWQiOiI2NDNkMDg4YzE4NmE4NzAwMTQzODY3ZTEiLCJpYXQiOjE2ODE3MjE0ODUsImV4cCI6MTY4MjkzMTA4NX0.YAakfz_XOWE0qUDLpCGsBav_D1Vse921HETnb11Nw4Q"
        }
      });
      if (response.ok) {
        let fetchedExperiences = await response.json();
        dispatch({ type: GET_EXPERIENCE, payload: fetchedExperiences });
      }
    } catch (error) {
      console.log(error);
    }
  };
};

export const getPostsAction = url => {
  return async dispatch => {
    try {
      const response = await fetch(url, {
        headers: {
          Authorization:
            "Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJfaWQiOiI2NDNkMDg4YzE4NmE4NzAwMTQzODY3ZTEiLCJpYXQiOjE2ODE3MjE0ODUsImV4cCI6MTY4MjkzMTA4NX0.YAakfz_XOWE0qUDLpCGsBav_D1Vse921HETnb11Nw4Q"
        }
      });
      if (response.ok) {
        let fetchedPosts = await response.json();
        dispatch({ type: GET_POSTS, payload: fetchedPosts });
      }
    } catch (error) {
      console.log(error);
    }
  };
};

// export const getExperienceAction = () => {
//     return async dispatch => {
//         try {
//             let resp= await fetch("")
//         }
//     }
// }
