const initialNewsState = {
  votes: [],
};
const votesReducer = (state = initialNewsState, action) => {
  switch (action.type) {
    case "ADD_VOTES":
      return {
        ...state,
        votes: action.payload,
      };
    default:
      return state;
  }
};

export default votesReducer;
