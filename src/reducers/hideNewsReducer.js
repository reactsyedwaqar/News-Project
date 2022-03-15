const initialNewsState = {
  newsId: []
}
const hideNewsReducer = (state = initialNewsState, action) => {
  switch (action.type) {
    case "HIDE_NEWS":
      return {
        ...state,
        newsId: action.payload,
      };
    default:
      return state;
  }
};

export default hideNewsReducer;
