import { GET_PERSONA } from "../actions";

const initialState = {
  content: {}
};

const personaReducer = (state = initialState, action) => {
  switch (action.type) {
    case GET_PERSONA:
      return {
        ...state,
        content: action.payload
      };
    default:
      return state;
  }
};

export default personaReducer;
