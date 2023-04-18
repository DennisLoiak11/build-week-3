import { GET_PERSONE } from "../actions";

const initialState = {
  content: []
};

const personeReducer = (state = initialState, action) => {
  switch (action.type) {
    case GET_PERSONE:
      return {
        ...state,
        content: action.payload
      };
    default:
      return state;
  }
};

export default personeReducer;
