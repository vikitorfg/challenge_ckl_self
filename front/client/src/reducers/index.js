import { combineReducers } from "redux";
import articlesReducer from "./articlesReducer";
import subjectsReducer from "./subjectsReducer";
import switchToogleMenuReducer from "./switchToogleMenuReducer";
import googleOauthReducer from "./googleOauthReducer.js";

export default combineReducers({
  articlesReducer,
  subjectsReducer,
  switchToogleMenuReducer,
  googleOauthReducer
});
