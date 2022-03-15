import { combineReducers } from "redux";
import hideNewsReducer from "./hideNewsReducer";
import votesReducer from "./votesReducer";

const rootReducer = combineReducers({
  hideNews: hideNewsReducer,
  votes: votesReducer,
});

export default rootReducer;
