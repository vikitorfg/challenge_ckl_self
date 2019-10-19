import { combineReducers } from "redux";
import articlesReducer from "./articlesReducer";
import subjectsReducer from "./subjectsReducer";

export default combineReducers({
  articlesReducer,
  subjectsReducer
});
