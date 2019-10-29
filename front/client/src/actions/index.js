import backend from "../apis/backend";

export const fetchArticles = subject => async dispatch => {
  let article = "articles/";

  if (subject) {
    article += `?subject__name=${subject}`;
  }

  const response = await backend.get(article);

  dispatch({ type: "FETCH_ARTICLES", payload: response.data.results });
};

export const fetchSubjects = () => async dispatch => {
  const response = await backend.get("subjects/");

  dispatch({ type: "FETCH_SUBJECTS", payload: response.data });
};

export const switchToogleMenu = () => {
  return {
    type: "SWITCH_TOOGLE_MENU"
  };
};

export const signIn = userId => {
  return {
    type: "SIGN_IN",
    payload: userId
  };
};

export const signOut = () => {
  return { type: "SIGN_OUT" };
};
