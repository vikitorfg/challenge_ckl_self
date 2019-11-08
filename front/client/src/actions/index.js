import backend from "../apis/backend";

export const fetchArticles = subject => async dispatch => {
  let response;

  if (subject) {
    response = await backend.get(`articles/?subject__name=${subject}`);
  } else {
    response = await backend.get("articles/");
  }

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
