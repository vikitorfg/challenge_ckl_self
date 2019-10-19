import backend from "../apis/backend";

export const fetchArticles = () => async dispatch => {
  const response = await backend.get("articles/");

  console.log(response);

  dispatch({ type: "FETCH_ARTICLES", payload: response.data.results });
};
