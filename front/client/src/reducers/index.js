import { combineReducers } from "redux";
import articlesReducer from "./articlesReducer";
import subjectsReducer from "./subjectsReducer";
import switchToogleMenuReducer from "./switchToogleMenuReducer";

export default combineReducers({
  articlesReducer,
  subjectsReducer,
  switchToogleMenuReducer
});
